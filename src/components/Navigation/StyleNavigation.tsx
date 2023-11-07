import styled, { keyframes } from 'styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { font } from 'style/mixins';

// export const NavigationWrapper = styled.div<{ $isHidden: boolean }>`
export const NavigationWrapper = styled.div<{ $isOpenMenu: boolean }>`
  color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
  bottom: 0;
  padding: 0;
  position: absolute;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  border: none;
  transition: all 0.3s linear;
  transform: ${({ $isOpenMenu }) => ($isOpenMenu ? 'translateY(0)' : 'translateY(100vh)')};
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
  margin: 5px 0;
  width: 360px;
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
`;

export const StyledLink = styled(NavLink)`
  display: block;
  ${font(2, 'normal', 500)};
  padding: 10px 0 10px 100px;
  margin: 10px 0;
  width: 300px;
  margin: 10px 0;
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
    padding: 10px 0 10px 100px;
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
    padding: 10px 0 10px 100px;
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
