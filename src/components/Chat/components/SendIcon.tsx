import { FC } from 'react';
import styled from 'styled-components';
import Icon from 'assets/icon/send_icon.svg';
import { Button } from 'components/Shared/Buttons/Button';

export const SendButton = styled(Button)`
  position: absolute;
  bottom: 10px;
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
`;

interface IProps {
  onClick: () => void;
}

export const SendIcon: FC<IProps> = ({ onClick }) => {
  return (
    <SendButton onClick={onClick} type='button'>
      <img src={Icon} alt='Microphone Icon' />
    </SendButton>
  );
};

export default SendIcon;
