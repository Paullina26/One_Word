import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContextValue, Message, Mistake, Props, Word } from './types';

import { useRecording } from './useRecording';
import { API_BASE_URL, headers } from 'API/api';
import { getOpenaiApiKey } from './helpers';
import { useStreamAudio } from './useStreamAudio';

const ChatContext = createContext<ChatContextValue>({} as ChatContextValue);

export const ChatProvider: FC<Props> = ({ children }) => {
  const params = useParams();

  const [isMessagesVisible, setIsMessagesVisible] = useState(true);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isWaitingForAnswer, setIsWaitingForAnswer] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [mistakesList, setMistakesList] = useState<Mistake[]>([]);
  const [newWordsList, setNewWordsList] = useState<Word[]>([]);
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);

  const toggleMessagesVisibility = () => setIsMessagesVisible(prev => !prev);
  const toggleAiSpeaking = (isSpeaking: boolean) => setIsAiSpeaking(isSpeaking);
  const updateMessages = (message: Message) =>
    setMessages(prevMessages => [...prevMessages, message]);

  const { startRecording, stopRecording, recorderBlob, isRecording } = useRecording();
  const { streamAudio, streamingAnswer } = useStreamAudio({ updateMessages, toggleAiSpeaking });

  useEffect(() => {
    if (!recorderBlob) return;
    sendAudioMessage(recorderBlob);
  }, [recorderBlob]);

  useEffect(() => {
    // initial Message
    sendMessage();
  }, []);

  const handleNewChat = () => {
    setIsSummaryOpen(false);
    setMistakesList([]);
    setNewWordsList([]);
    sendMessage();
  };

  const handleSendText = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsWaitingForAnswer(true);
    sendMessage(inputValue, false);
  };

  const sendMessage = async (userMessage?: string, isStreaming?: boolean) => {
    if (currentConversationId && userMessage === '') return;
    setInputValue('');
    const prevMessages = [...messages];
    const newMessageFromUser = userMessage ? [{ content: userMessage, role: 'user' }] : [];
    // add message from user to all messages
    setMessages([...prevMessages, ...newMessageFromUser]);

    const token = localStorage.getItem('token');

    const messageResp = await fetch(`${API_BASE_URL}chat/message`, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        'x-conversation-id': currentConversationId || '',
      },
      method: 'POST',
      body: JSON.stringify({
        query: userMessage || '',
        languageToLearn: 'English',
        isStreaming,
        todayWord: params.word || '',
        currentConversationId,
      }),
    });
    const conversationId = messageResp?.headers?.get('x-conversation-id');
    setCurrentConversationId(conversationId);

    if (isStreaming) {
      const reader = messageResp.body?.getReader();
      if (!reader) return; //TODO message toast - something went wrong
      streamAudio(reader);
      setIsWaitingForAnswer(false);
      return;
    }

    // add message from ai to all messages
    const respJson = await messageResp.json();
    const newMessageFromAi = [{ content: respJson.answer, role: 'assistant' }];
    const newMessagesFromAi = [...prevMessages, ...newMessageFromUser, ...newMessageFromAi];
    setMessages(newMessagesFromAi);
    setIsWaitingForAnswer(false);
  };

  const sendAudioMessage = async (recordingBlob: Blob) => {
    setIsWaitingForAnswer(true);

    const apiKey = await getOpenaiApiKey();

    let formData = new FormData();
    formData.append('file', recordingBlob);
    formData.append('model', 'whisper-1');
    formData.append('prompt', 'Keep the spelling consistent.');
    formData.append('response_format', 'json');

    const whisperResp = await fetch('https://api.openai.com/v1/audio/transcriptions', {
      headers: {
        Authorization: 'Bearer ' + apiKey,
      },
      method: 'POST',
      body: formData,
    });

    const whisperText = await whisperResp.json();
    sendMessage(whisperText.text, true);
  };

  const finishConversation = async () => {
    console.log('FINISh');
    const token = localStorage.getItem('token');

    const finishResp = await fetch(`${API_BASE_URL}chat/finished-conversation`, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      body: JSON.stringify({
        conversationId: currentConversationId,
      }),
    });
    const finishRespJson: { mistakes: Mistake[]; newWords: Word[] } = await finishResp.json();

    setMistakesList(finishRespJson.mistakes);
    setNewWordsList(finishRespJson.newWords);

    // reset
    setIsSummaryOpen(true);
    setMessages([]);
    setCurrentConversationId(null);
    setIsMessagesVisible(false);
  };

  const value = {
    sendAudioMessage,
    inputValue,
    setInputValue,
    messages,

    recorderBlob,
    isRecording,
    stopRecording,
    startRecording,
    streamingAnswer,
    handleSendText,
    finishConversation,

    isMessagesVisible,
    toggleMessagesVisibility,
    isAiSpeaking,
    isWaitingForAnswer,

    handleNewChat,
    mistakesList,
    newWordsList,
    isSummaryOpen,
  };
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

export const useChat = (): ChatContextValue => {
  const context = useContext(ChatContext);

  if (!context) {
    throw new Error('Component beyond EventViewContext');
  }

  return context;
};
