import styled from 'styled-components';

export const TittleOneWord = styled.h1`
  font-size: 5rem;
  font-weight: 900;
  font-style: italic;
  color: ${({ theme }) => theme.PurpleDark};
`;

export const OneWord = () => {
  return <TittleOneWord>One Word</TittleOneWord>;
};

export default OneWord;
