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
`;
