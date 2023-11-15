import { useNavigate } from 'react-router-dom';
import { FC, useState, useEffect } from 'react';
import Background from 'components/Background/Background';
import OneWord from 'components/Logo/OneWord';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';
import * as S from 'pages/Auth/StyleAuth';

export const Auth: FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <>
      <Background />
      <S.WrapperAuth>
        <S.WrapperLogo>
          <OneWord $fontColor='rgb(46, 40, 85)' />
        </S.WrapperLogo>
        <S.WrapperElementRegistrationLogin>
          <Login onClick={handleActive} />
          <Registration onClick={handleActive} isActive={isActive} />
        </S.WrapperElementRegistrationLogin>
      </S.WrapperAuth>
    </>
  );
};

export default Auth;
