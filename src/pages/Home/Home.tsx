import Background from 'components/Background/Background';
import { Button } from 'components/Shared/Buttons/Button';
import Logo from 'components/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import Welcome from 'components/Welcome/Welcome';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

export const WrapperHome = styled.div`
  text-align: center;
`;

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToAuth = () => {
    console.log('goAuth');
    navigate('auth');
  };

  return (
    <>
      <Background />
      <WrapperHome>
        <Logo />
        <GlassWrapper>
          <Welcome />
          <Button onClick={handleGoToAuth}>Try It</Button>
        </GlassWrapper>
      </WrapperHome>
    </>
  );
};

export default HomePage;
