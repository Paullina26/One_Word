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
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');

  const handleBackWord = () => {
    console.log('Back word');
  };

  const handleCheckWord = () => {
    console.log('Check word');
  };

  const handleNextWord = () => {
    console.log('Next word');
  };

  const getLearnedWordsLast7Days = async () => {
    try {
      const result = await fetchWithToken({
        endpoint: 'learnedWords',
        method: 'GET',
        queryParams: { days: 7, limit: 100 },
      });
      console.log('Learned words from the last 7 days:', result);
      return result;
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
      <S.WrapperBaseWord>{wordBase ? wordBase : 'brak słówek'}</S.WrapperBaseWord>
      <div>
        <S.InputStyle
          $fontColorLabel='purpleDark'
          $isLightTeam={true}
          {...inputNameElement('word_Transate', 'wordTransate', 'Word Transate')}
          onChange={setWordTranslate}
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
