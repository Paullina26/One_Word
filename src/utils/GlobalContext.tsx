import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { API, headers } from 'API/api';
import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

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
    const token = localStorage.getItem('token');
    if (!token || isLoginUser) return;
    try {
      const response = await fetch(API.isLoginUser, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
      });
      const { status } = response;
      if (status !== 200) {
        setIsLoginUser(false);
        return;
      }

      const user = await response.json();

      if (user.isAi === 'true') setIsAiUser(true);
      if (status === 200) setIsLoginUser(true);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoadingOpen(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <GlobalContext.Provider value={values}>
      {children}
      {isLoadingOpen && <CircularProgress />}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
