import Microphone from 'components/Microphone/Micophone';
import { Button } from 'components/Shared/Buttons/Button';
import Input from 'components/Shared/Form/Input';
import { FC, useState } from 'react';
import styled from 'styled-components';

const ChatWrapper = styled.div`
  max-width: 100px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Messages = styled.div`
  width: 100%;
  flex-grow: 1;
`;

const Interface = styled.div`
  width: 100%;
`;

const Chat: FC = () => {
  const [isTextVisible, setIsTextVisible] = useState(true);
  const [inputValue, setInputValue] = useState('');

  return (
    <ChatWrapper>
      <Messages></Messages>
      <Interface>
        <form>
          <Input
            placeholder='Type a message'
            value={inputValue}
            onChange={setInputValue}
            $fontColorLabel='purpleDark'
            $isLightTeam={true}
          />
          <Button>Send</Button>
          <Microphone />
        </form>
      </Interface>
    </ChatWrapper>
  );
};

export default Chat;
