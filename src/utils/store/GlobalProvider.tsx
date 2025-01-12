import { FC, createContext, useContext } from 'react';
import { useGlobalStore } from './globalStore';
import { GlobalProviderProps, GlobalStoreState } from '../GlobalContext/types';

const GlobalContext = createContext<GlobalStoreState>({} as GlobalStoreState);

export const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const {
    isLoginUser,
    isLoadingUser,
    isOpenMenu,
    isLoadingOpen,
    isErrorOpen,
    user,
    userSettings,
    setIsLoginUser,
    setIsLoadingUser,
    setIsOpenMenu,
    setIsLoadingOpen,
    setIsErrorOpen,
    setUser,
    setUserSettings,
    getUserSettings,
    checkLoginStatus,
    resetLoginUser,
  } = useGlobalStore();

  return (
    <GlobalContext.Provider
      value={{
        isLoginUser,
        isLoadingUser,
        isOpenMenu,
        isLoadingOpen,
        isErrorOpen,
        user,
        userSettings,
        setIsLoginUser,
        setIsLoadingUser,
        setIsOpenMenu,
        setIsLoadingOpen,
        setIsErrorOpen,
        setUser,
        setUserSettings,
        getUserSettings,
        checkLoginStatus,
        resetLoginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
