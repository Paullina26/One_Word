import styled from 'styled-components';
import { font } from 'style/mixins';

export const Button = styled.button`
  ${font(2.2, 'italic', 300)};
  margin: 30px;
  padding: 7px 20px;
  border-radius: 20px;
  border: none;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.buttonPink} 0%,
    ${({ theme }) => theme.buttonPinkLight} 100%
  );
  color: ${({ theme }) => theme.white};
  box-shadow: -4px -4px 7px ${({ theme }) => theme.boxShadowWhite},
    4px 4px 7px ${({ theme }) => theme.boxShadowGray};
`;
