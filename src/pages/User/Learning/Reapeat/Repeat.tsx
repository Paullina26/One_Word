import * as S from './StyleRepeat';
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
  __v: number;
}

const Repeat: React.FC = () => {
  const [wordsRepeat, setWordsRepeat] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState<number>(0);
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const handleBackWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      setWordBase(wordsRepeat[currentWordIndex - 1].basicWord);
      setWordTranslate('');
      setFeedback('');
    }
  };

  const handleCheckWord = () => {
    if (wordsRepeat[currentWordIndex].transWord.toLowerCase() === wordTranslate.toLowerCase()) {
      setFeedback('Good job!');
    } else {
      setFeedback(`Correct is: ${wordsRepeat[currentWordIndex].transWord}`);
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordsRepeat.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setWordBase(wordsRepeat[currentWordIndex + 1].basicWord);
      setWordTranslate('');
      setFeedback('');
    }
  };

  const getLearnedWordsLast7Days = async () => {
    try {
      const result = await fetchWithToken({
        endpoint: 'learnedWords',
        method: 'GET',
        queryParams: { days: 7, limit: 100 },
      });
      console.log('Response', result);
      setWordsRepeat(result.response.words);
      if (result.response.words.length > 0) {
        setWordBase(result.response.words[0].basicWord);
      }
    } catch (error) {
      console.error('Error fetching learned words:', error);
    }
  };

  useEffect(() => {
    getLearnedWordsLast7Days();
  }, []);

  useEffect(() => {
    console.log('Words repeat updated:', wordsRepeat);
    if (wordsRepeat.length > 0 && currentWordIndex < wordsRepeat.length) {
      setWordBase(wordsRepeat[currentWordIndex].basicWord);
    }
  }, [wordsRepeat, currentWordIndex]);

  return (
    <S.Wrapper>
      <TitleBig>Repeat</TitleBig>
      <S.WrapperBaseWord>{wordBase ? wordBase : 'No Words'}</S.WrapperBaseWord>
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
        <ButtonIcon nameIcon='back' $margin='2px auto' onClick={handleBackWord} />
        <ButtonIcon nameIcon='check' $margin='2px auto' onClick={handleCheckWord} />
        <ButtonIcon nameIcon='next' $margin='2px auto' onClick={handleNextWord} />
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default Repeat;
