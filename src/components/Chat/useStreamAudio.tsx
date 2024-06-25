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

  const audioContextRef = useRef<AudioContext | null>(null);

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
    initializeAudioContext();
  }, []);

  const getApiKey = async () => {
    const apiKey = await getOpenaiApiKey();
    setApiKey(apiKey);
  };

  const initializeAudioContext = () => {
    const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const isIOS = /iP(hone|od|ad)/.test(navigator.platform);

    if (AudioContext && (isSafari || isIOS)) {
      const fixAudioContext = () => {
        if (!audioContextRef.current) {
          audioContextRef.current = new AudioContext();
        }

        const buffer = audioContextRef.current.createBuffer(1, 1, 22050);
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
        source.start(0);
        document.removeEventListener('touchstart', fixAudioContext);
        document.removeEventListener('touchend', fixAudioContext);
      };

      document.addEventListener('touchstart', fixAudioContext);
      document.addEventListener('touchend', fixAudioContext);
    } else if (AudioContext) {
      audioContextRef.current = new AudioContext();
    }
  };

  const playNext = async () => {
    if (!audioContextRef.current) return;

    if (audioQueue.length === 0 || isPlaying) return;
    let newAudioQueue = [...audioQueue];
    newAudioQueue.sort((a, b) => a.sequence - b.sequence);
    setIsPlaying(true);

    const audio = newAudioQueue[0];
    newAudioQueue = newAudioQueue.slice(1);
    setAudioQueue(newAudioQueue);

    if (!audio?.chunk) return;

    await audioContextRef.current.decodeAudioData(
      audio.chunk,
      function (buffer) {
        if (!audioContextRef.current) return;
        const source = audioContextRef.current.createBufferSource();
        source.buffer = buffer;
        source.connect(audioContextRef.current.destination);
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

  return { streamAudio, streamingAnswer };
};
