import { Button } from '@components/Shared/Buttons/Button';
import { GlassWrapper } from '@components/Shared/containers/GlassWrapper';
import styled from 'styled-components';

export const ChatWrapper = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding-bottom: 50px;
  padding-top: 50px;
`;

export const Messages = styled.div`
  width: 100%;
  flex-grow: 1;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  font-size: 1.8rem;
`;

export const MessageWrapper = styled(GlassWrapper)<{ $role?: string }>`
  filter: ${({ $role }) => $role === 'user' && 'brightness(90%)'};
  border: ${({ $role, theme }) => $role !== 'user' && `1px solid ${theme.pink}`};
  margin: 5px 0;
  width: 90%;
  margin-left: ${({ $role }) => $role !== 'user' && 'auto'};
  margin-right: ${({ $role }) => $role === 'user' && 'auto'};
`;

export const Interface = styled.form`
  width: 100%;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  padding: 30px 20px;
  max-width: 800px;
  margin: 0 auto;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TextareaWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 8px;
`;

export const VoiceViewWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const VoiceAnimationWrapper = styled.div`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

export const VisibleMessagesWrapper = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
  transform: scale(1.5);
`;

export const LoadingWrapper = styled.div`
  & > div {
    height: 70px;
  }
  svg {
    height: 80px;
  }
`;

// summary
export const SummaryWrapper = styled(GlassWrapper)`
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 50px;
  width: 800px;
  max-width: 100%;
  height: 80vh;
  max-height: 80vh;
  transform: translate(-50%, -50%);
  text-align: left;
`;

export const SummaryWordToAdd = styled.div`
  div {
    flex-grow: 1;
  }
  display: flex;
  width: 100%;
`;

export const SummaryAddButton = styled(Button)`
  margin-left: auto;
`;

export const Description = styled.p`
  margin-bottom: 50px;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const SummaryList = styled.div`
  height: calc(100% - 290px);
`;
