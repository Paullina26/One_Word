import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { FC } from 'react';

import fetchWithToken from 'API/api';
import LoadingFullView from 'components/Shared/Loading/LoadingFullView';

interface GlobalProviderProps {
  children: React.ReactNode;
}
interface GlobalContextValue {
  isLoginUser: boolean;
  setIsLoginUser: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingUser: boolean;
  setIsLoadingUser: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenMenu: boolean;
  setIsOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isLoadingOpen: boolean;
  setIsLoadingOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isAiUser: boolean;
  setIsAiUser: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  const [isAiUser, setIsAiUser] = useState(false);

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
  };

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

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

      if (userData.response.isAi) setIsAiUser(true);
      if (status === 200) setIsLoginUser(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingOpen(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return <GlobalContext.Provider value={values}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
