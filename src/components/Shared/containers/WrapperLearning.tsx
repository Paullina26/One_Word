import styled from 'styled-components';
import {
  font_settings,
  boxShadow_darkTheme_input,
  boxShadow_lightTheme_input,
  outline_focus,
} from 'style/mixins';

export const WrapperLearning = styled.div`
  ${font_settings(2.2, 'normal', 400)}
  ${outline_focus};
  ${boxShadow_darkTheme_input};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 150px;
  text-align: center;
  background-color: rgba(232, 232, 232, 0.75);
  margin-bottom: 20px;
  position: relative;
`;
