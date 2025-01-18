export interface GlobalProviderProps {
  children: React.ReactNode;
}

export type User = {
  username: string;
  isAi: boolean;
  id: string;
};

export interface GlobalStoreState {
  isLoginUser: boolean;
  isLoadingUser: boolean;
  isOpenMenu: boolean;
  isLoadingOpen: boolean;
  isErrorOpen: boolean;
  user: User | null;
  userSettings: UserSettings;

  setIsLoginUser: (isLoginUser: boolean) => void;
  setIsLoadingUser: (isLoadingUser: boolean) => void;
  setIsOpenMenu: (isOpenMenu: boolean) => void;
  setIsLoadingOpen: (isLoadingOpen: boolean) => void;
  setIsErrorOpen: (isErrorOpen: boolean) => void;
  setUser: (user: User | null) => void;
  setUserSettings: (userSettings: UserSettings) => void;

  getUserSettings: () => Promise<void>;
  checkLoginStatus: () => Promise<void>;
  resetLoginUser: () => void;
  setLoginUser: (user: User) => void;
}

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
  isErrorOpen: boolean;
  setIsErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  resetLoginUser: () => void;
  setLoginUser: (user: User, isLogin?: boolean) => void;
  userSettings: UserSettings;
  setUserSettings: React.Dispatch<React.SetStateAction<UserSettings>>;
}

export interface IUserLanguage {
  baseLanguage: number;
  languageToLearn: number;
}

export interface ISingleNotification {
  type: number;
  time: string;
  _id: string;
}

export interface PreferencesResp {
  userId: string;
  breakDay: number;
  isBreak: boolean;
  isSummary: boolean;
  notifications: ISingleNotification[];
  languageToLearn: number;
  baseLanguage: number;
  summaryDay: number;
  _id: string;
}
export interface UserSettings {
  _id: string;
  userId: string;
  breakDay: number;
  isBreak: boolean;
  isSummary: boolean;
  notifications: ISingleNotification[];
  languageToLearn: number;
  baseLanguage: number;
  summaryDay: number;
}
