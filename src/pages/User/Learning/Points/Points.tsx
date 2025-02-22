import { useState } from 'react';
import * as S from './StylePoints';
import { TitleSmall } from '@components/Shared/Atoms/Title';
import { PointsProps } from '@components/Repeat/RepeatWords/RepeatWords.types';

const Points: React.FC<PointsProps> = ({ numberOfWords, correctCount, incorrectCount }) => {
  return (
    <S.Wrapper>
      {/* <S.Title>Your points:</S.Title> */}
      <S.WrapperPoints>
        <S.Points>Words: {numberOfWords}</S.Points>
        <S.Points>Correct: {correctCount}</S.Points>
        <S.Points>Incorrect: {incorrectCount}</S.Points>
      </S.WrapperPoints>
    </S.Wrapper>
  );
};

export default Points;
