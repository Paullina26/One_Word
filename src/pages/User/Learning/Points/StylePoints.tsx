import styled from 'styled-components';
import { TitleSmall } from '@components/Shared/Atoms/Title';
import { font_settings } from '@style/mixins';
import { theme } from '@style/theme';

export const Wrapper = styled.div`
  width: 100%;
  text-align: start;
  padding: 0 20px;
`;

export const WrapperPoints = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  padding-top: 20px;
`;

export const Title = styled(TitleSmall)`
  ${font_settings(2, 'normal', 600)}
  margin: 0;
  padding-bottom: 5px;
`;

export const Points = styled.p`
  ${font_settings(1.8, 'normal', 600)}
  color: ${theme.purpleDark};
  padding-bottom: 2px;
  margin: 0;
`;
