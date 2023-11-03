import styled from 'styled-components';
import { useNavigate, useLocation, NavLink } from 'react-router-dom';
import { font } from 'style/mixins';

// export const NavigationWrapper = styled.div<{ $isHidden: boolean }>`
export const NavigationWrapper = styled.div`
  color: ${({ theme }) => theme.white};
  width: 100vw;
  height: 100vh;
  bottom: 0;
  padding: 0;
  position: absolute;
  /* overflow: hidden; */
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  /* box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7); */
  /* border-radius: 50px 50px 0 0; */
  border: none;
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
  color: ${({ theme }) => theme.black};
  text-align: center;
  padding: 10px 0;
  margin: 5px 0;
  width: 360px;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientMenuLightOne} 0%,
    ${({ theme }) => theme.gradientMenuLightTwo}25%,
    ${({ theme }) => theme.gradientMenuLightThere} 50%,
    ${({ theme }) => theme.gradientMenuLightFour} 75%,
    ${({ theme }) => theme.gradientMenuLightFive} 100%
  );
  backdrop-filter: blur(5px);
  border-radius: 0px 20px 20px 0px;

  &.active {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );
    width: 300px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: block;
  ${font(2, 'normal', 500)};
  padding: 10px 0 10px 100px;
  margin: 10px 0;
  width: 250px;
  width: 300px;
  margin: 10px 0 10px -50px;
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
  transition: background 4.5s linear;
  /* transition-delay: 0.2s; */

  &:hover {
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );
    /* width: 300px; */
    transition: width 0.3s linear, transform 0.3s linear;
    transform: translate(50px, 0px);
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
    /* width: 300px; */
    transform: translate(50px, 0px);
  }
`;

