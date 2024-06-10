export interface Message {
  content: string;
  role: string;
}

export type Mistake = {
  correction: string;
  id: string;
  mistake: string;
};

export type Word = {
  newWord: string;
  id: string;
  inBaseLang: string;
};

export type ChatContextValue = {
  sendAudioMessage: (recordingBlob: Blob) => Promise<void>;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  messages: Message[];
  finishConversation: () => void;

  recorderBlob: Blob | null;
  isRecording: boolean;
  stopRecording: () => void;
  startRecording: () => void;
  streamingAnswer: string;
  handleSendText: (e?: React.FormEvent<HTMLFormElement>) => void;

  isMessagesVisible: boolean;
  toggleMessagesVisibility: () => void;
  isAiSpeaking: boolean;

  isWaitingForAnswer: boolean;

  handleNewChat: () => void;
  mistakesList: Mistake[];
  newWordsList: Word[];
  isSummaryOpen: boolean;
  isAi?: boolean;
};

export type Props = {
  children: React.ReactNode;
};
