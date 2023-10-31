import { useContext } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Auth from 'pages/Auth/Auth';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';
import User from 'pages/User/User';

const RoutesComponent = () => {
  const { isLoginUser } = useContext(GlobalContext);
  return (
    <Routes>
      {/* <Route path='/' element={<Home />} />
      <Route path='auth' element={<Auth />}></Route> */}
      {!isLoginUser && (
        <>
          <Route path='/' element={<Home />} />
          <Route path='auth' element={<Auth />} />
        </>
      )}
      {isLoginUser && <Route path='user' element={<User />}></Route>}
      {/* <Route path='user' element={<User />}></Route> */}

      {/* {!isLogin && (
        <Route path='/' element={<Home />} />
        <Route path='auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='registration' element={<Registration />} />
        </Route>
      )}
      {isLogin && (
        <>
          <Route path='/user' element={<User/>}>
            <Route path='learning' element={<Learning />}
            <Route path='hanMan' element={<HandMan />} />
            <Route path='translate' element={<Translate />} />
            <Route path='flashcard' element={<Flashcard />} />
            <Route path='repeat' element={<Repeat />} />
            </Route>
            <Route path='settings' element={<Settings />}
            <Route path='addWords' element={<AddWords />} />
            <Route path='learn' element={<Learning />} />
            <Route path='user' element={<User />} />
            </Route>
          </Route>
        </>
      )} */}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
