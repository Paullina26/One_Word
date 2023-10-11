import styled from 'styled-components';

export const Tittle = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.PurpleDark};
`;

export const Description = styled.p`
  margin: 5px 20px;
  text-align: left;
  font-size: 1.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.PurpleDark};
`;

const texts = [
  'It’s a pleasure to see you here',
  'You don’t have much time?',
  'Great! One word a day it’s enough!',
  'Create your own database of words to learn.',
];

const renderDescription = texts.map(text => <Description key={text.index}>{text}</Description>);

export const Welcome = () => {
  return (
    <>
      <Tittle>Hello</Tittle>
      {renderDescription}
    </>
  );
};

export default Welcome;
