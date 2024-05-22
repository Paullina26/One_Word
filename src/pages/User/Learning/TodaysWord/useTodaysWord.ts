import { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'utils/GlobalContext';
import fetchWithToken from 'API/api';
import { toast } from 'react-toastify';

const useTodayWord = () => {
  const { isLoadingOpen, setIsLoadingOpen, isLoginUser } = useContext(GlobalContext);
  const [baseWord, setBaseWord] = useState<string | null>(null);
  const [transWord, setTransWord] = useState<string | null>(null);
  const [isError, setIsError] = useState(false);
  const [isShowWord, setIsShowWord] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [idWord, setIdWord] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleAddWordClick = () => navigate('/settings/add_words');
  const handleShowWord = () => setIsShowWord(!isShowWord);

  const handleSpeak = () => {
    if (transWord) {
      setIsSpeaking(true);
      const utterance = new SpeechSynthesisUtterance(transWord);
      utterance.lang = 'en-US';
      utterance.onend = () => {
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    }
  };

  const handleLearnedWord = async () => {
    if (idWord === null) {
      toast.error('Word ID is missing.');
      return;
    }

    try {
      const { response, status } = await fetchWithToken({
        endpoint: 'updateWord',
        method: 'PUT',
        body: { status: 2 },
        params: idWord,
      });

      toast.success('Word status updated successfully!');
      fetchData();
    } catch (error) {
      toast.error('Failed to update word status.');
    }
  };

  const fetchData = async () => {
    setIsLoadingOpen(true);
    try {
      const { response, status } = await fetchWithToken({
        endpoint: 'getTodayWord',
      });

      setBaseWord(response.basicWord);
      setTransWord(response.transWord);
      setIdWord(response._id);
      setIsError(false);
    } catch (err) {
      toast.warn(
        'Failed to fetch the word of the day as there are no new words to learn. Please add new ones.'
      );
      setIsError(true);
    } finally {
      setIsLoadingOpen(false);
    }
  };

  useEffect(() => {
    if (isLoginUser) fetchData();
  }, [isLoginUser]);

  return {
    baseWord,
    transWord,
    isError,
    isShowWord,
    isSpeaking,
    handleAddWordClick,
    handleShowWord,
    handleSpeak,
    handleLearnedWord,
  };
};

export default useTodayWord;
