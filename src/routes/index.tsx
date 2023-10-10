import { useContext } from 'react';
// import { GlobalContext } from 'utils/GlobalContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';

const RoutesComponent = () => {
  // const { isLogin } = useContext(GlobalContext);
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      {/* <Route path='addAdvertisement' element={<AddAdvertisement />} /> */}
      {/* <Route path='statistics' element={<Statistics />} /> */}

      {/* {!isLogin && (
        <>
          <Route path='/registration' element={<Registration />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
      )}
      {isLogin && (
        <>
          <Route path='/userPanel' element={<UserPanel />}>
            <Route path='addAdvertisement' element={<AddAdvertisement />} />
            <Route path='userAnnouncement' element={<UserAnnouncement />} />
            <Route path='followAnnouncement' element={<FollowAnnouncement />} />
            <Route path='/userPanel' element={<Settings />} />
          </Route>
        </>
      )} */}
      <Route path='*' Component={() => <div>404</div>} />
    </Routes>
  );
};

export default RoutesComponent;
