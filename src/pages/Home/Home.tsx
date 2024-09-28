import styled from 'styled-components';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';

import { GlobalContext } from '@utils/GlobalContext';
import { routes } from '@data/routes';
import {
  font_settings,
  color_gradient_button,
  default_style_button,
  boxShadow_lightTheme_button,
  boxShadow_darkTheme_button,
  outline_focus,
} from '@style/mixins';
import Logo from '@components/Shared/Logo/Logo';
import { GlassWrapper } from '@components/Shared/containers/GlassWrapper';
import Welcome from '@components/Welcome/Welcome';

export const LinkButton = styled(NavLink)<{ $isLightTeam: boolean }>`
  ${font_settings(2.2, 'italic', 300)};
  ${default_style_button};
  ${color_gradient_button};
  ${({ $isLightTeam }) =>
    $isLightTeam ? `${boxShadow_lightTheme_button}` : `${boxShadow_darkTheme_button}`};
  color: ${({ theme }) => theme.white};
  ${outline_focus};
  display: inline-block;
  text-decoration: none;
  margin-bottom: 20px;
`;

export const HomePage = () => {
  const { isLoginUser } = useContext(GlobalContext);

  if (isLoginUser) return <Navigate replace to={routes.LEARN_TODAYS_WORD.to} />;

  return (
    <>
      <Logo />
      <GlassWrapper>
        <Welcome />
        <LinkButton $isLightTeam={true} to='/auth'>
          Try It
        </LinkButton>
      </GlassWrapper>
    </>
  );
};

export default HomePage;
