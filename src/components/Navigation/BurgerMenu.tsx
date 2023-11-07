import { useContext, FC } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';

const StyledBurger = styled.button<{ $isOpenMenu: boolean }>`
  position: absolute;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 50px;
  height: 50px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 50px;
    height: 10px;
    background: linear-gradient(
      90deg,
      ${({ theme }) => theme.gradientRainbowOne} 0%,
      ${({ theme }) => theme.gradientRainbowTwo}25%,
      ${({ theme }) => theme.gradientRainbowThere} 50%,
      ${({ theme }) => theme.gradientRainbowFour} 75%,
      ${({ theme }) => theme.gradientRainbowFive} 100%
    );
    border-radius: 50px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpenMenu }) => ($isOpenMenu ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpenMenu }) => ($isOpenMenu ? '0' : '1')};
      transform: ${({ $isOpenMenu }) => ($isOpenMenu ? 'translateX(20px)' : 'translateX(0)')};
    }

    &:nth-child(3) {
      transform: ${({ $isOpenMenu }) => ($isOpenMenu ? 'rotate(-45deg)' : 'rotate(0)')};
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
    <>
      <StyledBurger $isOpenMenu={isOpenMenu} onClick={handleMenu}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  );
};
export default Burger;

