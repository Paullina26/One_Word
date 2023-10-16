import { FC } from 'react';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import * as S from 'components/Login/StyleLogin';

interface LoginProps {
  onClick: () => void;
}

export const Login: FC<LoginProps> = ({ onClick }) => {
  const handleForm = () => {
    console.log('wysłano');
  };

  return (
    <S.WrapperLogin>
      <S.LoginText>Login</S.LoginText>
      <S.WrapperForm>
        <form onSubmit={handleForm}>
          <Input
            $fontColorLabel='purpleDark'
            // label={nameElement.email}
            label='Email'
            id='e-mail_Registration'
            type='email'
            // value={mail}
            value=''
            // onChange={e => setMail(e.target.value)}
            onChange={e => console.log(e)}
            autoComplete='email'
            // placeholder={nameElement.email}
            placeholder='email'
            minlength={4}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
          />
          <Input
            $fontColorLabel='purpleDark'
            // label={nameElement.email}
            label='Password'
            id='password_Registration'
            type='password'
            // value={mail}
            value=''
            // onChange={e => setMail(e.target.value)}
            onChange={e => console.log(e)}
            autoComplete='password'
            // placeholder={nameElement.email}
            placeholder='password'
            minlength={4}
            required
          />
          <Submit id='submit_Registration' type='submit' value='Login' />
        </form>
      </S.WrapperForm>
      <S.SingIn onClick={onClick}>Sing In</S.SingIn>
    </S.WrapperLogin>
  );
};

export default Login;
