import { FC } from 'react';
import styled, { css } from 'styled-components';

import { Button } from '@components/Shared/Buttons/Button';
import { useChat } from '@components/Chat/ChatProvider';
import RecordIcon from '@assets/icon/microphone.svg';
import StopIcon from '@assets/icon/stop.svg';

export const MicrophoneButton = styled(Button)<{ $big?: boolean; disabled?: boolean }>`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 50px;
  height: 50px;

  font-weight: 500;
  border-radius: 50%;
  margin: 0;
  margin-left: 20px;
  cursor: pointer;
  transform: scale(0.8);

  img {
    width: 25px;
    height: 25px;
  }

  ${props =>
    props.$big &&
    css`
      transform: translateX(50%) scale(4);
      top: 60%;
      bottom: auto;
      right: 50%;
    `}

  filter: ${({ disabled }) => disabled && 'grayscale(0.75)'};
`;

interface IProps {
  big?: boolean;
}

export const Microphone: FC<IProps> = ({ big }) => {
  const { isRecording, stopRecording, startRecording, isAiSpeaking } = useChat();

  if (isAiSpeaking)
    return (
      <MicrophoneButton onClick={() => {}} type='button' $big={big} disabled>
        <img src={RecordIcon} alt='Microphone Icon' />
      </MicrophoneButton>
    );

  return (
    <MicrophoneButton
      onClick={isRecording ? stopRecording : startRecording}
      type='button'
      $big={big}
    >
      {isRecording ? (
        <img src={StopIcon} alt='Microphone Icon' />
      ) : (
        <img src={RecordIcon} alt='Microphone Icon' />
      )}
    </MicrophoneButton>
  );
};

export default Microphone;
