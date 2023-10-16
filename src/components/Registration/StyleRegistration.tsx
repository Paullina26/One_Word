import styled, { keyframes } from 'styled-components';
import { font } from 'style/mixins';

export const SingIn = styled.div`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70vh;
  bottom: 0;
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
  box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7);
  border-radius: 50px 50px 0 0;
  border: none;
`;

export const RegistrationText = styled.div`
  padding: 10px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
`;

export const SingInWrapper = styled.div<{ $isHidden: boolean }>`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70vh;
  text-align: center;
  bottom: 0;
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
  box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7);
  border-radius: 50px 50px 0 0;
  border: none;
  padding: 10px;
  height: ${({ $isHidden }) => ($isHidden ? '10vh' : '70vh')};
  transition: height 0.3s ease-in-out;
  overflow: hidden;
`;
