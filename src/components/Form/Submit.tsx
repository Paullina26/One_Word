import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface SubmitProps {
  id: string;
  type: string;
  value: string;
}

export const SubmitStyle = styled.input`
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
  box-shadow: -5px -5px 10px ${({ theme }) => theme.boxShadowWhite},
    5px 5px 10px ${({ theme }) => theme.boxShadowGray};
  cursor: pointer;
  /* :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.pink};
  } */
`;

const Submit: FC<SubmitProps> = ({ id, type, value }) => {
  return <SubmitStyle id={id} type={type} value={value} />;
};

export default Submit;
