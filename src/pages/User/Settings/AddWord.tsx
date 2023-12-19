import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import { FC, useContext, useState } from 'react';
import { font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { Button } from 'components/Shared/Buttons/Button';
import { optionsCategory } from 'data/option/category_options';
import { optionsLanguage } from 'data/option/language_options';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

export const WrapperInputsSettingsAddWord = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const AddWordSettings = () => {
  const { defaultWordLanguage, defaultWordLanguageTranslate } = useContext(GlobalContext);
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');
  const [selectedOptionLanguageWord, setSelectedOptionLanguageWord] = useState(defaultWordLanguage);
  const [selectedOptionWordLanguageTranslate, setSelectedOptionWordLanguageTranslate] = useState(
    defaultWordLanguageTranslate
  );

  // const handleSelectChangeBaseWord = (value: string) => {
  //   setSelectedOptionLanguageWord(value);
  // };

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
            onChange={value => setSelectedOptionLanguageWord(value)}
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
            onChange={value => setSelectedOptionWordLanguageTranslate(value)}
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
