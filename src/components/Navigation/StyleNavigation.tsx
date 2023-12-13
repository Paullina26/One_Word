import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import {
  font_settings,
  color_gradient_animation,
  color_gradient_backGround_liner_dark,
  color_gradient_light_menu,
  boxShadow_darkTheme_menu_element,
} from 'style/mixins';

export const NavigationWrapper = styled.div<{ $isOpenMenu: boolean }>`
  ${color_gradient_backGround_liner_dark};
  z-index: 100;
  color: ${({ theme }) => theme.white};
  position: absolute;
  width: 100vw;
  max-width: 350px;
  height: 100vh;
  bottom: 0;
  padding: 0;
  position: absolute;
  border-right: 2px solid ${({ theme }) => theme.purpleLight};
  backdrop-filter: blur(5px);
  transition: transform 0.4s linear, opacity 0.2s linear, border-radius 0.2s linear;
  opacity: ${({ $isOpenMenu }) => ($isOpenMenu ? '1' : '0')};
  border-radius: ${({ $isOpenMenu }) => ($isOpenMenu ? '0' : '0 100px 100px 0')};
  transform: ${({ $isOpenMenu }) => ($isOpenMenu ? ' translateX(0) ' : ' translateX(-50vh)')};
  transform-origin: ${({ $isOpenMenu }) => ($isOpenMenu ? '100%' : '100%')};
`;

export const WrapperNav = styled.div`
  margin-left: 0;
  border-radius: 0px 20px 20px 0px;
`;

export const Menu = styled.div`
  ${font_settings(3, 'italic', 900)};
  text-align: center;
  padding: 30px;
  color: ${({ theme }) => theme.white};
`;

export const NavigationElementTitle = styled.div`
  ${color_gradient_backGround_liner_dark};
  ${boxShadow_darkTheme_menu_element};
  ${font_settings(2.5, 'normal', 500)};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 10px 0;
  margin: 25px 0 10px 0;
  width: 300px;
  backdrop-filter: blur(5px);
  border-radius: 0px 20px 20px 0px;
`;

export const StyledLink = styled(NavLink)`
  ${font_settings(2, 'normal', 500)};
  ${boxShadow_darkTheme_menu_element};
  ${color_gradient_light_menu};
  display: block;
  padding: 10px;
  margin: 10px 0;
  width: 220px;
  margin: 15px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  border-radius: 0px 20px 20px 0px;
  position: relative;

  p {
    color: transparent;
  }

  &:before {
    ${color_gradient_animation};
    ${boxShadow_darkTheme_menu_element};
    content: '';
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
    transform: scaleX(0);
    transition: 0.5s;
    transform-origin: 0 0;
  }

  &:hover {
    &:before {
      transform: scaleX(1);
    }
  }

  &:after {
    padding: 10px 0 10px 40px;
    content: attr(data-hover);
    white-space: nowrap;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
  }

  &.active {
    ${color_gradient_animation};
  }
`;
