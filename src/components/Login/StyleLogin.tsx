import styled from 'styled-components';
import { font } from 'style/mixins';
import { device } from 'style/devices';

export const WrapperLogin = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleLight} 0%,
    ${({ theme }) => theme.gradientPurpleLightOne} 25%,
    ${({ theme }) => theme.gradientPurpleLightTwo} 50%,
    ${({ theme }) => theme.gradientPurpleLightThere} 75%,
    ${({ theme }) => theme.gradientPurpleLightFour}100%
  );
  border-radius: 50px 50px 0 0;
  box-shadow: 0 4px 30px -50px ${({ theme }) => theme.shadowBlack};
  backdrop-filter: blur(5px);

  @media ${device.mobileXL} {
    border-radius: 50px 50px 50px 50px;
  }
`;

export const LoginText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.purpleDark};
  cursor: pointer;
`;
