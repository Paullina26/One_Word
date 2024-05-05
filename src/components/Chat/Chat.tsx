import { FC, useEffect, useRef } from 'react';

import Microphone from 'components/Chat/components/Micophone';
import Textarea from 'components/Textarea/Textarea';

import * as S from './StyleChat';
import SendIcon from './components/SendIcon';
import VisibleMessages from './components/VisibleMessage';
import { useChat } from './ChatProvider';
import VoiceView from './components/VoiceView';
import AiLoading from './components/AiLoading';
import Message from './components/Message';

const Chat: FC = () => {
  const messagesRef = useRef<HTMLDivElement>(null);

  const {
    sendAudioMessage,
    inputValue,
    setInputValue,
    handleSendText,
    recorderBlob,
    streamingAnswer,
    isMessagesVisible,
    isWaitingForAnswer,
    messages,
  } = useChat();

  useEffect(() => {
    if (!recorderBlob) return;
    sendAudioMessage(recorderBlob);
  }, [recorderBlob]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [isMessagesVisible, messages]);

  return (
    <>
      {isMessagesVisible ? (
        <S.ChatWrapper>
          <S.Messages ref={messagesRef}>
            {messages.map((message, index) => (
              <Message key={`${index}-${message}`} role={message.role} content={message.content} />
            ))}
            {streamingAnswer.length > 0 && <Message content={streamingAnswer} role='assistant' />}
          </S.Messages>
          {isWaitingForAnswer && <AiLoading />}
          <S.Interface onSubmit={e => handleSendText(e)}>
            <S.ButtonWrapper>
              <VisibleMessages />
            </S.ButtonWrapper>
            <S.TextareaWrapper>
              <Textarea value={inputValue} onChange={setInputValue} paddingForButtons />
              <Microphone />
              <SendIcon onClick={handleSendText} />
            </S.TextareaWrapper>
          </S.Interface>
        </S.ChatWrapper>
      ) : (
        <VoiceView />
      )}
    </>
  );
};

export default Chat;
