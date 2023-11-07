import styled from 'styled-components';
import Background from 'components/Background/Background';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Logo/OneWord';
import Navigation from 'components/Navigation/Navigation';
import Dashboard from 'components/Dashboard/Dashboard';
import Burger from 'components/Navigation/BurgerMenu';
import { GlobalContext } from 'utils/GlobalContext';
import { useContext } from 'react';

export const UserDashboard = () => {
  const { isOpenMenu, setIsOpenMenu } = useContext(GlobalContext);
  
  return (
    <>
      <Background />
      <Logo />
      <Dashboard />
      <Burger isOpenMenu={isOpenMenu} />
      <Navigation isOpenMenu={isOpenMenu} />
    </>
  );
};

export default UserDashboard;
