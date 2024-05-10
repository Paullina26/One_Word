import { FC } from 'react';
import Chat from './Chat';
import { ChatProvider } from './ChatProvider';

const ChatWrapper: FC = () => {
  return (
    <ChatProvider>
      <Chat />
    </ChatProvider>
  );
};

export default ChatWrapper;
