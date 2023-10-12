import Background from 'components/Background/Background';
import { Button } from 'components/Shared/Buttons/Button';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import Welcome from 'components/Welcome/Welcome';
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
