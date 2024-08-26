import { FC } from 'react';
import { Navigate } from 'react-router-dom';

import { routes } from '@data/routes';

import { useChat } from './ChatProvider';
import Conversation from './components/Conversation';
import VoiceView from './components/VoiceView';
import Summary from './components/Summary';
import * as S from './StyleChat';

const Chat: FC = () => {
  const { isMessagesVisible, isSummaryOpen, isAi } = useChat();

  if (!isAi) return <Navigate replace to={routes.LEARN_TODAYS_WORD.to} />;

  return (
    <S.ChatWrapper>
      {isMessagesVisible && !isSummaryOpen && <Conversation />}
      {!isMessagesVisible && !isSummaryOpen && <VoiceView />}
      {isSummaryOpen && <Summary />}
    </S.ChatWrapper>
  );
};

export default Chat;
