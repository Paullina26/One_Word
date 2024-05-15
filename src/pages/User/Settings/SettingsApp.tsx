import styled from 'styled-components';
import { FC, useContext, useState } from 'react';
import { color_gradient_glassEffect_light, font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { Button } from 'components/Shared/Buttons/Button';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';
import { UserSettingsContext } from 'utils/ContextSettingsUser';
import { Controller, SubmitHandler, useForm, useFieldArray } from 'react-hook-form';
import { mappedLanguages } from 'data/option/language_options';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

interface IForm {
  defaultLanguageToLearn: number;
  notifications: {
    type: string;
    time: string;
  }[];
}
const SettingsApp = () => {
  const { defaultLanguageToLearn, setDefaultLanguageToLearn } = useContext(UserSettingsContext);

  const { handleSubmit, control, getValues } = useForm<IForm>({
    defaultValues: {
      defaultLanguageToLearn: defaultLanguageToLearn,
    },
  });

  const { fields, remove, append } = useFieldArray({ control, name: 'notifications' });

  const onSubmit: SubmitHandler<IForm> = data => {
    setDefaultLanguageToLearn(data.defaultLanguageToLearn);
    console.log('SettingsApp', data);
  };

  return (
    <WrapperSettings>
      <Tittle>Settings Word</Tittle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <Controller
            name='selectedOptionLanguageWord'
            control={control}
            render={({ field }) => (
              <Select
                id='select_GlobalSettingsApp_LanguageDefault'
                $fontColorLabel='purpleDark'
                labelValue='Select Basic Language Word'
                options={optionsLanguage}
                value={field.value}
                onChange={field.onChange}
                $isLightTeam={true}
              />
            )}
          /> */}
          <Controller
            name='defaultLanguageToLearn'
            control={control}
            render={({ field }) => (
              <Select<number>
                id='select_GlobalSettingsApp_LanguageTranslate'
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
    </WrapperSettings>
  );
};

export default SettingsApp;
