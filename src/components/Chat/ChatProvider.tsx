import React, { FC, createContext, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ChatContextValue, Message, Mistake, Props, Word } from './types';

import { useRecording } from './useRecording';
import { API_BASE_URL, headers } from 'API/api';
import { getOpenaiApiKey } from './helpers';
import { useStreamAudio } from './useStreamAudio';
import { toast } from 'react-toastify';

const mistakes = [
  {
    mistake: 'garnder',
    correction: 'gardener',
    id: '41176935-fc6a-4a2a-925e-1ac211d63dd8',
  },
  {
    mistake: 'i Wroclaw',
    correction: 'in Wroclaw',
    id: '25c65d15-8fd9-41a3-b535-4d859909bec6',
  },
  {
    mistake: 'are not so great as garden',
    correction: 'are not as great as the gardens',
    id: '1e356c4c-f9d0-4f92-a511-7be1b48bcbb2',
  },
  {
    mistake: 'answered in',
    correction: 'replied in',
    id: '17651915-4459-47d5-8f8d-8a9c13ea6ff3',
  },
  {
    mistake: 'ones that caught your attention',
    correction: 'What does it mean when something catches your attention?',
    id: '836121e3-cc14-4bdc-9c78-dfaf73ddb43f',
  },
];
const newWords = [
  {
    newWord: 'caught your attention',
    id: '7c8dc2e0-188f-4ae0-aa68-58d9ee0db95a',
  },
];

const ChatContext = createContext<ChatContextValue>({} as ChatContextValue);

export const ChatProvider: FC<Props> = ({ children }) => {
  const params = useParams();

  const [isMessagesVisible, setIsMessagesVisible] = useState(true);
  const [isAiSpeaking, setIsAiSpeaking] = useState(false);
  const [isWaitingForAnswer, setIsWaitingForAnswer] = useState(false);

  const [messages, setMessages] = useState<Message[]>([]);
  const [currentConversationId, setCurrentConversationId] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');
  const [mistakesList, setMistakesList] = useState<Mistake[]>(mistakes);
  const [newWordsList, setNewWordsList] = useState<Word[]>(newWords);
  const [isSummaryOpen, setIsSummaryOpen] = useState(true);

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
    // sendMessage();
  }, []);

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
    mistakesList,
    newWordsList,
    isSummaryOpen,

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
