import { useState } from 'react';
import * as S from './StylePoints';
import { TitleSmall } from '@components/Shared/Atoms/Title';
import { PointsProps } from '@components/Repeat/RepeatWords/RepeatWords.types';

const Points: React.FC<PointsProps> = ({ numberOfWords }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);

  const [isCorrect, setIsCorrect] = useState(false);
  const [isIncorrect, setIsIncorrect] = useState(false);
  const [isSkipped, setIsSkipped] = useState(false);

  return (
    <S.Wrapper>
      {/* <S.Title>Your points:</S.Title> */}
      <S.WrapperPoints>
        <S.Points>Words: {numberOfWords}</S.Points>
        <S.Points>Correct: {correct}</S.Points>
        <S.Points>Incorrect: {incorrect}</S.Points>
      </S.WrapperPoints>
    </S.Wrapper>
  );
};

export default Points;
