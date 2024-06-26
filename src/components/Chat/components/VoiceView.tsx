import { FC, useState } from 'react';

import * as S from '../StyleChat';
import VoiceAnimation from './VoiceAnimationt';
import Microphone from './Buttons/Micophone';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import VisibleMessages from './Buttons/VisibleMessage';
import { FinishConversationButton } from './Buttons/FinishConversation';

interface VoiceViewProps {}

const VoiceView: FC<VoiceViewProps> = () => {
  return (
    <S.VoiceViewWrapper>
      <S.VisibleMessagesWrapper>
        <FinishConversationButton />
        <VisibleMessages />
      </S.VisibleMessagesWrapper>
      <S.VoiceAnimationWrapper>
        <GlassWrapper>
          <VoiceAnimation />
        </GlassWrapper>
      </S.VoiceAnimationWrapper>
      <Microphone big />
    </S.VoiceViewWrapper>
  );
};

export default VoiceView;
