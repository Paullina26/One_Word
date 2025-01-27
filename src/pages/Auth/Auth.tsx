import { FC, useState } from 'react';
import Login from '@components/Login/Login';
import Registration from '@components/Registration/Registration';

import * as S from './StyleAuth';

export const Auth: FC = () => {
  const [isActive, setIsActive] = useState(true);

  const handleActive = () => {
    setIsActive(prev => !prev);
  };

  return (
    <S.WrapperAuth>
      <S.WrapperElementRegistrationLogin>
        <Login toggleAuthForm={handleActive} />
        <Registration toggleAuthForm={handleActive} isActive={isActive} />
      </S.WrapperElementRegistrationLogin>
    </S.WrapperAuth>
  );
};

export default Auth;
