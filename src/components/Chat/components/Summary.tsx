import { FC, useState } from 'react';
import { useChat } from '../ChatProvider';
import { Modal } from '@mui/material';
import { Heading } from 'components/Shared/Heading';
import AddWordSettings from 'pages/User/Settings/AddWord';

import * as S from '../StyleChat';
import List from 'components/Shared/List';

type WordToLearn = {
  textToLearn: string;
  id: string;
};

const Summary: FC = () => {
  const { mistakesList, newWordsList } = useChat();
  const [currentWord, setCurrentWord] = useState<WordToLearn | null>(null);

  const openModal = ({ textToLearn, id }: WordToLearn) => {
    setCurrentWord({ textToLearn, id });
  };

  const closeModal = () => setCurrentWord(null);

  const SingleItem = ({ text, mistake, id }: { text: string; mistake?: string; id: string }) => (
    <>
      <S.SummaryWordToAdd>
        <div>
          <span>{text}</span>
          {mistake && (
            <p>
              mistake: <i>{mistake}</i>
            </p>
          )}
        </div>
        <S.SummaryAddButton onClick={() => openModal({ textToLearn: text, id })}>
          Add
        </S.SummaryAddButton>
      </S.SummaryWordToAdd>
    </>
  );

  const mistakesListItems = mistakesList.map(({ id, correction, mistake }) => ({
    element: <SingleItem key={id} text={correction} id={id} mistake={mistake} />,
    id,
  }));

  const newWordsListItems = newWordsList.map(({ id, newWord }) => ({
    element: <SingleItem key={id} text={newWord} id={id} />,
    id,
  }));

  const listItems = [...mistakesListItems, ...newWordsListItems];

  return (
    <S.SummaryWrapper>
      <Heading>Summary</Heading>
      <S.Description>
        Here are your mistakes and new words from conversation. You can decide if you want to add
        some them to you list of words to learn.
      </S.Description>
      <List items={listItems} />

      <Modal open={Boolean(currentWord)} onClose={closeModal}>
        <S.ModalWrapper>
          {/* <AddWordSettings wordToLearn={currentWord?.textToLearn} /> */}
        </S.ModalWrapper>
      </Modal>

      <Heading>Keep going!</Heading>
    </S.SummaryWrapper>
  );
};

export default Summary;
