import { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'utils/GlobalContext';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastColored } from 'helpers/StyleToastify';
import * as S from 'components/Login/StyleLogin';
import Input from 'components/Shared/Form/Input';
import Submit from 'components/Shared/Form/Submit';
import { headers, API_Endpoints } from 'API/api';
import { WrapperInputs, WrapperForm } from 'components/Shared/Form/StyleForm';
import { Button } from 'components/Shared/Buttons/Button';
import { inputNameElement } from 'helpers/mixins';
import { routes } from 'data/routes';

interface LoginProps {
  toggleAuthForm: () => void;
}
export const Login: FC<LoginProps> = ({ toggleAuthForm }) => {
  const { setIsAiUser, setIsLoginUser } = useContext(GlobalContext);
  const navigate = useNavigate();
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleFormLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await loginUserToBase(mail, password);
    } catch (error) {
      toast.error(`${error}`, toastColored as ToastOptions<{}>);
    } finally {
      cleaningValueInput();
    }
  };

  const loginUserToBase = async (mail: string, password: string) => {
    const toastAlerts = {
      pending: 'Waiting',
      error: 'An error occurred while login. 🤯',
    };
    const requestDetails = {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: mail, password }),
    };
    const response = await toast.promise(fetch(API_Endpoints.login, requestDetails), toastAlerts);
    const { status } = response;

    if (status === 200) {
      setIsLoginUser(true);
      navigate(`${routes.LEARN_TODAYS_WORD.to}`);
      const json = await response.json();
      localStorage.setItem('token', json.token);
      if (json.isAi === 'true') setIsAiUser(true);
      toast.success('Login is success. 👌', toastColored as ToastOptions<{}>);
    } else if (status === 401) {
      toast.error('Wrong password or email', toastColored as ToastOptions<{}>);
    } else if (status === 404) {
      toast.error('User not found', toastColored as ToastOptions<{}>);
    } else {
      toast.error('An error occurred while login. 🤯', toastColored as ToastOptions<{}>);
    }
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
          <WrapperInputs>
            <Input
              $fontColorLabel='purpleDark'
              $isLightTeam={true}
              {...inputNameElement('email_Login', 'email', 'Email')}
              onChange={value => setMail(value)}
              value={mail}
              minlength={4}
              pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
              required
            />
            <Input
              $fontColorLabel='purpleDark'
              $isLightTeam={true}
              {...inputNameElement('password_Login', 'password', 'Password')}
              onChange={value => setPassword(value)}
              value={password}
              minlength={4}
              required
            />
          </WrapperInputs>
          <Submit $isLightTeam={true} value='Login' id='submit_Login' />
        </form>
      </WrapperForm>
      <Button onClick={toggleAuthForm} $isLightTeam={true} type='button'>
        Registration
      </Button>
      <S.LoginTestDataDisplay>
        <S.TittleLoginData>Login Test Data</S.TittleLoginData>
        <p>test@test.test</p>
        <p>test</p>
      </S.LoginTestDataDisplay>
    </S.WrapperLogin>
  );
};

export default Login;
