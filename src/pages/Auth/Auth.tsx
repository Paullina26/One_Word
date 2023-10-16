import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { useState } from 'react';
import Background from 'components/Background/Background';
import OneWord from 'components/Logo/OneWord';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';
import * as S from 'pages/Auth/StyleAuth';
import styled from 'styled-components';

export const WrapperAuth = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`;

export const Auth = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(prev => !prev);
    console.log(isActive);
  };

  return (
    <WrapperAuth>
      <Background />
      <S.WrapperLogo>
        <OneWord $fontColor='white' />
      </S.WrapperLogo>
      <Login onClick={handleActive} />
      <Registration onClick={handleActive} isActive={isActive} />
      {/* {isActive ? <Login onClick={handleActive} /> : <Registration onClick={handleActive} />} */}
    </WrapperAuth>
  );
};

export default Auth;
