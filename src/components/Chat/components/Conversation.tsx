import { FC, useEffect, useRef } from 'react';

import Textarea from 'components/Textarea/Textarea';

import * as S from '../StyleChat';
import { useChat } from '../ChatProvider';
import Message from './Message';
import AiLoading from './AiLoading';
import FinishConversationIcon from './Buttons/FinishConversation';
import Microphone from './Buttons/Micophone';
import SendIcon from './SendIcon';
import VisibleMessages from './Buttons/VisibleMessage';

interface ConversationProps {}

const Conversation: FC<ConversationProps> = () => {
  const {
    inputValue,
    setInputValue,
    handleSendText,
    streamingAnswer,
    isMessagesVisible,
    isWaitingForAnswer,
    messages,
    mistakesList,
  } = useChat();

  const messagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [isMessagesVisible, messages]);

  return (
    <>
      <S.Messages ref={messagesRef}>
        {messages.map((message, index) => (
          <Message key={`${index}-${message}`} role={message.role} content={message.content} />
        ))}
        {streamingAnswer.length > 0 && <Message content={streamingAnswer} role='assistant' />}
      </S.Messages>
      {isWaitingForAnswer && <AiLoading />}
      <S.Interface onSubmit={e => handleSendText(e)}>
        <S.ButtonWrapper>
          <FinishConversationIcon />
          <VisibleMessages />
        </S.ButtonWrapper>
        <S.TextareaWrapper>
          <Textarea value={inputValue} onChange={setInputValue} paddingForButtons />
          <Microphone />
          <SendIcon onClick={handleSendText} />
        </S.TextareaWrapper>
      </S.Interface>
    </>
  );
};

export default Conversation;
