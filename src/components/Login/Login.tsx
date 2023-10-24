import { FC, useContext, useState } from 'react';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import * as S from 'components/Login/StyleLogin';
import { WrapperForm } from 'components/Form/StyleForm';
import { headers, API } from 'API/api';
interface LoginProps {
  onClick: () => void;
}

export const Login: FC<LoginProps> = ({ onClick }) => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('wysłano');
    console.log(mail);
    console.log(password);
    event.preventDefault();
    setMail('');
    setPassword('');
  };

  return (
    <S.WrapperLogin>
      <S.LoginText onClick={onClick}>Login</S.LoginText>
      <WrapperForm>
        <form onSubmit={handleForm}>
          <Input
            $fontColorLabel='purpleDark'
            label='Email'
            id='e-mail_Login'
            type='email'
            value={mail}
            onChange={value => setMail(value)}
            autoComplete='email'
            placeholder='email'
            minlength={4}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
            $boxShadowLight='boxShadowWhite'
            $boxShadowDark='boxShadowGray'
          />
          <Input
            $fontColorLabel='purpleDark'
            label='Password'
            id='password_Login'
            type='password'
            value={password}
            onChange={value => setPassword(value)}
            autoComplete='password'
            placeholder='password'
            minlength={4}
            required
            $boxShadowLight='boxShadowWhite'
            $boxShadowDark='boxShadowGray'
          />
          <Submit
            id='submit_Registration'
            type='submit'
            value='Login'
            $boxShadowLight='boxShadowWhite'
            $boxShadowDark='boxShadowGray'
          />
        </form>
      </WrapperForm>
    </S.WrapperLogin>
  );
};

export default Login;
