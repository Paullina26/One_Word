import styled, { css } from 'styled-components';
import { Button } from 'components/Shared/Buttons/Button';
import ManagedIcon, { Icons } from 'assets/icon/helpers/ManagedIcon';

interface ButtonIconProps {
  nameIcon: Icons;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  $margin?: string;
  $positionAbsolute?: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  $isClickable?: boolean;
}

const baseStyles = css<{ $margin?: string }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0;
  flex-shrink: 0;
  cursor: pointer;
  margin: ${({ $margin }) => $margin || '10px auto'};
`;

const absoluteStyles = css<{ top?: string; left?: string; right?: string; bottom?: string }>`
  position: absolute;
  white-space: nowrap;
  top: ${({ top }) => top || 'auto'};
  left: ${({ left }) => left || 'auto'};
  right: ${({ right }) => right || 'auto'};
  bottom: ${({ bottom }) => bottom || 'auto'};
`;

const inActiveStyles = css`
  /* background-color: #959595; */
  cursor: not-allowed;
  pointer-events: none;
`;

export const ButtonIconStyle = styled(Button)<{
  $margin?: string;
  $positionAbsolute?: boolean;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  $isClickable?: boolean;
}>`
  ${baseStyles}
  ${({ $positionAbsolute }) => $positionAbsolute && absoluteStyles}
  ${({ $isClickable }) => $isClickable == false && inActiveStyles}
`;

const ButtonIcon: React.FC<ButtonIconProps> = ({
  nameIcon,
  type = 'button',
  onClick,
  disabled = false,
  $margin,
  $positionAbsolute = false,
  top,
  left,
  right,
  bottom,
  $isClickable = true,
}) => {
  return (
    <ButtonIconStyle
      type={type}
      onClick={onClick}
      disabled={disabled || !$isClickable}
      $margin={$margin}
      $positionAbsolute={$positionAbsolute}
      top={top}
      left={left}
      right={right}
      bottom={bottom}
      $isClickable={$isClickable}
    >
      <ManagedIcon name={nameIcon} />
    </ButtonIconStyle>
  );
};

export default ButtonIcon;
