import styled from 'styled-components';
import { font } from 'style/mixins';

export const Button = styled.button`
  ${font(2.2, 'italic', 300)};
  margin: 30px;
  padding: 7px 20px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.pink};
  color: ${({ theme }) => theme.white};
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.8), 5px 5px 7px rgba(94, 104, 121, 0.6);
`;
