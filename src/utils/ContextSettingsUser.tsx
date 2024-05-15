import { useEffect, useState, createContext, useContext } from 'react';
import { FC } from 'react';
import { GlobalContext } from './GlobalContext';

import fetchWithToken from 'API/api';
import { mappedLanguages } from 'data/option/language_options';

interface ContextSettingsUserProviderProps {
  children: React.ReactNode;
}
interface ContextSettingsUserValue {
  defaultLanguageToLearn: number;
  setDefaultLanguageToLearn: React.Dispatch<React.SetStateAction<number>>;
}

export const UserSettingsContext = createContext<ContextSettingsUserValue>(
  {} as ContextSettingsUserValue
);

const DEFAULT_LANGUAGE_NUMBER = 7;

const UserSettingsProvider: FC<ContextSettingsUserProviderProps> = ({ children }) => {
  const { isLoginUser } = useContext(GlobalContext);
  const [defaultWordLanguage, setDefaultWordLanguage] = useState(
    mappedLanguages[DEFAULT_LANGUAGE_NUMBER].value
  );
  const [defaultLanguageToLearn, setDefaultLanguageToLearn] = useState(
    mappedLanguages[DEFAULT_LANGUAGE_NUMBER].value
  );

  const values = {
    defaultWordLanguage,
    setDefaultWordLanguage,
    defaultLanguageToLearn,
    setDefaultLanguageToLearn,
  };

  const getSettingUser = async () => {
    if (!isLoginUser) return;
    try {
      const data = await fetchWithToken({
        endpoint: 'getUserSettings',
        method: 'GET',
      });
      console.log('settings are good', data);
      // Tutaj możesz ustawić pobrane ustawienia użytkownika, np.:
      // setDefaultWordLanguage(data.defaultWordLanguage);
      // setDefaultWordLanguageTranslate(data.defaultWordLanguageTranslate);
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
