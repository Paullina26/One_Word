import React, { FC } from 'react';
import Input from 'components/Shared/Form/Input';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import * as S from 'pages/User/Learning/Repeat/StyleRepeat';
import { TitleBig } from 'components/Shared/Atoms/Title';

interface RepeatFormProps {
  daysRepeat: number;
  onDaysRepeatChange: (value: number) => void;
  onSubmit: () => void;
}

const RepeatForm: FC<RepeatFormProps> = ({ daysRepeat, onDaysRepeatChange, onSubmit }) => {
  const handleDaysRepeatChange = (value: string) => {
    const numericValue = parseInt(value, 10);
    if (!isNaN(numericValue)) {
      onDaysRepeatChange(numericValue);
    }
  };

  return (
    <S.Wrapper>
      <TitleBig>Repeat</TitleBig>
      <form action='submit'>
        <Input
          label='How many days do you want to repeat?'
          type='number'
          value={daysRepeat.toString()}
          onChange={handleDaysRepeatChange}
          placeholder='Enter number of days'
          min={1}
          max={30}
          $fontColorLabel='purpleDark'
          $isLightTeam={true}
        />
        <ButtonIcon nameIcon='check' $margin='2px auto' onClick={onSubmit} $isClickable={true} />
      </form>
    </S.Wrapper>
  );
};

export default RepeatForm;
