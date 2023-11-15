import styled from 'styled-components';
import { device } from 'style/devices';
import {
  GradientCirclePurpleDark,
  GradientGlassEffectLight,
  BorderRadiusBubble,
} from 'style/mixins';

export const WrapperLogo = styled.div`
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
`;
export const WrapperAuth = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  text-align: center;
`;

export const WrapperElementRegistrationLogin = styled.div`
  ${BorderRadiusBubble};
  ${GradientGlassEffectLight};
  position: absolute;
  overflow: hidden;
  bottom: 0;
  width: 90vw;
  max-width: 600px;
  height: 85vh;
  max-height: 600px;
  border-top: 3px inset rgba(230, 230, 230, 0.2);
  box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media ${device.mobileXL} {
    border: 3px inset rgba(230, 230, 230, 0.2);
    top: 20vh;
    left: 50%;
    transform: translate(-50%);
  }
`;
