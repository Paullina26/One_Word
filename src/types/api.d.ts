export interface ISingleNotification {
  type: number;
  time: string;
}

export interface PreferencesResp {
  userId: string;
  breakDay: number;
  isBreak: number;
  isSummary: boolean;
  notifications: ISingleNotification[];
  languageToLearn: number;
  baseLanguage: number;
  summaryDay: number;
}
