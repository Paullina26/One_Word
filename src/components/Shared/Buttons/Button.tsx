import styled from 'styled-components';
import {
  font_settings,
  color_gradient_button,
  default_style_button,
  boxShadow_lightTheme_button,
  boxShadow_darkTheme_button,
  outline_focus,
} from 'style/mixins';

export const Button = styled.button<{ $isLightTeam?: boolean }>`
  ${font_settings(2.2, 'italic', 300)};
  ${default_style_button};
  ${color_gradient_button};
  ${({ $isLightTeam }) =>
    $isLightTeam ? `${boxShadow_lightTheme_button}` : `${boxShadow_darkTheme_button}`};
  color: ${({ theme }) => theme.white};
  ${outline_focus};
`;
