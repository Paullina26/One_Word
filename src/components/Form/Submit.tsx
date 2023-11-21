import { FC } from 'react';
import styled from 'styled-components';
import { font_settings, color_gradient_button, default_style_button } from 'style/mixins';

interface SubmitProps {
  id: string;
  type: string;
  value: string;
  $boxShadowLight: string;
  $boxShadowDark: string;
  // isLightTeam?:boolean
}

export const SubmitStyle = styled.input<{ $boxShadowLight: string; $boxShadowDark: string }>`
  ${font_settings(2.2, 'italic', 300)};
  ${color_gradient_button};
  ${default_style_button};
  color: ${({ theme }) => theme.white};
  display: block;
  cursor: pointer;
  border: 1px solid rgba(175, 175, 220, 0.2);
  box-shadow: -3px -3px 5px ${({ theme, $boxShadowLight }) => theme[$boxShadowLight]},
    3px 3px 5px ${({ theme, $boxShadowDark }) => theme[$boxShadowDark]},
    inset 2px 2px 2px rgba(255, 255, 255, 0.25), inset -2px -2px 2px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: -3px -3px 5px ${({ theme, $boxShadowLight }) => theme[$boxShadowLight]},
      3px 3px 5px ${({ theme, $boxShadowDark }) => theme[$boxShadowDark]},
      inset 3px 3px 5px rgba(0, 0, 0, 0.35), inset -3px -3px 5px rgba(255, 255, 255, 0.15);
  }
`;

const Submit: FC<SubmitProps> = ({ id, type, value, $boxShadowLight, $boxShadowDark }) => {
  return (
    <SubmitStyle
      id={id}
      type={type}
      value={value}
      $boxShadowLight={$boxShadowLight}
      $boxShadowDark={$boxShadowDark}
    />
  );
};

export default Submit;
