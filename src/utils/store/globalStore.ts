import { create } from 'zustand';

import { AvailableLanguages } from '@data/option/language_options';
import { PreferencesResp, GlobalStoreState } from '@utils/GlobalContext/types';
import fetchWithToken from '@api/api';

export const useGlobalStore = create<GlobalStoreState>((set, get) => ({
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

  getUserSettings: async () => {
    console.log('getUserSettings');
    const resp: { response: PreferencesResp; status: number } = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });
    if (resp.status === 200) {
      console.log('resp', resp);
      set({ userSettings: resp.response });
    }
  },

  checkLoginStatus: async () => {
    const { isLoadingOpen, isLoginUser } = get();
    set({ isLoadingOpen: true });
    console.log('isLoadingOpen', isLoadingOpen);
    if (isLoadingOpen || isLoginUser) return;
    try {
      const userData = await fetchWithToken({
        endpoint: 'user',
        method: 'GET',
      });
      const { status } = userData;
      if (status !== 200) return get().resetLoginUser();
      console.log('userData', userData);
      // Handle successful login status
    } catch (error) {
      console.error(error);
      // Handle error
    } finally {
      console.log('isLoadingOpen', isLoadingOpen);
      set({ isLoadingOpen: false });
    }
  },

  resetLoginUser: () => {
    set({
      isLoginUser: false,
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
    });
  },
}));
