import * as S from './StyleRepeatWords';
import ButtonIcon from '@components/Shared/Buttons/ButtonIcon';
import { TitleBig } from '@components/Shared/Atoms/Title';
import { inputNameElement } from '@helpers/mixins';
import { Word, RepeatWordsProps } from '@components/Repeat/RepeatWords/RepeatWords.types';
import { useRepeatWords } from './useRepeatWords';
import Points from '@pages/User/Learning/Points/Points';

const RepeatWords: React.FC<RepeatWordsProps> = ({ daysRepeat }) => {
  const {
    wordBase,
    wordTranslate,
    feedback,
    isBackClickable,
    isCheckClickable,
    isNextClickable,
    setWordTranslate,
    handleBackWord,
    handleCheckWord,
    handleNextWord,
    isCorrect,
    numberOfWords,
  } = useRepeatWords({ daysRepeat });

  return (
    <S.Wrapper>
      <TitleBig>Repeat</TitleBig>
      <S.WrapperBaseWord>{wordBase || 'No words'}</S.WrapperBaseWord>
      <div>{feedback && <div>{feedback}</div>}</div>
      <div>
        <S.InputStyle
          $fontColorLabel='purpleDark'
          $isLightTeam={true}
          {...inputNameElement('word_Transate', 'wordTransate', 'Word Transate')}
          onChange={(value: string) => setWordTranslate(value)}
          value={wordTranslate}
          required
          $isCorrect={isCorrect}
        />
      </div>
      <S.WrapperButton>
        <ButtonIcon
          nameIcon='back'
          $margin='2px auto'
          onClick={handleBackWord}
          $isClickable={isBackClickable}
        />
        <ButtonIcon
          nameIcon='check'
          $margin='2px auto'
          onClick={handleCheckWord}
          $isClickable={isCheckClickable}
        />
        <ButtonIcon
          nameIcon='next'
          $margin='2px auto'
          onClick={handleNextWord}
          $isClickable={isNextClickable}
        />
      </S.WrapperButton>
      <Points numberOfWords={numberOfWords} />
    </S.Wrapper>
  );
};

export default RepeatWords;
