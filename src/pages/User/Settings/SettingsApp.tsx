import styled from 'styled-components';
import { useContext } from 'react';
import { font_settings } from 'style/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';
import { Controller, SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { mappedLanguages } from 'data/option/language_options';
import { GlobalContext } from 'utils/GlobalContext';
import { Button } from 'components/Shared/Buttons/Button';
import Divider from '@mui/material/Divider';
import { useNotification } from 'utils/Notifications/useNotification';
import Loading from 'components/Shared/Loading/Loading';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

interface IForm {
  baseLanguage: number;
  languageToLearn: number;
  notifications: {
    type: string;
    time: string;
  }[];
}
const SettingsApp = () => {
  const { userLanguages, setUserLanguages, user } = useContext(GlobalContext);
  const { subscribeUser, unsubscribeAll, unsubscribeDevice, isSubscription, isLoading } =
    useNotification();

  const { handleSubmit, control } = useForm<IForm>({
    defaultValues: {
      ...userLanguages,
    },
  });

  const { fields, remove, append } = useFieldArray({ control, name: 'notifications' });

  const onSubmit: SubmitHandler<IForm> = data => {
    const { baseLanguage, languageToLearn } = data;
    setUserLanguages({
      baseLanguage,
      languageToLearn,
    });
  };

  return (
    <WrapperSettings>
      <Tittle>Settings Word</Tittle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='languageToLearn'
            control={control}
            render={({ field }) => (
              <Select<number>
                id='settings_languageToLearn'
                $fontColorLabel='purpleDark'
                labelValue='Select Translate Language Word '
                options={mappedLanguages}
                value={field.value}
                onChange={field.onChange}
                $isLightTeam={true}
              />
            )}
          />
          <Controller
            name='baseLanguage'
            control={control}
            render={({ field }) => (
              <Select<number>
                id='settings_baseLanguage'
                $fontColorLabel='purpleDark'
                labelValue='Select Translate Language Word '
                options={mappedLanguages}
                value={field.value}
                onChange={field.onChange}
                $isLightTeam={true}
              />
            )}
          />

          {fields.map(el => (
            <span key={el.time}>
              {el.type} - {el.time}
            </span>
          ))}

          <Submit $isLightTeam={true} value='Apply' id='submit_GlobalSettingsApp' />
        </form>
      </div>
      <Divider />

      {!isSubscription && (
        <Button onClick={() => subscribeUser(user?.id)}>
          {isLoading ? <Loading /> : `I want notification`}
        </Button>
      )}
      {isSubscription && (
        <Button onClick={() => unsubscribeDevice(user?.id)}>
          {isLoading ? <Loading /> : `Remove notification from this device`}
        </Button>
      )}
      <Button onClick={() => unsubscribeAll(user?.id)}>
        {isLoading ? <Loading /> : `Remove notification from all devices`}
      </Button>
    </WrapperSettings>
  );
};

export default SettingsApp;
