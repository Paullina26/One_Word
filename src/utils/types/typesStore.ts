import { User, PreferencesResp } from '../types/types';

export interface UserState {
  isLoginUser: boolean;
  user: User | null;
  setIsLoginUser: (isLoginUser: boolean) => void;
  setUser: (user: User | null) => void;
  setLoginUser: (user: User) => void;
  resetLoginUser: () => void;
  checkLoginStatus: () => Promise<void>;
}

export interface UserSettingsState {
  userSettings: PreferencesResp;
  setUserSettings: (settings: PreferencesResp) => void;
  getUserSettings: () => Promise<void>;
}

export interface UIState {
  isOpenMenu: boolean;
  isLoadingOpen: boolean;
  isErrorOpen: boolean;
  setIsOpenMenu: (isOpen: boolean) => void;
  setIsLoadingOpen: (isLoading: boolean) => void;
  setIsErrorOpen: (isError: boolean) => void;
}
