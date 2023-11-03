import styled from 'styled-components';
import Background from 'components/Background/Background';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Logo/OneWord';
import Navigation from 'components/Navigation/Navigation';

export const User = () => {
  return (
    <>
      <Background />
      <Logo />
      <Navigation />
    </>
  );
};

export default User;
