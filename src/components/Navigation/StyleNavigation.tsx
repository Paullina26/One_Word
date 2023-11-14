import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { font } from 'style/mixins';

export const NavigationWrapper = styled.div<{ $isOpenMenu: boolean }>`
  color: ${({ theme }) => theme.white};
  position: absolute;
  width: 100vw;
  max-width: 350px;
  height: 100vh;
  bottom: 0;
  padding: 0;
  position: absolute;
  border-right: 2px solid ${({ theme }) => theme.purpleLight};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientPurpleDarkOne} 0%,
    ${({ theme }) => theme.gradientPurpleDarkTwo} 25%,
    ${({ theme }) => theme.gradientPurpleDarkThere} 50%,
    ${({ theme }) => theme.gradientPurpleDarkFour} 75%,
    ${({ theme }) => theme.gradientPurpleDarkFive}100%
  );
  box-shadow: 2px 2px 3px rgb(92, 92, 143);
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
  ${font(3, 'italic', 900)};
  text-align: center;
  padding: 30px;
  color: ${({ theme }) => theme.white};
  /* cursor: pointer; */
`;

export const NavigationElementTitle = styled.div`
  ${font(2.5, 'normal', 500)};
  color: ${({ theme }) => theme.white};
  text-align: center;
  padding: 10px 0;
  margin: 25px 0 10px 0;
  width: 300px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientPurpleFour} 0%,
    ${({ theme }) => theme.gradientPurpleThere}25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleOne} 75%,
    ${({ theme }) => theme.gradientPurpleDark} 100%
  );
  backdrop-filter: blur(5px);
  border-radius: 0px 20px 20px 0px;
  box-shadow: -1px -1px 2px rgba(255, 255, 255, 0.35), 1px 1px 2px rgba(0, 0, 0, 0.35),
    inset 0px 5px 10px rgba(255, 255, 255, 0.15), inset -5px -5px 10px rgba(0, 0, 0, 0.25);
`;

export const StyledLink = styled(NavLink)`
  box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.95), 5px 5px 5px rgba(0, 0, 0, 0.35),
    inset 1px 2px 5px rgba(255, 255, 255, 0.35), inset -4px -4px 5px rgba(0, 0, 0, 0.25);
  display: block;
  ${font(2, 'normal', 500)};
  padding: 10px;
  margin: 10px 0;
  width: 220px;
  margin: 15px 0;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientMenuLightOne} 0%,
    ${({ theme }) => theme.gradientMenuLightTwo}25%,
    ${({ theme }) => theme.gradientMenuLightThere} 50%,
    ${({ theme }) => theme.gradientMenuLightFour} 75%,
    ${({ theme }) => theme.gradientMenuLightFive} 100%
  );
  border-radius: 0px 20px 20px 0px;
  position: relative;

  p {
    color: transparent;
  }

  &:before {
    box-shadow: -1px -1px 3px rgba(255, 255, 255, 0.95), 5px 5px 5px rgba(0, 0, 0, 0.35),
      inset 1px 2px 5px rgba(255, 255, 255, 0.35), inset -4px -4px 5px rgba(0, 0, 0, 0.25);
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
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );
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
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );
  }
`;
