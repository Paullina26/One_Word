import * as S from './StyleHomePage';
import Background from '../../components/atoms/Background';

export const HomePage = () => {
  return (
    <>
      <Background />
      <S.WrapperHome>
        <S.WrapperOneWord>
          <S.TittleOnly>only</S.TittleOnly>
          <S.TittleOneWord>One Word</S.TittleOneWord>
          <S.TittleaDay>a day</S.TittleaDay>
        </S.WrapperOneWord>
        <S.WrapperContainer>
          <S.Tittle>Hello</S.Tittle>
          <S.Description>It’s a pleasure to see you here</S.Description>
          <S.Description>You don’t have much time?</S.Description>
          <S.Description>Great! One word a day it’s enough!</S.Description>
          <S.Description>Create your own database of words to learn.</S.Description>
          <S.Button>Try It</S.Button>
        </S.WrapperContainer>
      </S.WrapperHome>
    </>
  );
};

export default HomePage;
