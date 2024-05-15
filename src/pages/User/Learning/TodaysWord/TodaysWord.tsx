import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import fetchWithToken from 'API/api';
import * as S from './StyleTodaysWord';
import { Button } from 'components/Shared/Buttons/Button';
import NotificationInformation from 'components/Shared/Atoms/NotificationInformation';
import ManagedIcon from 'assets/icon/helpers/ManagedIcon';

const TodayWord = () => {
  const [baseWord, setBaseWord] = useState(null);
  const [transWord, setTransWord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [isShowWord, setIsShowWord] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [idWord, setIdWord] = useState(null);

  const navigate = useNavigate();
  const handleAddWordClick = () => {
    navigate('/settings/add_words');
  };

  const handleShowWord = () => {
    setIsShowWord(!isShowWord);
  };

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
      console.error(error);
    }
  };

  const fetchData = async () => {
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
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (isError)
    return (
      <S.Wrapper>
        {' '}
        <S.Tittle>Today`s Word</S.Tittle>
        <S.WrapperBaseWord>
          <S.Word>Please add new words</S.Word>
        </S.WrapperBaseWord>
        <Button onClick={handleAddWordClick}>Add Word</Button>
        <NotificationInformation NotificationText='Missing new words to learn, please click Add Words to add new words. Or change the status of learned words.' />
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.Tittle>Today`s Word</S.Tittle>
      <S.WrapperBaseWord>
        <S.Word>{baseWord}</S.Word>
      </S.WrapperBaseWord>
      <S.WrapperWord>
        {isShowWord ? (
          <S.Word>{transWord}</S.Word>
        ) : (
          <Button onClick={handleShowWord}>Show Word</Button>
        )}
        <S.PositionedButton onClick={handleSpeak} disabled={isSpeaking}>
          <ManagedIcon name='speaker' />
        </S.PositionedButton>
      </S.WrapperWord>
      <S.WrapperButtons>
        <Button onClick={handleLearnedWord}>Learned</Button>
        <NotificationInformation NotificationText='If you click this button, the word will be learned and will not appear again.' />
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default TodayWord;
