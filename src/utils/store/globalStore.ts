import { create } from 'zustand';
import { AvailableLanguages } from '@data/option/language_options';
import { PreferencesResp, GlobalStoreState, User } from '@utils/types/types';
import fetchWithToken from '@api/api';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastOptions } from 'react-toastify';
import { toastColored } from '@helpers/StyleToastify';

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
    const resp: { response: PreferencesResp; status: number } = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });
    if (resp.status === 200) {
      set({ userSettings: resp.response });
    }
  },

  setLoginUser: (user: User) => {
    get().setIsLoginUser(true);
    get().setUser(user);
    get().getUserSettings();
  },

  checkLoginStatus: async () => {
    const { isLoadingOpen, isLoginUser } = get();
    set({ isLoadingOpen: true });
    if (isLoadingOpen || isLoginUser) return;
    try {
      const userData = await fetchWithToken({
        endpoint: 'user',
        method: 'GET',
      });
      const { status } = userData;
      if (status !== 200) return get().resetLoginUser();
      if (status === 200) get().setLoginUser(userData.response);
    } catch (error) {
      toast.error(`Error:${error}`, toastColored as ToastOptions<{}>);
    } finally {
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
