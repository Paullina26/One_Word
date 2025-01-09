import create from 'zustand';
import { AvailableLanguages } from '@data/option/language_options';
import { User, UserSettings } from '@utils/GlobalContext/types';

interface GlobalState {
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
}

export const useGlobalStore = create<GlobalState>(set => ({
  isLoginUser: false,
  isLoadingUser: false,
  isOpenMenu: false,
  isLoadingOpen: false,
  isErrorOpen: false,
  user: null,
  userSettings: {
    _id: '',
    userId: '',
    breakDay: 0,
    isBreak: false,
    isSummary: false,
    notifications: [],
    languageToLearn: AvailableLanguages.en,
    baseLanguage: AvailableLanguages.pl,
    summaryDay: 0,
  },
  setIsLoginUser: isLoginUser => set({ isLoginUser }),
  setIsLoadingUser: isLoadingUser => set({ isLoadingUser }),
  setIsOpenMenu: isOpenMenu => set({ isOpenMenu }),
  setIsLoadingOpen: isLoadingOpen => set({ isLoadingOpen }),
  setIsErrorOpen: isErrorOpen => set({ isErrorOpen }),
  setUser: user => set({ user }),
  setUserSettings: userSettings => set({ userSettings }),
}));
