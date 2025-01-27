import { create } from 'zustand';
import { AvailableLanguages } from '@data/option/language_options';
import { PreferencesResp, GlobalStoreState, User } from '@utils/types/types';
import fetchWithToken from '@api/api';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastOptions } from 'react-toastify';
import { toastColored } from '@helpers/StyleToastify';
import { UserState } from '@utils/types/typesStore';


export const useUserStore = create<UserState>((set, get) => ({
  isLoginUser: false,
  user: null,

  setIsLoginUser: isLoginUser => set({ isLoginUser }),
  setUser: user => set({ user }),

  setLoginUser: user => {
    get().setIsLoginUser(true);
    get().setUser(user);
  },

  resetLoginUser: () => {
    set({
      isLoginUser: false,
      user: null,
    });
  },

  checkLoginStatus: async () => {
    try {
      const userData = await fetchWithToken({
        endpoint: 'user',
        method: 'GET',
      });
      const { status } = userData;
      if (status !== 200) {
        get().resetLoginUser();
        return;
      }
      get().setLoginUser(userData.response);
    } catch (error) {
      toast.error(`Error: ${error}`, toastColored as ToastOptions<{}>);
    }
  },
}));
