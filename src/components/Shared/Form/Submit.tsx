import { FC } from 'react';
import styled from 'styled-components';
import {
  font_settings,
  color_gradient_button,
  default_style_button,
  boxShadow_darkTheme_button,
  boxShadow_lightTheme_button,
  outline_focus,
} from 'style/mixins';

interface SubmitProps {
  id: string;
  value: string;
  $isLightTeam: boolean;
}

export const SubmitStyle = styled.input<{
  $isLightTeam: boolean;
}>`
  ${font_settings(2.2, 'italic', 300)};
  ${color_gradient_button};
  ${default_style_button};
  color: ${({ theme }) => theme.white};
  display: block;
  cursor: pointer;
  ${({ $isLightTeam }) =>
    $isLightTeam ? `${boxShadow_lightTheme_button}` : `${boxShadow_darkTheme_button}`};
  ${outline_focus};
`;

const Submit: FC<SubmitProps> = ({ id, value, $isLightTeam }) => {
  return <SubmitStyle id={id} type='submit' value={value} $isLightTeam={$isLightTeam} />;
};

export default Submit;
