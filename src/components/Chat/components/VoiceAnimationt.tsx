import { useLottie } from 'lottie-react';
import voice from './voice.json';
import { useEffect } from 'react';
import { useChat } from '../ChatProvider';

const VoiceAnimation = () => {
  const { isAiSpeaking } = useChat();
  const options = {
    animationData: voice,
    loop: true,
  };

  const { View, pause, play } = useLottie(options);

  useEffect(() => {
    if (isAiSpeaking) play();
    else pause();
  }, [isAiSpeaking]);

  return <>{View}</>;
};

export default VoiceAnimation;
