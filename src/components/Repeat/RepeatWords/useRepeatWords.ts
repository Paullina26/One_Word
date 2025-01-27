import { useState, useEffect } from 'react';
import { RepeatWordsProps, Word } from '@components/Repeat/RepeatWords/RepeatWords.types';
import fetchWithToken from '@api/api';

export const useRepeatWords = ({ daysRepeat }: RepeatWordsProps) => {
  const [wordsRepeat, setWordsRepeat] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordBase, setWordBase] = useState('');
  const [wordTranslate, setWordTranslate] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [numberOfWords, setNumberOfWords] = useState(0);

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

  console.log('wordsRepeat', wordsRepeat);

  const handleBackWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      setWordBase(wordsRepeat[currentWordIndex - 1].basicWord);
      setWordTranslate('');
      setFeedback('');
      setIsCorrect(null);
    }
    updateButtonStates();
  };

  const handleCheckWord = () => {
    if (wordsRepeat[currentWordIndex].transWord.toLowerCase() === wordTranslate.toLowerCase()) {
      setIsCorrect(true);
      handleNextWord();
      setFeedback('Good job!');
    } else {
      setFeedback(`Correct is: ${wordsRepeat[currentWordIndex].transWord}`);
      setIsCorrect(false);
    }
    updateButtonStates();
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordsRepeat.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      setWordBase(wordsRepeat[currentWordIndex + 1].basicWord);
      setWordTranslate('');
      setFeedback('');
      setIsCorrect(null);
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
      setNumberOfWords(result.response.words.length);
      console.log('Words length', result.response.words.length);
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
    isCorrect,
    numberOfWords,
  };
};
