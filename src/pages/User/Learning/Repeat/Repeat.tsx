import * as S from './StyleRepeat';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import { TitleBig } from 'components/Shared/Atoms/Title';
import { inputNameElement } from 'helpers/mixins';
import fetchWithToken from 'API/api';
import { useState, useEffect } from 'react';
import RepeatWords from 'components/Repeat/RepeatWords/RepeatWords';
import RepeatForm from 'components/Repeat/RepeatForm/RepeatForm';

interface RepeatProps {}

const Repeat: React.FC<RepeatProps> = () => {
  const [daysRepeat, setDaysRepeat] = useState<number>(7);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = () => {
    if (daysRepeat >= 1 && daysRepeat <= 30) {
      console.log('Days Repeat:', daysRepeat);
      setIsSubmitted(true);
    } else {
      console.error('The value must be between 1 and 30.');
      setIsSubmitted(false);
    }
  };

  return (
    <div>
      {isSubmitted ? (
        <RepeatWords daysRepeat={daysRepeat} />
      ) : (
        <RepeatForm
          daysRepeat={daysRepeat}
          onDaysRepeatChange={setDaysRepeat}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Repeat;
