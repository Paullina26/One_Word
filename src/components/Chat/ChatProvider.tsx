import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContextValue, Message, Props } from './types';

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

  const toggleMessagesVisibility = () => setIsMessagesVisible(prev => !prev);
  const toggleAiSpeaking = (isSpeaking: boolean) => {
    setIsAiSpeaking(isSpeaking);
  };

  const updateMessages = (message: Message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  };

  const { startRecording, stopRecording, recorderBlob, isRecording } = useRecording();
  const { streamAudio, streamingAnswer } = useStreamAudio({ updateMessages, toggleAiSpeaking });

  const handleSendText = (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    setIsWaitingForAnswer(true);
    sendMessage(inputValue, false);
  };

  const sendMessage = async (userMessage: string, isStreaming?: boolean) => {
    setInputValue('');
    // add message from user to all messages
    const prevMessages = [...messages];
    const newMessageFromUser = { content: userMessage, role: 'user' };
    setMessages([...prevMessages, newMessageFromUser]);

    const token = localStorage.getItem('token');

    const messageResp = await fetch(`${API_BASE_URL}chat/message`, {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
        'x-conversation-id': currentConversationId || '',
      },
      method: 'POST',
      body: JSON.stringify({
        query: userMessage,
        languageToLearn: 'English',
        isStreaming,
        todayWord: params.word || '',
      }),
    });

    setCurrentConversationId(messageResp?.headers?.get('x-conversation-id'));

    if (isStreaming) {
      const reader = messageResp.body?.getReader();
      if (!reader) return; //TODO message toast - something went wrong
      streamAudio(reader);
      setIsWaitingForAnswer(false);
      return;
    }

    // add message from ai to all messages
    const respJson = await messageResp.json();
    const newMessageFromAi = { content: respJson.answer, role: 'assistant' };
    const newMessagesFromAi = [...prevMessages, newMessageFromUser, newMessageFromAi];
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

    isMessagesVisible,
    toggleMessagesVisibility,
    isAiSpeaking,
    isWaitingForAnswer,
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
