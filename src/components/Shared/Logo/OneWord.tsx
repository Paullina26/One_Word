import { FC } from 'react';
import styled from 'styled-components';

import { font_settings } from '@style/mixins';

interface TittleOneWordProps {
  $fontColor: string;
}

export const TittleOneWord = styled.h1<{ $fontColor: string }>`
  ${font_settings(5, 'italic', 900)};
  color: ${({ theme, $fontColor }) => theme[$fontColor]};
`;

export const OneWord: FC<TittleOneWordProps> = ({ $fontColor }) => {
  return <TittleOneWord $fontColor={$fontColor}>One Word</TittleOneWord>;
};

export default OneWord;
