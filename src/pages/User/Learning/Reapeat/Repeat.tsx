import * as S from './StyleRepeat';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import { TitleSmall, TitleBig } from 'components/Shared/Atoms/Title';
import { inputNameElement } from 'helpers/mixins';

import { useState } from 'react';

const handleBackWord = () => {
  console.log('Back word');
};
const handleCheckWord = () => {
  console.log('check word');
};

const handleNextWord = () => {
  console.log('next word');
};

export const Repeat = () => {
  const [wordBase, setWordBase] = useState('');
  const [wordTransate, setWordTranslate] = useState('');

  return (
    <S.Wrapper>
      <TitleBig> Repeat</TitleBig>
      <S.WrapperBaseWord>Word</S.WrapperBaseWord>
      {/* <div>Word Check</div> */}
      <div>
        <S.InputStyle
          $fontColorLabel='purpleDark'
          $isLightTeam={true}
          {...inputNameElement('word_Transate', 'wordTransate', 'Word Transate')}
          onChange={value => setWordTranslate(value)}
          value={wordTransate}
          minlength={4}
          required
        />
      </div>
      <S.WrapperButton>
        <ButtonIcon nameIcon='back' $margin='2px auto' onClick={() => handleBackWord()} />
        <ButtonIcon nameIcon='check' $margin='2px auto' onClick={() => handleCheckWord()} />
        <ButtonIcon nameIcon='next' $margin='2px auto' onClick={() => handleNextWord()} />
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default Repeat;
