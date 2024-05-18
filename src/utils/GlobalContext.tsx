import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
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
  const [isAiUser, setIsAiUser] = useState(false);
  const [userLanguages, setUserLanguages] = useState<IUserLanguage>({
    languageToLearn: AvailableLanguages.en,
    baseLanguage: AvailableLanguages.pl,
  });

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  const getUserSettings = async () => {
    const userData = await fetchWithToken({
      endpoint: 'getUserSettings',
      method: 'GET',
    });
    console.log(userData);
  };

  const checkLoginStatus = async () => {
    setIsLoadingOpen(true);
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
    } finally {
      setIsLoadingOpen(false);
    }
  };

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
    isAiUser,
    setIsAiUser,
    userLanguages,
    setUserLanguages,
  };

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {isLoadingOpen && <CircularProgress />}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
