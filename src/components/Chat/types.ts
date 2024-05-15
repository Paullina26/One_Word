export interface Message {
  content: string;
  role: string;
}

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
};

export type Props = {
  children: React.ReactNode;
};
