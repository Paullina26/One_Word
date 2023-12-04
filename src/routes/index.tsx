import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'data/routes';
import Home from 'pages/Home/Home';
import Auth from 'pages/Auth/Auth';
import UserDashboard from 'pages/User/UserDashboard';
import TodaysWord from 'pages/User/TodaysWord';
import Hangman from 'pages/User/Hangman';
import Translate from 'pages/User/Translate';
import Flashcard from 'pages/User/Flashcard';
import Repeat from 'pages/User/Repeat';

const RoutesComponent = () => {
  const { isLoginUser } = useContext(GlobalContext);
  return (
    <Routes>
      {!isLoginUser && (
        <>
          <Route path={routes.HOME.to} element={<Home />} />
          <Route path={routes.AUTH.to} element={<Auth />} />
        </>
      )}
      {isLoginUser && (
        <>
          <Route path='user' element={<UserDashboard />}>
            <Route path={routes.TODAYS_WORD.to} element={<TodaysWord />} />
            <Route path={routes.HANGMAN.to} element={<Hangman />} />
            <Route path={routes.TRANSLATE.to} element={<Translate />} />
            <Route path={routes.REPEAT.to} element={<Repeat />} />
            <Route path={routes.FLASHCARD.to} element={<Flashcard />} />
          </Route>
        </>
      )}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
