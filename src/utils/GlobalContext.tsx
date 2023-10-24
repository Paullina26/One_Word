import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { API, headers } from 'API/api';
import { FC } from 'react';

// const EventViewContext = createContext<EventViewContextValue>({} as EventViewContextValue);

interface GlobalProviderProps {
  children: React.ReactNode;
}

export const GlobalContext = createContext({
  isLoginUser: false,
  setIsLoginUser: () => {},
  isLoadingUser: false,
  setIsLoadingUser: () => {},
  isOpenMenu: false,
  setIsOpenMenu: () => {},
  isLoadingOpen: false,
  setIsLoadingOpen: () => {},
});

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const location = useLocation();
  // const [isLogin, setIsLogin] = useState(false);
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);

  const values = {
    isLoadingUser,
    setIsLoadingUser,
    isLoginUser,
    setIsLoginUser,
    // isLogin,
    // setIsLogin,
    isOpenMenu,
    setIsOpenMenu,
    isLoadingOpen,
    setIsLoadingOpen,
  };

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('TOKEN');
      if (!token || isLoginUser) return;
      setIsLoadingUser(true);
      try {
        const response = await fetch(API.isLoginUser, {
          headers: { ...headers, Authorization: `Bearer ${token}` },
        });
        const { status } = response;
        console.log('GlobalContext_isLoginUser', status);
        if (status === 200) setIsLoginUser(true);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoadingUser(false);
      }
    };
    checkLoginStatus();
  }, []);

  return (
    //@ts-ignore
    <GlobalContext.Provider value={values}>
      {children}
      {/* {isLoadingOpen && <Loading />} */}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
