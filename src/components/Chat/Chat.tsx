import { FC } from 'react';

import { useChat } from './ChatProvider';
import Conversation from './components/Conversation';
import VoiceView from './components/VoiceView';
import Summary from './components/Summary';
import * as S from './StyleChat';

const Chat: FC = () => {
  const { isMessagesVisible, isSummaryOpen } = useChat();

  return (
    <S.ChatWrapper>
      {isMessagesVisible && !isSummaryOpen && <Conversation />}
      {!isMessagesVisible && !isSummaryOpen && <VoiceView />}
      {isSummaryOpen && <Summary />}
    </S.ChatWrapper>
  );
};

export default Chat;
