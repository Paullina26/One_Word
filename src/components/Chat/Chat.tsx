import { FC, useState } from 'react';
import { useAudioRecorder } from 'react-audio-voice-recorder';

import Microphone from 'components/Microphone/Micophone';
import Textarea from 'components/Textarea/Textarea';

import * as S from './StyleChat';

interface Message {
  content: string;
  role: string;
}

const Chat: FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const {
    startRecording,
    stopRecording,
    togglePauseResume,
    recordingBlob,
    isRecording,
    isPaused,
    recordingTime,
    mediaRecorder,
  } = useAudioRecorder();

  const handleSend = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    console.log('send', inputValue);
  };

  const handleStartRecording = () => {
    startRecording();
    console.log('start');
    // const audio = document.createElement('audio');
    // audio.src = url;
    // audio.controls = true;
    // document.body.appendChild(audio);
  };

  const handleStopRecording = () => {
    console.log({ recordingBlob });
    stopRecording();
    if (recordingBlob) {
      const url = URL.createObjectURL(recordingBlob);
      console.log({ url });
    }
  };

  return (
    <S.ChatWrapper>
      <S.Messages></S.Messages>
      <S.Interface>
        <Textarea value={inputValue} onChange={setInputValue} />
        <S.StyledButton>Send</S.StyledButton>
        <Microphone
          onClick={isRecording ? handleStopRecording : handleStartRecording}
          isRecording={isRecording}
        />
      </S.Interface>
    </S.ChatWrapper>
  );
};

export default Chat;
