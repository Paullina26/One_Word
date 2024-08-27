export interface GlobalProviderProps {
  children: React.ReactNode;
}

export type User = {
  username: string;
  isAi: boolean;
  id: string;
};

export interface GlobalContextValue {
  isLoginUser: boolean;
  setIsLoginUser: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingUser: boolean;
  setIsLoadingUser: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingOpen: boolean;
  setIsLoadingOpen: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  userLanguages: IUserLanguage;
  setUserLanguages: React.Dispatch<React.SetStateAction<IUserLanguage>>;
  isErrorOpen: boolean;
  setIsErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resetLoginUser: () => void;
  setLoginUser: (user: User, isLogin?: boolean) => void;
}

export interface IUserLanguage {
  baseLanguage: number;
  languageToLearn: number;
}

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
