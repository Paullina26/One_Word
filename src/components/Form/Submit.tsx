import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface SubmitProps {
  id: string;
  type: string;
  value: string;
  onClick: () => void;
}

export const SubmitStyle = styled.input`
  ${font(2.2, 'italic', 400)};
  color: ${({ theme }) => theme.white};
  display: block;
  border-radius: 20px;
  padding: 10px 25px;
  border: 0px;
  margin: 40px auto 20px auto;
  background-color: ${({ theme }) => theme.pink};
  box-shadow: -5px -5px 9px rgba(255, 255, 255, 0.6), 5px 5px 7px rgba(94, 104, 121, 0.4);
  cursor: pointer;
  /* :hover {
    color: ${({ theme }) => theme.white};
    background-color: ${({ theme }) => theme.pink};
  } */
`;

const Submit: FC<SubmitProps> = ({ id, type, value, onClick }) => {
  return <SubmitStyle id={id} type={type} value={value} onClick={onClick} />;
};

export default Submit;
