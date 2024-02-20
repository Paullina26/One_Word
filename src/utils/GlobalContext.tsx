import { useEffect, useState, createContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { API, headers } from 'API/api';
import { FC } from 'react';
import { routes } from 'data/routes';
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
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);

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
    console.log(999);

    setIsLoadingOpen(true);
    const token = localStorage.getItem('token');
    if (!token || isLoginUser) {
      setIsLoadingOpen(false);
      return;
    }
    try {
      const response = await fetch(API.isLoginUser, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
      });
      const { status } = response;

      if (status === 200) setIsLoginUser(true);
      navigate(`${routes.LEARN_TODAYS_WORD.to}`);
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
