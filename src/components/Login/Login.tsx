import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'utils/GlobalContext';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastColored } from 'helpers/StyleToastify';
import { headers, API } from 'API/api';
import * as S from 'components/Login/StyleLogin';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import { WrapperForm } from 'components/Form/StyleForm';

interface LoginProps {
  onClick: () => void;
}

export const Login: FC<LoginProps> = ({ onClick }) => {
  const { isLoginUser, setIsLoginUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUserToBase(mail, password);
    } catch (error) {
      console.log('LOGIN:', Error);
      toast.error(`${error}`, toastColored as ToastOptions<{}>);
    } finally {
      cleaningValueInput();
    }
  };

  const loginUserToBase = async (mail: string, password: string) => {
    const toastAlerts = {
      pending: 'Waiting',
      success: 'Login is success. 👌',
      error: 'An error occurred while login. 🤯',
    };
    const requestDetails = {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: mail, password }),
    };
    const response = await toast.promise(fetch(API.login, requestDetails), toastAlerts);
    const { status } = response;
    console.log('STATUS_LOGIN', status);
    if (status === 200) setIsLoginUser(true);
    navigate('/user');
    console.log('RESPONSE_LOGIN', response);
    const json = await response.json();
    console.log('JSON_LOGIN', json);
    console.log('JSON_LOGIN_TOKEN', json.token);
    localStorage.setItem('token', json.token);
  };

  const cleaningValueInput = () => {
    setMail('');
    setPassword('');
  };

  return (
    <S.WrapperLogin>
      <S.LoginText>Login</S.LoginText>
      <WrapperForm>
        <form onSubmit={handleFormLogin}>
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
      <S.LoginText onClick={onClick}>Registration</S.LoginText>
    </S.WrapperLogin>
  );
};

export default Login;
