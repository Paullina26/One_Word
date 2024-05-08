import React, { useEffect, useState } from 'react';
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
  const [error, setError] = useState(false);
  const [isShowWord, setIsShowWord] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchWithToken({
          endpoint: 'getTodayWord',
        });
        setBaseWord(data.basicWord);
        setTransWord(data.transWord);
        console.log(data);
        setError(false);
      } catch (err) {
        console.error(err);
        toast.error('Nie udało się pobrać słowa dnia. Spróbuj ponownie później.');
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  return (
    <S.Wrapper>
      <S.Tittle>Today`s Word</S.Tittle>
      <S.WrapperBaseWord>
        <S.Word>{baseWord}</S.Word>
      </S.WrapperBaseWord>
      <S.WrapperWord>
        {isShowWord ? <S.Word>{transWord}</S.Word> : <Button>Show Word</Button>}
        <Button>
          <ManagedIcon name='speaker' />
        </Button>
      </S.WrapperWord>
      <S.WrapperButtons>
        <Button>
          <ManagedIcon name='check' />
          Learn
        </Button>
        <NotificationInformation NotificationText='If you click this button, the word will be learned and will not appear again.' />
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default TodayWord;
