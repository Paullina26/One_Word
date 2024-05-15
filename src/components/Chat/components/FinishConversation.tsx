import styled from 'styled-components';
import Icon from 'assets/icon/closeIcon.svg';
import { Button } from 'components/Shared/Buttons/Button';
import { useChat } from '../ChatProvider';

export const FinishConversationButton = styled(Button)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border-radius: 20px;
  margin: 0;
  margin-left: 20px;
  cursor: pointer;
  transform: scale(0.7);

  img {
    width: 22px;
    height: 22px;
    margin-right: 10px;
  }
`;

export const FinishConversationIcon = () => {
  const { finishConversation } = useChat();

  return (
    <FinishConversationButton type='button' onClick={finishConversation}>
      <img src={Icon} alt='Close Icon' /> Finish lesson
    </FinishConversationButton>
  );
};

export default FinishConversationIcon;
