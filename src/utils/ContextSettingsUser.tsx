import { useEffect, useState, createContext } from 'react';
import { FC } from 'react';

interface ContextSettingsUserProviderProps {
  children: React.ReactNode;
}
interface ContextSettingsUserValue {
  defaultWordLanguage: string;
  setDefaultWordLanguage: React.Dispatch<React.SetStateAction<string>>;
  defaultWordLanguageTranslate: string;
  setDefaultWordLanguageTranslate: React.Dispatch<React.SetStateAction<string>>;
}

export const UserSettingsContext = createContext<ContextSettingsUserValue>(
  {} as ContextSettingsUserValue
);

const UserSettingsProvider: FC<ContextSettingsUserProviderProps> = ({ children }) => {
  const [defaultWordLanguage, setDefaultWordLanguage] = useState('English');
  const [defaultWordLanguageTranslate, setDefaultWordLanguageTranslate] = useState('Polish');

  const values = {
    defaultWordLanguage,
    setDefaultWordLanguage,
    defaultWordLanguageTranslate,
    setDefaultWordLanguageTranslate,
  };

  return <UserSettingsContext.Provider value={values}>{children}</UserSettingsContext.Provider>;
};

export default UserSettingsProvider;
