import styled from 'styled-components';

import { font_settings } from '@style/mixins';
import { GlassWrapper } from '@components/Shared/containers/GlassWrapper';
import Input from '@components/Shared/Form/Input';
import { WrapperLearning } from '@components/Shared/containers/WrapperLearning';

export const Wrapper = styled(GlassWrapper)`
  margin: 20px auto;
  height: 500px;
  width: 500px;
  overflow-y: auto;
`;

export const WrapperButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

export const WrapperBaseWord = styled(WrapperLearning)``;

export const InputStyle = styled(Input)<{ $isCorrect: boolean | null }>`
  ${font_settings(2.2, 'normal', 400)}
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(232, 232, 232, 0.85);
  margin-bottom: 10px;
  position: relative;
  /* background-color: ${({ $isCorrect }) =>
    $isCorrect === null
      ? 'rgba(232, 232, 232, 0.75);'
      : $isCorrect
      ? 'rgba(204, 225, 198, 0.75);'
      : 'rgba(232, 203, 203, 0.75);'}; */
  border: 3px solid
    ${({ $isCorrect }) => ($isCorrect === null ? 'none' : $isCorrect ? 'green' : 'red')};
`;
