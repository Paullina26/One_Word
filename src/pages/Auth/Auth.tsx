import { FC, useState } from 'react';
import Background from 'components/Background/Background';
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
        <S.WrapperElementRegistrationLogin>
          <Login toggleAuthForm={handleActive} />
          <Registration toggleAuthForm={handleActive} isActive={isActive} />
        </S.WrapperElementRegistrationLogin>
      </S.WrapperAuth>
    </>
  );
};

export default Auth;
