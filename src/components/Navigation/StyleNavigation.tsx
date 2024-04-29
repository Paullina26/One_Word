import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import {
  font_settings,
  color_gradient_animation,
  color_gradient_backGround_liner_dark,
  boxShadow_darkTheme_menu_element,
  color_gradient_light_menu,
  color_gradient_glassEffect_light_menu,
} from 'style/mixins';

export const NavigationWrapper = styled.div<{ $isOpenMenu: boolean }>`
  z-index: 100;
  ${color_gradient_glassEffect_light_menu};
  color: ${({ theme }) => theme.white};
  position: fixed;
  width: 100vw;
  max-width: 310px;
  height: 100vh;
  bottom: 0;
  right: 0;
  padding: 0;
  transition: transform 0.4s ease-out;
  transform: ${({ $isOpenMenu }) => ($isOpenMenu ? 'translateX(0)' : 'translateX(100%)')};
  overflow-x: hidden;
`;

export const WrapperNav = styled.div`
  margin-left: 0;
  margin-top: 70px;
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
  margin: 25px 0 10px auto;
  width: 300px;
  backdrop-filter: blur(5px);
  border-radius: 20px 0px 0px 20px;
  cursor: pointer;
`;

export const StyledLink = styled(NavLink)<{
  $index: number;
  $isOpenMenu: boolean;
  $animateLinks: boolean;
}>`
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
  border-radius: 20px 0px 0px 20px;
  margin: 10px 0 10px auto;
  position: relative;
  overflow: hidden;

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
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px 0px 0px 20px;
    transform: scaleY(0);
    transition: 0.5s;
    transform-origin: 0 0;
  }

  &:hover {
    &:before {
      transform: scaleY(1);
    }
  }

  &:after {
    padding: 10px 0 10px 40px;
    content: attr(data-hover);
    white-space: nowrap;
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    border-radius: 0px 20px 20px 0px;
  }

  &.active {
    ${color_gradient_animation};
    color: white;
  }

  transform: ${({ $isOpenMenu, $animateLinks }) =>
    $isOpenMenu && $animateLinks ? 'translateX(0)' : 'translateX(100%)'};
  transition: opacity 0.5s ease-out, transform 0.5s ease-out ${({ $index }) => ($index + 1) * 50}ms;
`;
