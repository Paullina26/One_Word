import { useState, useEffect } from 'react';
import { RepeatWordsProps, Word } from '@components/Repeat/RepeatWords/RepeatWords.types';
import fetchWithToken from '@api/api';
import { useGlobalStore } from '@utils/store/globalStore';

export const useRepeatWords = ({ daysRepeat }: RepeatWordsProps) => {
  const [wordsRepeat, setWordsRepeat] = useState<Word[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [wordBase, setWordBase] = useState('');
  const [wordTranslate, setWordTranslate] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [numberOfWords, setNumberOfWords] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const [isBackClickable, setIsBackClickable] = useState(false);
  const [isCheckClickable, setIsCheckClickable] = useState(false);
  const [isNextClickable, setIsNextClickable] = useState(true);

  const updateButtonStates = () => {
    setIsBackClickable(currentWordIndex > 0);
    const currentWord = wordsRepeat[currentWordIndex];
    setIsCheckClickable(
      wordTranslate !== '' && feedback === '' && currentWord?.wordUserAnswer === undefined
    );
    setIsNextClickable(currentWordIndex < wordsRepeat.length - 1);
  };

  useEffect(() => {
    updateButtonStates();
  }, [currentWordIndex, wordTranslate, feedback, wordsRepeat]);

  const handleBackWord = () => {
    if (currentWordIndex > 0) {
      setCurrentWordIndex(currentWordIndex - 1);
      const previousWord = wordsRepeat[currentWordIndex - 1];
      setWordBase(previousWord.basicWord);
      setWordTranslate(previousWord.wordUserAnswer || '');
      setFeedback(previousWord.isCorrect === false ? `Correct is: ${previousWord.transWord}` : '');
      setIsCorrect(previousWord.isCorrect ?? null);
    }
    updateButtonStates();
  };

  const handleCheckWord = () => {
    const currentWord = wordsRepeat[currentWordIndex];
    if (currentWord.transWord.toLowerCase() === wordTranslate.toLowerCase()) {
      setIsCorrect(true);
      setFeedback('Good job!');
      setCorrectCount(correctCount + 1);
      wordsRepeat[currentWordIndex] = {
        ...currentWord,
        wordUserAnswer: wordTranslate,
        isCorrect: true,
      };
    } else {
      setFeedback(`Correct is: ${currentWord.transWord}`);
      setIsCorrect(false);
      setIncorrectCount(incorrectCount + 1);
      wordsRepeat[currentWordIndex] = {
        ...currentWord,
        wordUserAnswer: wordTranslate,
        isCorrect: false,
      };
    }
    updateButtonStates();
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordsRepeat.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
      const nextWord = wordsRepeat[currentWordIndex + 1];
      setWordBase(nextWord.basicWord);
      setWordTranslate(nextWord.wordUserAnswer || '');
      setFeedback(nextWord.isCorrect === false ? `Correct is: ${nextWord.transWord}` : '');
      setIsCorrect(nextWord.isCorrect ?? null);
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
      setWordsRepeat(result.response.words);
      setNumberOfWords(result.response.words.length);
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
    wordsRepeat,
    currentWordIndex,
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
    correctCount,
    incorrectCount,
  };
};
