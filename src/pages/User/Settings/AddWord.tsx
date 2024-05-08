import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import { FC, useContext, useState } from 'react';
import { font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { Button } from 'components/Shared/Buttons/Button';
import { LanguagesMap, mappedLanguages } from 'data/option/language_options';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';
import { UserSettingsContext } from 'utils/ContextSettingsUser';
import fetchWithToken from 'API/api';
import { toast } from 'react-toastify';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

export const WrapperInputsSettingsAddWord = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`;

const AddWordSettings = () => {
  const { defaultWordLanguageTranslate } = useContext(UserSettingsContext);
  const [wordBase, setWordBase] = useState<string>('');
  const [wordTranslate, setWordTranslate] = useState<string>('');
  const [selectedOptionWordLanguageTranslate, setSelectedOptionWordLanguageTranslate] = useState(
    defaultWordLanguageTranslate
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const postData = {
      basicWord: wordBase,
      transWord: wordTranslate,
      addLang: selectedOptionWordLanguageTranslate,
    };
    try {
      const response = await fetchWithToken({
        endpoint: 'addWord',
        method: 'POST',
        body: postData,
      });
      console.log('Response from API:', response);
    } catch (err) {
      console.error(err);
      toast.error('Nie udało sie dodać słówka');
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <WrapperSettings>
      <Tittle>Add Word</Tittle>
      <form onSubmit={handleSubmit}>
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
          <Input
            $fontColorLabel='purpleDark'
            $isLightTeam={true}
            {...inputNameElement('settings_addWordTranslate', 'text', 'Word Translated')}
            onChange={value => setWordTranslate(value)}
            value={wordTranslate}
            minlength={2}
            required
          />
          <Select<number>
            id='settings_selectLanguageWordTranslate'
            $fontColorLabel='purpleDark'
            labelValue='Language To Learn'
            options={mappedLanguages}
            value={selectedOptionWordLanguageTranslate}
            onChange={newValue => {
              console.log(newValue);
              setSelectedOptionWordLanguageTranslate(newValue);
            }}
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
