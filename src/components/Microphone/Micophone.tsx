import { FC, useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { routes } from 'data/routes';
import { Button } from 'components/Shared/Buttons/Button';
import RecordIcon from 'assets/icon/microphone.svg';
import StopIcon from 'assets/icon/stop.svg';

export const MicrophoneButton = styled(Button)`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 50%;
  margin: 0;
  margin-left: 20px;
  cursor: pointer;

  img {
    width: 25px;
    height: 25px;
  }
`;

interface IProps {
  onClick: () => void;
  isRecording?: boolean;
}

export const Microphone: FC<IProps> = ({ onClick, isRecording }) => {
  return (
    <MicrophoneButton onClick={onClick}>
      {isRecording ? (
        <img src={StopIcon} alt='Microphone Icon' />
      ) : (
        <img src={RecordIcon} alt='Microphone Icon' />
      )}
    </MicrophoneButton>
  );
};

export default Microphone;
