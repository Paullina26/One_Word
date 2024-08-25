import { useForm, useFieldArray, Controller } from 'react-hook-form';
import TimePickerViewRenderers from 'components/Shared/Form/Time';
import * as S from './StyleLearningSettings';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { TitleSmall, TitleBig } from 'components/Shared/Atoms/Title';
import useLearningSettings from './useLearningSettings';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';

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
    fetchUserSettings,
  } = useLearningSettings();

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
              <ButtonIcon
                nameIcon='xmark'
                $margin='2px auto'
                onClick={() => handleRemoveNotification(index)}
              />
            </S.Notification>
          ))}
        </S.WrapperTimePicker>
        <S.NotificationForm>
          <ButtonIcon
            nameIcon='add'
            type='button'
            onClick={handleAddNotification}
            disabled={isAddButtonDisabled}
            $margin='10px auto'
          />
          <Select
            id='summaryDay'
            options={daysOfWeek}
            onChange={value => setValue('summaryDay', value)}
            value={watch('summaryDay')}
            labelValue='On which days do you want to review?'
            $isLightTeam={true}
            $fontColorLabel='purpleDark'
          />
          <Select
            id='breakDay'
            options={daysOfWeek}
            onChange={value => setValue('breakDay', value)}
            value={watch('breakDay')}
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
