import styled, { keyframes } from 'styled-components';
import { font } from 'style/mixins';
import { device } from 'style/devices';

export const SingInWrapper = styled.div<{ $isHidden: boolean }>`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70%;
  max-height: 530px;
  bottom: 0;
  position: absolute;
  padding: 10px;
  overflow: hidden;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7);
  border-radius: 50px 50px 0 0;
  border: none;
  transition: height 0.3s ease-in-out;
  height: ${({ $isHidden }) => ($isHidden ? '80px' : '89%')};

  @media ${device.mobileXL} {
    border-radius: 50px 50px 50px 50px;
  }
`;

export const RegistrationText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  cursor: pointer;
`;
