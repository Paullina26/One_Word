export interface GlobalProviderProps {
  children: React.ReactNode;
}

export interface GlobalContextValue {
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
  userLanguages: IUserLanguage;
  setUserLanguages: React.Dispatch<React.SetStateAction<IUserLanguage>>;
  isErrorOpen: boolean;
  setIsErrorOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface IUserLanguage {
  baseLanguage: number;
  languageToLearn: number;
}
