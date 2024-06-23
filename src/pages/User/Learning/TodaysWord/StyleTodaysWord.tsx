import styled from 'styled-components';
import { font_settings } from 'style/mixins';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import { Button } from 'components/Shared/Buttons/Button';
import { WrapperLearning } from 'components/Shared/containers/WrapperLearning';

export const Tittle = styled.p`
  ${font_settings(2.6, 'normal', 600)}
  margin: 15px auto;
  color: ${({ theme }) => theme.purpleDark};
`;

export const Wrapper = styled(GlassWrapper)`
  height: 550px;
`;

export const WrapperBaseWord = styled(WrapperLearning)``;

export const WrapperWord = styled(WrapperLearning)``;

export const PositionedButton = styled(Button)<{ $positionTop?: boolean }>`
  position: absolute;
  bottom: ${({ $positionTop }) => ($positionTop ? 'auto' : '10px')};
  top: ${({ $positionTop }) => ($positionTop ? '10px' : 'auto')};
  right: 10px;
  width: auto;
  margin: 0;
  white-space: nowrap;
  cursor: pointer;
`;

export const Word = styled.p`
  ${font_settings(1.8, 'normal', 400)}
  padding: 10px;
  margin: auto;
`;

export const WrapperButtons = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px auto;
`;
