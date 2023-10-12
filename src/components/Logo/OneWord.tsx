import styled from 'styled-components';
import { font } from 'style/mixins';

export const TittleOneWord = styled.h1`
  ${font(5, 'italic', 900)};
  color: ${({ theme }) => theme.PurpleDark};
`;

export const OneWord = () => {
  return <TittleOneWord>One Word</TittleOneWord>;
};

export default OneWord;
