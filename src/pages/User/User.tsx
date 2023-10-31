import styled from 'styled-components';
import Background from 'components/Background/Background';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import OneWord from 'components/Logo/OneWord';

export const User = () => {
  return (
    <>
      <Background />
      <OneWord $fontColor='white' />
      <Logo />
      <GlassWrapper>Word For Today</GlassWrapper>
    </>
  );
};

export default User;
