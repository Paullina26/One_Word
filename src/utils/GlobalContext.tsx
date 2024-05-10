import { useEffect, useState, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API_Endpoints, headers } from 'API/api';
import { FC } from 'react';
import { routes } from 'data/routes';
import CircularProgress from '@mui/material/CircularProgress';
import fetchWithToken from 'API/api';

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
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(true);

  const values = {
    isLoginUser,
    setIsLoginUser,
    isLoadingUser,
    setIsLoadingUser,
    isOpenMenu,
    setIsOpenMenu,
    isLoadingOpen,
    setIsLoadingOpen,
  };

  useEffect(() => {
    setIsOpenMenu(false);
  }, [location.pathname]);

  const checkLoginStatus = async () => {
    setIsLoadingOpen(true);
    try {
      const userData = await fetchWithToken({
        endpoint: 'user',
        method: 'GET',
      });

      if (userData) {
        setIsLoginUser(true);
      }
    } catch (err) {
      console.error(err);
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
