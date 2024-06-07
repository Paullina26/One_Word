import { useForm, useFieldArray, Controller } from 'react-hook-form';

import TimePickerViewRenderers from 'components/Shared/Form/Time';

import * as S from './StyleLearning';
import Submit from 'components/Shared/Form/Submit';
import ManagedIcon from 'assets/icon/helpers/ManagedIcon';
import Select from 'components/Shared/Form/Select';
import { ButtonIcon } from 'components/Shared/Buttons/Button';
import { TitleSmall, TitleBig } from 'components/Shared/Atoms/Title';
import useLearning from './useLearning';

const LearningSettings: React.FC = () => {
  const {
    handleRemoveNotification,
    handleAddNotification,
    isAddButtonDisabled,
    daysOfWeek,
    watch,
    handleSubmit,
    setValue,
    onSubmit,
    fields,
    control,
  } = useLearning();

  return (
    <S.Wrapper>
      <TitleBig>Learning Settings</TitleBig>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TitleSmall>Notifications Time</TitleSmall>
        <S.WrapperTimePicker>
          {fields.map((field, index) => (
            <S.Notification key={field.id}>
              <Controller
                name={`notifications.${index}.time`}
                control={control}
                render={({ field }) => (
                  <TimePickerViewRenderers value={field.value} onChange={field.onChange} />
                )}
              />
              <S.PositionButtonIcon
                color='secondary'
                onClick={() => handleRemoveNotification(index)}
              >
                <ManagedIcon name='xmark' />
              </S.PositionButtonIcon>
            </S.Notification>
          ))}
        </S.WrapperTimePicker>
        <S.NotificationForm>
          <ButtonIcon type='button' onClick={handleAddNotification} disabled={isAddButtonDisabled}>
            <ManagedIcon name='add' />
          </ButtonIcon>
          <Select
            id='reviewDays'
            options={daysOfWeek}
            onChange={value => setValue('reviewDays', value)}
            value={watch('reviewDays')}
            labelValue='On which days do you want to review?'
            $isLightTeam={true}
            $fontColorLabel='purpleDark'
          />
          <Select
            id='offDays'
            options={daysOfWeek}
            onChange={value => setValue('offDays', value)}
            value={watch('offDays')}
            labelValue='On which days do you want to take a break?'
            $isLightTeam={true}
            $fontColorLabel='purpleDark'
          />
          <Submit id='submit' value='Save' $isLightTeam={true} />
        </S.NotificationForm>
      </form>
    </S.Wrapper>
  );
};

export default LearningSettings;
