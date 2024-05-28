import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FC } from 'react';

import fetchWithToken from 'API/api';
import { GlobalContextValue, GlobalProviderProps, IUserLanguage, User } from './types';
import { AvailableLanguages } from 'data/option/language_options';
import { PreferencesResp } from 'types/api';

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();

  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [user, setUser] = useState<null | User>(null);
  const [userLanguages, setUserLanguages] = useState<IUserLanguage>({
    languageToLearn: AvailableLanguages.en,
    baseLanguage: AvailableLanguages.pl,
  });

  const getUserSettings = async (userId: string, isLogin?: boolean) => {
    const resp: { response: PreferencesResp; status: number } = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });

    if (resp.status === 200)
      setUserLanguages({
        languageToLearn: resp.response.languageToLearn,
        baseLanguage: resp.response.baseLanguage,
      });

    // if (isLogin) {
    //   resp.response.notifications.forEach(notification => {
    //     console.log({ notification });
    //     scheduleNotification({ time: notification.time, userId });
    //   });
    // }
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
    setUserLanguages({
      languageToLearn: AvailableLanguages.en,
      baseLanguage: AvailableLanguages.pl,
    });
  };

  // if login or getUser is ok
  const setLoginUser = (user: User, isLogin?: boolean) => {
    setIsLoginUser(true);
    setUser(user);
    getUserSettings(user.id, isLogin);
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
    userLanguages,
    setUserLanguages,
    resetLoginUser,
    setLoginUser,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
