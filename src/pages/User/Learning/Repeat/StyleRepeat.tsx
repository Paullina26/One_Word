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

export const InputStyle = styled(Input)`
  ${font_settings(2.2, 'normal', 400)}
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  text-align: center;
  background-color: rgba(232, 232, 232, 0.75);
  margin-bottom: 20px;
  position: relative;
`;
