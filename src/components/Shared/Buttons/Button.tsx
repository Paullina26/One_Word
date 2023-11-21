import styled from 'styled-components';
import {
  font_settings,
  boxShadow_button,
  color_gradient_button,
  default_style_button,
} from 'style/mixins';

export const Button = styled.button`
  ${font_settings(2.2, 'italic', 300)};
  ${default_style_button};
  ${color_gradient_button};
  ${boxShadow_button};
  color: ${({ theme }) => theme.white};
`;
