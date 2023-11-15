import { FC } from 'react';
import styled from 'styled-components';
import { font, GradientCirclePink } from 'style/mixins';

interface SubmitProps {
  id: string;
  type: string;
  value: string;
  $boxShadowLight: string;
  $boxShadowDark: string;
}

export const SubmitStyle = styled.input<{ $boxShadowLight: string; $boxShadowDark: string }>`
  ${font(2.2, 'italic', 400)};
  ${GradientCirclePink};
  color: ${({ theme }) => theme.white};
  display: block;
  border-radius: 20px;
  padding: 10px 35px;
  border: 0px;
  margin: 40px auto 20px auto;
  cursor: pointer;
  border: 1px solid rgba(175, 175, 220, 0.2);
  box-shadow: -3px -3px 5px ${({ theme, $boxShadowLight }) => theme[$boxShadowLight]},
    3px 3px 5px ${({ theme, $boxShadowDark }) => theme[$boxShadowDark]},
    inset 5px 10px 10px rgba(255, 255, 255, 0.25), inset -10px -10px 10px rgba(0, 0, 0, 0.25);
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
