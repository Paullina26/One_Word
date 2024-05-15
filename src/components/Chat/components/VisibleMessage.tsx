import { FC } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Shared/Buttons/Button';
import HideMessages from 'assets/icon/message_hide.svg';
import UnhideMessages from 'assets/icon/message-unhide.svg';
import { useChat } from '../ChatProvider';

export const VisibleMessagesButton = styled(Button)`
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
  transform: scale(0.7);

  img {
    width: 25px;
    height: 25px;
  }
`;

export const VisibleMessages: FC = () => {
  const { isMessagesVisible, toggleMessagesVisibility } = useChat();

  return (
    <VisibleMessagesButton onClick={toggleMessagesVisibility} type='button'>
      {isMessagesVisible ? (
        <img src={HideMessages} alt='Microphone Icon' />
      ) : (
        <img src={UnhideMessages} alt='Microphone Icon' />
      )}
    </VisibleMessagesButton>
  );
};

export default VisibleMessages;
