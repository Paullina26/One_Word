import styled from 'styled-components';
import { font_settings } from 'style/mixins';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import { Button } from 'components/Shared/Buttons/Button';

export const Tittle = styled.p`
  ${font_settings(2.6, 'normal', 600)}
  margin: 15px auto;
  color: ${({ theme }) => theme.purpleDark};
`;

export const Wrapper = styled(GlassWrapper)`
  height: 550px;
`;

export const WrapperBaseWord = styled.div`
  ${font_settings(1.2, 'normal', 300)}
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px ${({ theme }) => theme.purpleDark};
  border-radius: 10px;
  height: 150px;
  text-align: center;
  background-color: rgba(232, 232, 232, 0.75);
  margin-bottom: 20px;
`;

export const WrapperWord = styled.div`
  ${font_settings(1.2, 'normal', 300)}
  display: flex;
  align-items: center;
  justify-content: center;
  border: dashed 2px ${({ theme }) => theme.purpleDark};
  border-radius: 10px;
  height: 150px;
  text-align: center;
  background-color: rgba(232, 232, 232, 0.75);
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
