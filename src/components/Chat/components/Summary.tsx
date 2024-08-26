import { FC, useState } from 'react';
import { Modal } from '@mui/material';

import { Heading } from '@components/Shared/Heading';
import AddWordSettings from '@pages/User/Settings/AddWord';
import { Button } from '@components/Shared/Buttons/Button';
import List from '@components/Shared/List';

import * as S from '../StyleChat';
import { useChat } from '../ChatProvider';

type WordToLearn = {
  textToLearn: string;
  id: string;
  inBaseLang?: string;
};

const Summary: FC = () => {
  const { mistakesList, newWordsList, handleNewChat } = useChat();
  const [currentWord, setCurrentWord] = useState<WordToLearn | null>(null);

  const openModal = ({ textToLearn, id, inBaseLang }: WordToLearn) => {
    setCurrentWord({ textToLearn, id, inBaseLang });
  };

  const closeModal = () => setCurrentWord(null);

  const SingleItem = ({
    text,
    mistake,
    id,
    inBaseLang,
  }: {
    text: string;
    mistake?: string;
    id: string;
    inBaseLang?: string;
  }) => (
    <>
      <S.SummaryWordToAdd>
        <div>
          <span>{text}</span>
          {inBaseLang && (
            <p>
              base language: <i>{inBaseLang}</i>
            </p>
          )}
          {mistake && (
            <p>
              mistake: <i>{mistake}</i>
            </p>
          )}
        </div>
        <S.SummaryAddButton onClick={() => openModal({ textToLearn: text, id, inBaseLang })}>
          Add
        </S.SummaryAddButton>
      </S.SummaryWordToAdd>
    </>
  );

  const mistakesListItems = mistakesList.map(({ id, correction, mistake }) => ({
    element: <SingleItem key={id} text={correction} id={id} mistake={mistake} />,
    id,
  }));

  const newWordsListItems = newWordsList.map(({ id, newWord, inBaseLang }) => ({
    element: <SingleItem key={id} text={newWord} id={id} inBaseLang={inBaseLang} />,
    id,
  }));

  const listItems = [...mistakesListItems, ...newWordsListItems];

  return (
    <S.SummaryWrapper>
      <Heading>Summary</Heading>
      <S.Description>
        Here are your mistakes and new words from conversation. You can decide if you want to add
        some them to your list of words to learn.
      </S.Description>
      <S.SummaryList>
        {listItems.length > 0 ? (
          <List items={listItems} />
        ) : (
          <S.Description>
            You were so good that there are not any mistakes or new words
          </S.Description>
        )}
      </S.SummaryList>

      <Modal open={Boolean(currentWord)} onClose={closeModal}>
        <S.ModalWrapper>
          <AddWordSettings
            wordToLearn={currentWord?.textToLearn}
            inBaseLang={currentWord?.inBaseLang}
            onClose={closeModal}
          />
        </S.ModalWrapper>
      </Modal>

      <Heading>Keep going!</Heading>
      <Button onClick={handleNewChat}>New chat</Button>
    </S.SummaryWrapper>
  );
};

export default Summary;
