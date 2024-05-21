import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FC } from 'react';

import fetchWithToken from 'API/api';
import { GlobalContextValue, GlobalProviderProps, IUserLanguage } from './GlobalContext/types';
import { AvailableLanguages } from 'data/option/language_options';

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isErrorOpen, setIsErrorOpen] = useState(false);
  const [isAiUser, setIsAiUser] = useState(false);
  const [userLanguages, setUserLanguages] = useState<IUserLanguage>({
    languageToLearn: AvailableLanguages.en,
    baseLanguage: AvailableLanguages.pl,
  });

  const getUserSettings = async () => {
    const resp = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });

    if (resp.status === 200)
      setUserLanguages({
        languageToLearn: resp.response.languageToLearn,
        baseLanguage: resp.response.baseLanguage,
      });
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
      if (status !== 200) return setIsLoginUser(false);
      if (status === 200) setIsLoginUser(true);

      if (userData.response.isAi) setIsAiUser(true);
      getUserSettings();
    } catch (err) {
      console.error(err);
      setIsErrorOpen(true);
    } finally {
      setIsLoadingOpen(false);
    }
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
    isAiUser,
    setIsAiUser,
    userLanguages,
    setUserLanguages,
  };

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
