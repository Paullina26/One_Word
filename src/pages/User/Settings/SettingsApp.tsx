import styled from 'styled-components';
import { FC, useContext, useState } from 'react';
import { color_gradient_glassEffect_light, font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { Button } from 'components/Shared/Buttons/Button';
import { optionsCategory } from 'data/option/category_options';
import { optionsLanguage } from 'data/option/language_options';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';
import { UserSettingsContext } from 'utils/ContextSettingsUser';
import { Controller, SubmitHandler, useForm, useFieldArray } from 'react-hook-form';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

interface IForm {
  selectedOptionLanguageWord: string;
  selectedTranslateLanguageWord: string;
  notifications: {
    type: string;
    time: string;
  }[];
}
const SettingsApp = () => {
  const {
    defaultWordLanguage,
    setDefaultWordLanguage,
    defaultWordLanguageTranslate,
    setDefaultWordLanguageTranslate,
  } = useContext(UserSettingsContext);

  const { handleSubmit, control, getValues } = useForm<IForm>({
    defaultValues: {
      selectedOptionLanguageWord: defaultWordLanguage,
      selectedTranslateLanguageWord: defaultWordLanguageTranslate,
    },
  });

  const { fields, remove, append } = useFieldArray({ control, name: 'notifications' });

  const onSubmit: SubmitHandler<IForm> = data => {
    setDefaultWordLanguage(data.selectedOptionLanguageWord);
    setDefaultWordLanguageTranslate(data.selectedTranslateLanguageWord);
    console.log('SettingsApp', data);
  };

  return (
    <WrapperSettings>
      <Tittle>Settings Word</Tittle>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
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
          />
          <Controller
            name='selectedTranslateLanguageWord'
            control={control}
            render={({ field }) => (
              <Select
                id='select_GlobalSettingsApp_LanguageTranslate'
                $fontColorLabel='purpleDark'
                labelValue='Select Translate Language Word '
                options={optionsLanguage}
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
