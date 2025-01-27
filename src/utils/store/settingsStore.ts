import { create } from 'zustand';
import { PreferencesResp } from '@utils/types/types';
import fetchWithToken from '@api/api';
import { AvailableLanguages } from '@data/option/language_options';
import { UserSettingsState } from '@utils/types/typesStore';



export const useSettingsStore = create<UserSettingsState>(set => ({
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

  setUserSettings: settings => set({ userSettings: settings }),

  getUserSettings: async () => {
    const resp = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });

    if (resp.status === 200) {
      set({ userSettings: resp.response });
    }
  },
}));
