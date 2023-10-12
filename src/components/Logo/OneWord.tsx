import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface TittleOneWordProps {
  fontColor: string;
}

export const TittleOneWord = styled.h1<{ fontColor: string }>`
  ${font(5, 'italic', 900)};
  /* color: ${({ theme }) => theme.PurpleDark}; */
  color: ${({ theme, fontColor }) => theme[fontColor]};
`;

export const OneWord: FC<TittleOneWordProps> = ({ fontColor }) => {
  return <TittleOneWord fontColor={fontColor}>One Word</TittleOneWord>;
};

export default OneWord;
