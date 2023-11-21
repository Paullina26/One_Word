import styled from 'styled-components';
import { font_settings } from 'style/mixins';
import { device } from 'style/devices';

export const WrapperLogin = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 30px 10px;
  box-shadow: 0 4px 30px -50px ${({ theme }) => theme.shadowBlack};
  backdrop-filter: blur(5px);
  @media ${device.mobileXL} {
    /* border-radius: 50px 50px 50px 50px; */
  }
`;

export const LoginText = styled.div`
  ${font_settings(3, 'italic', 900)};
  padding: 20px;
  color: ${({ theme }) => theme.purpleDark};
  cursor: pointer;
`;
