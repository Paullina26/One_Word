import Background from 'components/Background/Background';
import { Button } from 'components/Shared/Buttons/Button';
import Logo from 'components/Shared/Logo/Logo';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import Welcome from 'components/Welcome/Welcome';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { routes } from 'data/routes';

export const HomePage = () => {
  const navigate = useNavigate();

  const handleGoToAuth = () => {
    navigate(`${routes.AUTH.to}`);
  };

  return (
    <GlassWrapper>
      <Welcome />
      <Button $isLightTeam={true} onClick={handleGoToAuth}>
        Try It
      </Button>
    </GlassWrapper>
  );
};

export default HomePage;
