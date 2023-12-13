import styled from 'styled-components';

export const DescriptionWrapper = styled.div`
  margin: 20px auto;
`;

export const Tittle = styled.p`
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 2.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.purpleDark};
`;

export const Description = styled.p`
  margin: 5px 20px;
  text-align: left;
  font-size: 1.8rem;
  font-style: italic;
  color: ${({ theme }) => theme.purpleDark};
`;

const texts = [
  'It’s a pleasure to see you here',
  'You don’t have much time?',
  'Great! One word a day it’s enough!',
  'Create your own database of words to learn.',
];

const renderDescription = texts.map(text => <Description key={text}>{text}</Description>);
export const Welcome = () => {
  return (
    <>
      <Tittle>Hello</Tittle>
      <DescriptionWrapper>{renderDescription}</DescriptionWrapper>
    </>
  );
};

export default Welcome;
