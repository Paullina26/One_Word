import styled, { keyframes } from 'styled-components';
import {
  font_settings,
  color_gradient_glassEffect_dark,
  border_radius_effect_bubble,
} from 'style/mixins';
import { device } from 'style/devices';

export const SingInWrapper = styled.div<{ $isActive: boolean }>`
  ${font_settings(3, 'italic', 900)};
  ${color_gradient_glassEffect_dark};
  ${border_radius_effect_bubble};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 100%;
  bottom: 0;
  position: absolute;
  padding: 30px 10px;
  backdrop-filter: blur(5px);
  border: 3px inset rgba(230, 230, 230, 0.2);
  transition: all 0.2s linear;
  opacity: ${({ $isActive }) => ($isActive ? '0' : '1')};
  filter: ${({ $isActive }) => ($isActive ? 'blur(10px)' : 'blur(0)')};
  transform: ${({ $isActive }) => ($isActive ? 'scale(0)' : 'scale(1)')};
  @media ${device.mobileXL} {
    //test
  }
`;

export const RegistrationText = styled.div`
  padding: 20px;
  ${font_settings(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
