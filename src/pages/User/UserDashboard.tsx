import styled from 'styled-components';
import Background from 'components/Background/Background';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Logo/OneWord';
import Navigation from 'components/Navigation/Navigation';
import Dashboard from 'components/Dashboard/Dashboard';

export const UserDashboard = () => {
  return (
    <>
      <Background />
      <Logo />
      <Dashboard />
      <Navigation />
    </>
  );
};

export default UserDashboard;
