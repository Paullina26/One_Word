import { FC, useState } from 'react';
import { toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastColored } from 'helpers/StyleToastify';
import * as S from 'components/Registration/StyleRegistration';
import { WrapperForm, WrapperInputs } from 'components/Shared/Form/StyleForm';
import Input from 'components/Shared/Form/Input';
import Submit from 'components/Shared/Form/Submit';
import { headers, API } from 'API/api';
import { Button } from 'components/Shared/Buttons/Button';
import { inputNameElement } from 'helpers/mixins';

interface RegistrationProps {
  toggleAuthForm: () => void;
  isActive: boolean;
}
export const Registration: FC<RegistrationProps> = ({ toggleAuthForm, isActive }) => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeating, setPasswordRepeating] = useState<string>('');

  const handleRegistrationUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordRepeating) {
      try {
        await sendDataUserToDatabase(mail, password);
      } catch (error) {
        toast.error(`${error}`, toastColored as ToastOptions<{}>);
      }
    } else {
      toast.warn('Wrong Password', toastColored as ToastOptions<{}>);
    }
  };

  const sendDataUserToDatabase = async (mail: string, password: string) => {
    const response = await toast.promise(
      fetch(API.registration, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username: mail, password }),
      }),
      {
        pending: 'Waiting',
        error: 'An error occurred while registering. 🤯',
      }
    );
    const json = await response.json();
    const { status } = response;
    if (status === 200) {
      toast.success('Register is success. 👌', toastColored as ToastOptions<{}>);
      toggleAuthForm();
    } else if (status === 400 || status === 500) {
      toast.error(`${json.message}`, toastColored as ToastOptions<{}>);
    } else {
      toast.error('An error occurred while registering. 🤯', toastColored as ToastOptions<{}>);
    }
    cleaningValueInput();
  };

  const cleaningValueInput = () => {
    setMail('');
    setPassword('');
    setPasswordRepeating('');
  };

  return (
    <>
      <S.SingInWrapper $isActive={isActive}>
        <S.RegistrationText>Registration</S.RegistrationText>
        <WrapperForm>
          <form onSubmit={handleRegistrationUser}>
            <WrapperInputs>
              <Input
                $fontColorLabel='white'
                $isLightTeam={false}
                {...inputNameElement('email_Registration', 'email', 'Email')}
                value={mail}
                onChange={value => setMail(value)}
                minlength={4}
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                required
              />
              <Input
                $fontColorLabel='white'
                $isLightTeam={false}
                {...inputNameElement('password_Registration', 'password', 'Password')}
                value={password}
                onChange={value => setPassword(value)}
                minlength={4}
                required
              />
              <Input
                $fontColorLabel='white'
                $isLightTeam={false}
                {...inputNameElement(
                  'password_Registration_Repeating',
                  'password',
                  'Password Repeating'
                )}
                value={passwordRepeating}
                onChange={value => setPasswordRepeating(value)}
                minlength={4}
                required
              />
            </WrapperInputs>
            <Submit $isLightTeam={false} value='Registration' id='submit_Registration' />
          </form>
        </WrapperForm>
        <Button onClick={toggleAuthForm} $isLightTeam={false}>
          Login
        </Button>
      </S.SingInWrapper>
    </>
  );
};

export default Registration;
