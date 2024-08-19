import * as S from './StyleRepeatWords';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import { TitleBig } from 'components/Shared/Atoms/Title';
import { inputNameElement } from 'helpers/mixins';
import fetchWithToken from 'API/api';
import { useState, useEffect } from 'react';

interface Word {
  _id: string;
  userId: string;
  basicWord: string;
  transWord: string;
  addLang: number;
  status: number;
  createdDate: string;
  updatedDate: string;
  daysRepeat: number;
  __v: number;
}

interface RepeatWordsProps {
  daysRepeat: number;
}

const RepeatWords: React.FC<RepeatWordsProps> = ({ daysRepeat }) => {
  const [wordsRepeat, setWordsRepeat] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const [isBackClickable, setIsBackClickable] = useState<boolean>(false);
  const [isCheckClickable, setIsCheckClickable] = useState<boolean>(false);
  const [isNextClickable, setIsNextClickable] = useState<boolean>(true);

  const updateButtonStates = () => {
    setIsBackClickable(currentWordIndex > 0);
    setIsCheckClickable(wordTranslate !== '' && feedback === '');
    setIsNextClickable(currentWordIndex < wordsRepeat.length - 1);
  };

  useEffect(() => {
    updateButtonStates();
  }, [currentWordIndex, wordTranslate, feedback, wordsRepeat]);

  const handleBackWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      setWordBase(wordsRepeat[currentWordIndex - 1].basicWord);
      setWordTranslate('');
      setFeedback('');
    }
    updateButtonStates();
  };

  const handleCheckWord = () => {
    if (wordsRepeat[currentWordIndex].transWord.toLowerCase() === wordTranslate.toLowerCase()) {
      handleNextWord();
      setFeedback('Good job!');
    } else {
      setFeedback(`Correct is: ${wordsRepeat[currentWordIndex].transWord}`);
    }
    updateButtonStates();
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordsRepeat.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setWordBase(wordsRepeat[currentWordIndex + 1].basicWord);
      setWordTranslate('');
      setFeedback('');
    }
    updateButtonStates();
  };

  const getLearnedWordsLast7Days = async () => {
    try {
      const result = await fetchWithToken({
        endpoint: 'learnedWords',
        method: 'GET',
        queryParams: { days: daysRepeat, limit: 100 },
      });
      console.log('Response', result);
      setWordsRepeat(result.response.words);
      if (result.response.words.length > 0) {
        setWordBase(result.response.words[0].basicWord);
      }
      updateButtonStates();
    } catch (error) {
      console.error('Error fetching learned words:', error);
    }
  };

  useEffect(() => {
    getLearnedWordsLast7Days();
  }, []);

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
    </S.Wrapper>
  );
};

export default RepeatWords;
