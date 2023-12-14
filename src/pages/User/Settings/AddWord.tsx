import styled from 'styled-components';
import { color_gradient_glassEffect_light, font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { FC, useContext, useState } from 'react';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { Button } from 'components/Shared/Buttons/Button';
import { optionsCategory } from 'data/option/category_options';
import { optionsLanguage } from 'data/option/language_options';

export const WrapperSettings = styled.div`
  ${color_gradient_glassEffect_light};
  color: ${({ theme }) => theme.purpleDark};
  border-radius: 20px;
  text-align: center;
  width: 90vw;
  max-width: 500px;
  max-height: 650px;
  margin: auto;
  padding: 20px 30px;
  backdrop-filter: blur(3px);
  box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
  border: 3px inset rgba(220, 220, 220, 0.2);
`;

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

export const WrapperInputsSettingsAddWord = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const AddWordSettings = () => {
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');
  const [selectedOptionLanguageWord, setSelectedOptionLanguageWord] = useState('');
  const [selectedOptionWordLanguageTranslate, setSelectedOptionWordLanguageTranslate] =
    useState('');

  const handleSelectChangeBaseWord = (value: string) => {
    setSelectedOptionLanguageWord(value);
  };

  const handleSelectChangeTranslateWord = (value: string) => {
    setSelectedOptionWordLanguageTranslate(value);
  };

  return (
    <WrapperSettings>
      <Tittle>Add Word</Tittle>
      <form action='submit'>
        <WrapperInputsSettingsAddWord>
          <Input
            $fontColorLabel='purpleDark'
            $isLightTeam={true}
            {...inputNameElement('settings_addWordBase', 'text', 'Word')}
            onChange={value => setWordBase(value)}
            value={wordBase}
            minlength={2}
            required
          />
          <Select
            id='settings_selectLanguageWord'
            $fontColorLabel='purpleDark'
            labelValue='Select Language Word'
            options={optionsLanguage}
            value={selectedOptionLanguageWord}
            onChange={handleSelectChangeBaseWord}
            $isLightTeam={true}
          />
          <Input
            $fontColorLabel='purpleDark'
            $isLightTeam={true}
            {...inputNameElement('settings_addWordTranslate', 'text', 'Word Translate')}
            onChange={value => setWordTranslate(value)}
            value={wordTranslate}
            minlength={2}
            required
          />
          <Select
            id='settings_selectLanguageWordTranslate'
            $fontColorLabel='purpleDark'
            labelValue='Select Language Word Translate'
            options={optionsLanguage}
            value={selectedOptionWordLanguageTranslate}
            onChange={handleSelectChangeTranslateWord}
            $isLightTeam={true}
          />
        </WrapperInputsSettingsAddWord>
        <Submit $isLightTeam={true} value='Add Word' id='settings_addWordSubmit' />
      </form>
      {/* <button>Import Word Excel</button> */}
    </WrapperSettings>
  );
};

export default AddWordSettings;
