import { useContext, FC } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';

const StyledBurger = styled.button<{ $isOpenMenu: boolean }>`
  z-index: 10;
  margin: 10px;
  position: absolute;
  border-radius: 50%;
  bottom: 10px;
  right: 10px;
  overflow: hidden;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.gradientPurpleFour} 0%,
    ${({ theme }) => theme.gradientPurpleThere}25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleOne} 75%,
    ${({ theme }) => theme.gradientPurpleDark} 100%
  );
  cursor: pointer;
  box-shadow: -2px -2px 3px rgba(255, 255, 255, 0.15), 2px 2px 3px rgba(0, 0, 0, 0.35),
    inset 5px 10px 10px rgba(255, 255, 255, 0.25), inset -10px -10px 10px rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(175, 175, 220, 0.5);

  &:hover {
    box-shadow: -3px -3px 5px rgba(255, 255, 255, 0.25), 3px 3px 5px rgba(0, 0, 0, 0.35),
      inset 5px 5px 5px rgba(0, 0, 0, 0.35), inset -5px -5px 5px rgba(255, 255, 255, 0.15);
  }

  &:focus {
    outline: none;
  }
`;

const WrapperBar = styled.div<{ $isOpenMenu: boolean }>`
  width: 60px;
  height: 60px;
  margin: 10px;
  position: relative;
  div {
    width: 90%;
    height: 8px;
    display: block;
    transition: all 0.3s linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 99999px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );

    &:first-child {
      transform: ${({ $isOpenMenu }) =>
        $isOpenMenu ? `translate(-50%, -50%) rotate(45deg)` : 'rotate(0) translate(-50%, -20px)'};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpenMenu }) => ($isOpenMenu ? '0' : '1')};
      transform: ${({ $isOpenMenu }) =>
        $isOpenMenu ? 'translate(-30%, -50%) ' : 'translate(-50%, -50%)'};
    }

    &:nth-child(3) {
      transform: ${({ $isOpenMenu }) =>
        $isOpenMenu ? `translate(-50%, -50%) rotate(-45deg)` : 'rotate(0) translate(-50%, 12px)'};
    }
  }
`;
interface BurgerProps {
  isOpenMenu: boolean;
}

export const Burger: FC<BurgerProps> = ({ isOpenMenu }) => {
  const { setIsOpenMenu } = useContext(GlobalContext);

  const handleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <StyledBurger $isOpenMenu={isOpenMenu} onClick={handleMenu}>
      <WrapperBar $isOpenMenu={isOpenMenu}>
        <div />
        <div />
        <div />
      </WrapperBar>
    </StyledBurger>
  );
};
export default Burger;
