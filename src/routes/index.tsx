import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'data/routes';

import Home from 'pages/Home/Home';
import Auth from 'pages/Auth/Auth';
import TodaysWord from 'pages/User/Learning/TodaysWord/TodaysWord';
import Hangman from 'pages/User/Learning/Hangman';
import Translate from 'pages/User/Learning/Translate';
import Flashcard from 'pages/User/Learning/Flashcard';
import Repeat from 'pages/User/Learning/Repeat';
import AddWordSettings from 'pages/User/Settings/AddWord';
import LearningSettings from 'pages/User/Settings/LearningSettings/LearningSettings';
import SettingsApp from 'pages/User/Settings/SettingsApp';
import ChatWrapper from 'components/Chat/ChatWrapper';
import { GlobalContext } from 'utils/GlobalContext/GlobalContext';

const RoutesComponent = () => {
  const { isLoginUser, user } = useContext(GlobalContext);

  return (
    <Routes>
      <Route path={routes.HOME.to} element={<Home />} />
      <Route path={routes.AUTH.to} element={<Auth />} />
      {isLoginUser && (
        <>
          <Route path='learning'>
            <Route path={routes.LEARN_TODAYS_WORD.to} element={<TodaysWord />} />
            <Route path={`${routes.LEARN_HANGMAN.to}`} element={<Hangman />} />
            <Route path={`${routes.LEARN_TRANSLATE.to}`} element={<Translate />} />
            <Route path={`${routes.LEARN_REPEAT.to}`} element={<Repeat />} />
            <Route path={`${routes.LEARN_FLASHCARD.to}`} element={<Flashcard />} />
            {user?.isAi && <Route path={`${routes.LEARN_CHAT.to}`} element={<ChatWrapper />} />}
            {user?.isAi && (
              <Route path={`${routes.LEARN_CHAT.to}/:word`} element={<ChatWrapper />} />
            )}
          </Route>
          <Route path='settings'>
            <Route path={`${routes.SETTINGS_ADD_WORDS.to}`} element={<AddWordSettings />} />
            <Route path={`${routes.SETTINGS_LEARNING.to}`} element={<LearningSettings />} />
            <Route path={`${routes.SETTINGS_USER.to}`} element={<SettingsApp />} />
          </Route>
        </>
      )}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
