import useTodayWord from './useTodaysWord';

import * as S from './StyleTodaysWord';
import { Button } from 'components/Shared/Buttons/Button';
import NotificationInformation from 'components/Shared/Atoms/NotificationInformation';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';
import ManagedIcon from 'assets/icon/helpers/ManagedIcon';

const TodayWord = () => {
  const {
    baseWord,
    transWord,
    isError,
    isShowWord,
    isSpeaking,
    handleAddWordClick,
    handleShowWord,
    handleSpeak,
    handleLearnedWord,
    goToChat,
    isAi,
  } = useTodayWord();

  if (isError)
    return (
      <S.Wrapper>
        <S.Tittle>Today`s Word</S.Tittle>
        <S.WrapperBaseWord>
          <S.Word>Please add new words</S.Word>
        </S.WrapperBaseWord>
        <Button onClick={handleAddWordClick}>Add Word</Button>
        <NotificationInformation notificationText='Missing new words to learn, please click Add Words to add new words. Or change the status of learned words.' />
      </S.Wrapper>
    );

  return (
    <S.Wrapper>
      <S.Tittle>Today`s Word</S.Tittle>
      <S.WrapperBaseWord>
        <S.Word>{baseWord}</S.Word>
        {isAi && (
          <S.PositionedButton onClick={goToChat} $positionTop>
            <ManagedIcon name='chat' />
          </S.PositionedButton>
        )}
      </S.WrapperBaseWord>
      <S.WrapperWord>
        {isShowWord ? (
          <S.Word>{transWord}</S.Word>
        ) : (
          <Button onClick={handleShowWord}>Show Word</Button>
        )}
        {isShowWord && (
          <ButtonIcon
            nameIcon='speaker'
            type='button'
            $positionAbsolute
            margin='auto 5px 5px'
            bottom='10px'
            right='10px'
            onClick={handleSpeak}
            disabled={isSpeaking}
          />
        )}
      </S.WrapperWord>
      <S.WrapperButtons>
        <Button onClick={handleLearnedWord}>Learned</Button>
        <NotificationInformation notificationText='If you click this button, the word will be learned and will not appear again.' />
      </S.WrapperButtons>
    </S.Wrapper>
  );
};

export default TodayWord;
