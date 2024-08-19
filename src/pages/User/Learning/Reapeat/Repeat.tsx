import * as S from './StyleRepeat';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import { TitleBig } from 'components/Shared/Atoms/Title';
import { inputNameElement } from 'helpers/mixins';
import fetchWithToken from 'API/api';
import { useState, useEffect } from 'react';
import RepeatWords from 'components/RepeatWords/RepeatWords';
import Input from 'components/Shared/Form/Input';

interface RepeatProps {}

const Repeat: React.FC<RepeatProps> = () => {
  const [daysRepeat, setDaysRepeat] = useState<string>('');

  const check = () => {
    const days = parseInt(daysRepeat, 10);
    if (days >= 1 && days <= 30) {
      console.log('Days Repeat:', days);
      // Tutaj dodaj logikę przetwarzania daysRepeat, np. wysłanie do serwera
    } else {
      console.error('The value must be between 1 and 30.');
    }
  };

  return (
    <div>
      {/* <RepeatWords daysRepeat={7} /> */}
      <S.Wrapper>
        <TitleBig>Repeat</TitleBig>
        <form action='submit'>
          <p>How many days do you want to repeat?</p>
          <Input
            type='number'
            value={daysRepeat}
            onChange={setDaysRepeat}
            placeholder='Enter number of days'
            min={1}
            max={30}
            $fontColorLabel='purpleDark'
            $isLightTeam={true}
          />
          <ButtonIcon nameIcon='check' $margin='2px auto' onClick={check} $isClickable={true} />
        </form>
      </S.Wrapper>
    </div>
  );
};

export default Repeat;
