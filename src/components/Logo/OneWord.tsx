import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface TittleOneWordProps {
  font_color: string;
}

export const TittleOneWord = styled.h1<{ font_color: string }>`
  ${font(5, 'italic', 900)};
  color: ${({ theme, font_color }) => theme[font_color]};
`;

export const OneWord: FC<TittleOneWordProps> = ({ font_color }) => {
  return <TittleOneWord font_color={font_color}>One Word</TittleOneWord>;
};

export default OneWord;
