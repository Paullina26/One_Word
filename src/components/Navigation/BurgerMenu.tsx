import { useContext, FC } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import {
  boxShadow_button,
  color_gradient_button,
  color_gradient_animation,
  color_gradient_button_menu,
  color_gradient_menu_bar,
  color_gradient_menu_burger,
} from 'style/mixins';

const StyledBurger = styled.button<{ $isOpenMenu: boolean }>`
  z-index: 101;
  margin: 5px;
  position: fixed;
  border-radius: 50%;
  bottom: 5px;
  right: 5px;
  overflow: hidden;
  cursor: pointer;
  ${color_gradient_menu_burger};
  ${boxShadow_button};
  &:focus {
    outline: none;
  }
`;

const WrapperBar = styled.div<{ $isOpenMenu?: boolean }>`
  width: 60px;
  height: 60px;
  margin: 10px;
  position: relative;
  div {
    ${color_gradient_menu_bar};
    width: 90%;
    height: 8px;
    display: block;
    transition: all 0.3s linear;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 99999px;

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
