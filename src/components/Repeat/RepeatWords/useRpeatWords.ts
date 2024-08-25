import { useState, useEffect } from 'react';
import { Word } from 'components/Repeat/RepeatWords/RepeatWords.types';
import fetchWithToken from 'API/api';

interface UseRepeatWordsProps {
  daysRepeat: number;
}

export const useRepeatWords = ({ daysRepeat }: UseRepeatWordsProps) => {
  const [wordsRepeat, setWordsRepeat] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordBase, setWordBase] = useState('');
  const [wordTranslate, setWordTranslate] = useState('');
  const [feedback, setFeedback] = useState('');

  const [isBackClickable, setIsBackClickable] = useState(false);
  const [isCheckClickable, setIsCheckClickable] = useState(false);
  const [isNextClickable, setIsNextClickable] = useState(true);

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

  return {
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
  };
};
