import styled from 'styled-components';
import {
  font_settings,
  color_gradient_button,
  default_style_button,
  boxShadow_lightTheme_button,
  boxShadow_darkTheme_button,
  outline_focus,
  color_gradient_button_InActive,
} from '@style/mixins';

export const Button = styled.button<{ $isLightTeam?: boolean; $isClickable?: boolean }>`
  ${font_settings(2.1, 'italic', 300)};
  ${default_style_button};
  ${({ $isClickable = true }) =>
    $isClickable ? `${color_gradient_button}` : `${color_gradient_button_InActive}`};
  ${({ $isLightTeam }) =>
    $isLightTeam ? `${boxShadow_lightTheme_button}` : `${boxShadow_darkTheme_button}`};
  color: ${({ theme }) => theme.white};
  ${outline_focus};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
