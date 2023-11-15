import styled, { keyframes } from 'styled-components';
import { font, GradientGlassEffectDark, BorderRadiusBubble } from 'style/mixins';
import { device } from 'style/devices';

export const SingInWrapper = styled.div<{ $isHidden: boolean }>`
  ${font(3, 'italic', 900)};
  ${GradientGlassEffectDark};
  ${BorderRadiusBubble};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  padding: 30px 10px;
  backdrop-filter: blur(5px);
  border: 3px inset rgba(230, 230, 230, 0.2);
  transition: all 0.2s linear;
  opacity: ${({ $isHidden }) => ($isHidden ? '0' : '1')};
  filter: ${({ $isHidden }) => ($isHidden ? 'blur(10px)' : 'blur(0)')};
  transform: ${({ $isHidden }) => ($isHidden ? 'scale(0)' : 'scale(1)')};
  @media ${device.mobileXL} {
    //test
  }
`;

export const RegistrationText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
