import Background from '../../components/background/Background';
import { Button } from '../../components/buttons/Button';
import Logo from '../../components/logo/Logo';
import { GlassWrapper } from '../../components/containers/GlassWrapper';
import Welcome from '../../components/welcome/Welcome';
import styled from 'styled-components';

export const WrapperHome = styled.div`
  text-align: center;
`;

export const HomePage = () => {
  return (
    <>
      <Background />
      <WrapperHome>
        <Logo />
        <GlassWrapper>
          <Welcome />
          <Button>Try It</Button>
        </GlassWrapper>
      </WrapperHome>
    </>
  );
};

export default HomePage;
