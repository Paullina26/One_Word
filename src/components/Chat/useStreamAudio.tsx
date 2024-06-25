import { useEffect, useRef, useState } from 'react';
import { getOpenaiApiKey } from './helpers';
import { Message } from './types';

export const useStreamAudio = ({
  updateMessages,
  toggleAiSpeaking,
}: {
  updateMessages: (message: Message) => void;
  toggleAiSpeaking: (isSpeaking: boolean) => void;
}) => {
  const [apiKey, setApiKey] = useState<null | string>(null);

  const sentence = useRef('');
  let sequenceNum = 0;

  const [streamingAnswer, setStreamingAnswer] = useState('');
  const [audioQueue, setAudioQueue] = useState<{ chunk: ArrayBuffer; sequence: number }[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  useEffect(() => {
    if (!isFinish) return;
    updateMessages({ content: streamingAnswer, role: 'assistant' });
    setStreamingAnswer('');
    setIsFinish(false);
  }, [isFinish]);

  useEffect(() => {
    if (!isPlaying) {
      playNext();
      toggleAiSpeaking(false);
    } else toggleAiSpeaking(true);
  }, [audioQueue, isPlaying]);

  useEffect(() => {
    getApiKey();
    if (isSafariOrIOS()) {
      warmupAudioContextForIOS();
    }
  }, []);

  const getApiKey = async () => {
    const apiKey = await getOpenaiApiKey();
    setApiKey(apiKey);
  };

  const playNext = async () => {
    let audioContext = new AudioContext();

    if (audioQueue.length === 0 || isPlaying) return;
    let newAudioQueue = [...audioQueue];
    newAudioQueue.sort((a, b) => a.sequence - b.sequence);
    setIsPlaying(true);

    const audio = newAudioQueue[0];
    newAudioQueue = newAudioQueue.slice(1);
    setAudioQueue(newAudioQueue);

    if (!audio?.chunk) return;

    await audioContext.decodeAudioData(
      audio.chunk,
      function (buffer) {
        let source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContext.destination);
        source.onended = () => {
          setIsPlaying(false);
        };
        source.start(0);
      },
      function (err) {
        console.log('An error occurred: ' + err);
      }
    );
  };

  const streamAudio = async (reader: ReadableStreamDefaultReader<Uint8Array>) => {
    let decoder = new TextDecoder();

    const { done, value } = await reader.read();

    if (done && sentence.current === '') {
      setIsFinish(true);
      return;
    }

    const token = decoder.decode(value);
    sentence.current += token;
    setStreamingAnswer(prev => prev + token);

    if (/[.?!]/.test(sentence.current)) {
      const stopIndex = sentence.current.search(/[,.?!]/);
      const sentenceToPlay = sentence.current.slice(0, stopIndex + 1).trim();
      sentence.current = sentence.current.slice(stopIndex + 1).trim();
      const currentSequence = sequenceNum++;

      const respAudioAi = await fetch('https://api.openai.com/v1/audio/speech', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + apiKey,
        },
        body: JSON.stringify({
          model: 'tts-1',
          input: sentenceToPlay,
          voice: 'onyx',
          response_format: 'mp3',
        }),
      });

      const arrayBuffer = await respAudioAi.arrayBuffer();
      setAudioQueue(prev => [
        ...prev,
        { chunk: arrayBuffer, sequence: currentSequence, sentenceToPlay },
      ]);
    }

    streamAudio(reader);
  };

  const isSafariOrIOS = () => {
    const userAgent = window.navigator.userAgent;
    const isIOS = /iP(hone|od|ad)/.test(userAgent);
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    return isIOS || isSafari;
  };

  const warmupAudioContextForIOS = () => {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    if (window.AudioContext) {
      window.audioContext = new window.AudioContext();
    }

    const fixAudioContext = function (e) {
      if (window.audioContext) {
        // Create empty buffer
        var buffer = window.audioContext.createBuffer(1, 1, 22050);
        var source = window.audioContext.createBufferSource();
        source.buffer = buffer;
        // Connect to output (speakers)
        source.connect(window.audioContext.destination);
        // Play sound
        if (source.start) {
          source.start(0);
        } else if (source.play) {
          source.play(0);
        } else if (source.noteOn) {
          source.noteOn(0);
        }
      }
      // Remove events
      document.removeEventListener('touchstart', fixAudioContext);
      document.removeEventListener('touchend', fixAudioContext);
    };

    // iOS 6-8
    document.addEventListener('touchstart', fixAudioContext);
    // iOS 9+
    document.addEventListener('touchend', fixAudioContext);
  };

  return { streamAudio, streamingAnswer };
};
