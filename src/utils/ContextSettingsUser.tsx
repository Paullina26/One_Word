import { useEffect, useState, createContext, useContext } from 'react';
import { FC } from 'react';
import { API, headers } from 'API/api';
import { GlobalContext } from './GlobalContext';

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
  const { isLoginUser } = useContext(GlobalContext);
  const [defaultWordLanguage, setDefaultWordLanguage] = useState('English');
  const [defaultWordLanguageTranslate, setDefaultWordLanguageTranslate] = useState('Polish');

  const values = {
    defaultWordLanguage,
    setDefaultWordLanguage,
    defaultWordLanguageTranslate,
    setDefaultWordLanguageTranslate,
  };

  const getSettingUser = async () => {
    const token = localStorage.getItem('token');
    if (!token || isLoginUser) return;

    try {
      const response = await fetch(API.getUserSettings, {
        headers: { ...headers, Authorization: `Bearer ${token}` },
      });
      const { status } = response;
      console.log(status);
      if (status === 200) {
        const data = await response.json();
        console.log('settings are good', data);
      } else {
        console.log('settings are not good');
      }
    } catch (error) {
      console.log('Errors in ContextSettingsUser', error);
    }
  };

  useEffect(() => {
    getSettingUser();
  }, [isLoginUser]);

  return <UserSettingsContext.Provider value={values}>{children}</UserSettingsContext.Provider>;
};

export default UserSettingsProvider;
