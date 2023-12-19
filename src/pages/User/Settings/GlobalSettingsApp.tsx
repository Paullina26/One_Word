import styled from 'styled-components';
import { FC, useContext, useState } from 'react';
import { GlobalContext } from 'utils/GlobalContext';
import { color_gradient_glassEffect_light, font_settings } from 'style/mixins';
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
const GlobalSettingsApp = () => {
  const {
    defaultWordLanguage,
    setDefaultWordLanguage,
    defaultWordLanguageTranslate,
    setDefaultWordLanguageTranslate,
  } = useContext(GlobalContext);
  const [selectedOptionLanguageWord, setSelectedOptionLanguageWord] = useState(defaultWordLanguage);
  const [selectedTranslateLanguageWord, setSelectedTranslateLanguageWord] = useState(
    defaultWordLanguageTranslate
  );

  return (
    <WrapperSettings>
      <Tittle>Settings Word</Tittle>
      <div>
        <form action='submit'>
          <Select
            id='select_GlobalSettingsApp_LanguageDefault'
            $fontColorLabel='purpleDark'
            labelValue='Select Basic Language Word'
            options={optionsLanguage}
            value={selectedOptionLanguageWord}
            onChange={value => setSelectedOptionLanguageWord(value)}
            $isLightTeam={true}
          />
          <Select
            id='select_GlobalSettingsApp_LanguageTranslate'
            $fontColorLabel='purpleDark'
            labelValue='Select Translate Language Word '
            options={optionsLanguage}
            value={selectedTranslateLanguageWord}
            onChange={value => setSelectedTranslateLanguageWord(value)}
            $isLightTeam={true}
          />
          <Submit $isLightTeam={true} value='Apply' id='submit_GlobalSettingsApp' />
        </form>
      </div>
    </WrapperSettings>
  );
};

export default GlobalSettingsApp;
