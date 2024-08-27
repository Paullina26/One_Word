import styled from 'styled-components';
import { font_settings } from '@style/mixins';

export const TitleBig = styled.h2`
  text-align: center;
  ${font_settings(3, 'ita', 500)};
  color: ${({ theme }) => theme.purpleDark};
  margin: 5px auto;
`;

export const TitleSmall = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
  color: ${({ theme }) => theme.purpleDark};
`;
