import { useEffect, useState, createContext } from 'react';
import { useLocation } from 'react-router-dom';
import { API, headers } from 'API/api';
import { FC } from 'react';

// const EventViewContext = createContext<EventViewContextValue>({} as EventViewContextValue);
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
  const [isLoadingOpen, setIsLoadingOpen] = useState(false);
  console.log('---IS_LOGIN_USER---GlobalCon', isLoginUser);
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

  // useEffect(() => {
  //   setIsOpenMenu(false);
  // }, [location.pathname]);

  const checkLoginStatus = async () => {
    const token = localStorage.getItem('token');
    // console.log('Local_Storage:', localStorage.token);
    // console.log('1---TOKEN---In_Local_Storage:', token);
    if (!token || isLoginUser) return;
    setIsLoadingUser(true);
    try {
      const response = await fetch(API.isLoginUser, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
      });
      // console.log('2---RESPONSE---GlobalCon_isLoginUser', response);
      const { status } = response;
      // console.log('3---STATUS---GlobalCon_isLoginUser', status);
      if (status === 200) setIsLoginUser(true);
      // console.log('4---GlobalCon_IsLoginUser_status', isLoginUser);
    } catch (err) {
      console.log('5---useEf_GlobCont_LoadingUser', err);
    } finally {
      setIsLoadingUser(false);
    }
  };

  useEffect(() => {
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
