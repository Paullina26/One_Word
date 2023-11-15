import styled from 'styled-components';
import { font, BoxShadowButton, GradientCirclePink } from 'style/mixins';

export const Button = styled.button`
  ${font(2.2, 'italic', 300)};
  margin: 30px;
  padding: 8px 20px;
  border-radius: 20px;
  border: none;
  color: ${({ theme }) => theme.white};
  ${GradientCirclePink};
  ${BoxShadowButton};
`;
