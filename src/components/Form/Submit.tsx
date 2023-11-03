import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface SubmitProps {
  id: string;
  type: string;
  value: string;
  $boxShadowLight: string;
  $boxShadowDark: string;
}

export const SubmitStyle = styled.input<{ $boxShadowLight: string; $boxShadowDark: string }>`
  ${font(2.2, 'italic', 400)};
  color: ${({ theme }) => theme.white};
  display: block;
  border-radius: 20px;
  padding: 10px 35px;
  border: 0px;
  margin: 40px auto 20px auto;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.buttonPink} 0%,
    ${({ theme }) => theme.buttonPinkLight} 100%
  );
  box-shadow: -5px -5px 10px ${({ theme, $boxShadowLight }) => theme[$boxShadowLight]},
    5px 5px 10px ${({ theme, $boxShadowDark }) => theme[$boxShadowDark]};
  cursor: pointer;
  /* :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.pink};
  } */
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
