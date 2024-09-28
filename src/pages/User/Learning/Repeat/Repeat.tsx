import { useState } from 'react';
import RepeatWords from '@components/Repeat/RepeatWords/RepeatWords';
import RepeatForm from '@components/Repeat/RepeatForm/RepeatForm';

interface RepeatProps {}

const Repeat: React.FC<RepeatProps> = () => {
  const [daysRepeat, setDaysRepeat] = useState(7);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (daysRepeat >= 1 && daysRepeat <= 30) {
      setIsSubmitted(true);
    } else {
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
