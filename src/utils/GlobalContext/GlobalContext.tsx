import { useEffect, useState, createContext, FC } from 'react';
import { useLocation } from 'react-router-dom';

import fetchWithToken from '@api/api';
import { AvailableLanguages } from '@data/option/language_options';

import {
  GlobalContextValue,
  GlobalProviderProps,
  PreferencesResp,
  User,
  UserSettings,
} from './types';

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();

  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [user, setUser] = useState<null | User>(null);
  const [userSettings, setUserSettings] = useState<UserSettings>({
    _id: '',
    userId: '',
    breakDay: 0,
    isBreak: false,
    isSummary: false,
    notifications: [],
    languageToLearn: AvailableLanguages.en,
    baseLanguage: AvailableLanguages.pl,
    summaryDay: 0,
  });

  const getUserSettings = async () => {
    const resp: { response: PreferencesResp; status: number } = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });
    if (resp.status === 200) {
      setUserSettings({
        ...resp.response,
      });
    }
  };

  const checkLoginStatus = async () => {
    setIsLoadingOpen(true);
    if (isLoadingOpen || isLoginUser) return;
    try {
      const userData = await fetchWithToken({
        endpoint: 'user',
        method: 'GET',
      });
      const { status } = userData;
      if (status !== 200) return resetLoginUser();
      if (status === 200) setLoginUser(userData.response);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingOpen(false);
    }
  };

  const resetLoginUser = () => {
    setIsLoginUser(false);
    setUser(null);
    setUserSettings({
      _id: '',
      userId: '',
      breakDay: 0,
      isBreak: false,
      isSummary: false,
      notifications: [],
      languageToLearn: AvailableLanguages.en,
      baseLanguage: AvailableLanguages.pl,
      summaryDay: 0,
    });
  };

  const setLoginUser = (user: User) => {
    setIsLoginUser(true);
    setUser(user);
    getUserSettings();
  };

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const values = {
    isLoginUser,
    setIsLoginUser,
    isLoadingUser,
    setIsLoadingUser,
    isOpenMenu,
    setIsOpenMenu,
    isLoadingOpen,
    setIsLoadingOpen,
    isErrorOpen,
    setIsErrorOpen,
    user,
    resetLoginUser,
    setLoginUser,
    userSettings,
    setUserSettings,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};
