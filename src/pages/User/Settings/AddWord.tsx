import styled from 'styled-components';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

import { font_settings } from 'style/mixins';
import Input from 'components/Shared/Form/Input';
import { inputNameElement } from 'helpers/mixins';
import Submit from 'components/Shared/Form/Submit';
import Select from 'components/Shared/Form/Select';
import { mappedLanguages } from 'data/option/language_options';
import { WrapperSettings } from 'components/Shared/containers/WrapperSettings';
import fetchWithToken from 'API/api';
import { GlobalContext } from 'utils/GlobalContext';

export const Tittle = styled.p`
  ${font_settings(2.4, 'normal', 600)}
  margin: 5px auto;
`;

export const WrapperInputsSettingsAddWord = styled.div`
  margin-bottom: 30px;
  margin-top: 20px;
`;

type AddWordSettingsProps = {
  wordToLearn?: string;
  inBaseLang?: string;
  onClose?: () => void;
};

const AddWordSettings = ({ wordToLearn, onClose, inBaseLang }: AddWordSettingsProps) => {
  const { userLanguages } = useContext(GlobalContext);

  const [wordBase, setWordBase] = useState<string>(inBaseLang || '');
  const [wordTranslate, setWordTranslate] = useState<string>(wordToLearn || '');
  const [selectedOptionWordLanguageTranslate, setSelectedOptionWordLanguageTranslate] = useState(
    userLanguages.languageToLearn
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
      const { response, status } = await fetchWithToken({
        endpoint: 'addWord',
        method: 'POST',
        body: postData,
      });
      if (status === 200) {
        toast.success('The word has been added!');
        setWordBase('');
        setWordTranslate('');
        setSelectedOptionWordLanguageTranslate(userLanguages.languageToLearn);
      } else {
        console.log('Response from API:', response);
        throw new Error('Problem with adding a word');
      }
    } catch (err) {
      toast.error('Failed to add the word');
      setError(true);
    } finally {
      setLoading(false);
      onClose && onClose();
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
