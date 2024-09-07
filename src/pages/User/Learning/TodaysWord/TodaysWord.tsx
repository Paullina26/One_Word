import useTodayWord from './useTodaysWord';
import { useContext } from 'react';
import { GlobalContext } from '@utils/GlobalContext';

import * as S from './StyleTodaysWord';
import { Button } from '@components/Shared/Buttons/Button';
import NotificationInformation from '@components/Shared/Atoms/NotificationInformation';
import ButtonIcon from '@components/Shared/Buttons/ButtonIcon';
import ManagedIcon from '@assets/icon/helpers/ManagedIcon';
import RepeatWords from '@components/Repeat/RepeatWords/RepeatWords';
import { TitleSmall } from '@components/Shared/Atoms/Title';

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

  const { userSettings } = useContext(GlobalContext);
  const today = new Date().getDay();

  if (isError)
    return (
      <S.Wrapper>
        <TitleSmall>Today`s Word</TitleSmall>
        <S.WrapperBaseWord>
          <S.Word>Please add new words</S.Word>
        </S.WrapperBaseWord>
        <Button onClick={handleAddWordClick}>Add Word</Button>
        <NotificationInformation notificationText='Missing new words to learn, please click Add Words to add new words. Or change the status of learned words.' />
      </S.Wrapper>
    );

  if (userSettings && userSettings.isSummary && userSettings.summaryDay === today) {
    return <RepeatWords daysRepeat={7} />;
  }

  if (userSettings && userSettings.breakDay && userSettings.breakDay === today) {
    return (
      <S.Wrapper>
        <TitleSmall>Today`s Word</TitleSmall>
        <p>Today is your day off. Enjoy your rest!</p>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <TitleSmall>Today`s Word</TitleSmall>
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
            $margin='auto 5px 5px'
            $bottom='10px'
            $right='10px'
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
