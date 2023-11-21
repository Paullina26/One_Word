import { FC, useState, useContext } from 'react';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toastColored } from 'helpers/StyleToastify';
import * as S from 'components/Registration/StyleRegistration';
import { WrapperForm, WrapperInputs } from 'components/Form/StyleForm';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import { headers, API } from 'API/api';
import { Button } from 'components/Shared/Buttons/Button';

interface RegistrationProps {
  onClick: () => void;
  isActive: boolean;
}

export const Registration: FC<RegistrationProps> = ({ onClick, isActive }) => {
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordRepeating, setPasswordRepeating] = useState<string>('');

  const handleForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === passwordRepeating) {
      try {
        await sendDataToDatabase(mail, password);
      } catch (error) {
        console.log('BŁĄD_REJESTRACJI:', error);
        toast.error(`${error}`, toastColored as ToastOptions<{}>);
      }
    } else {
      toast.warn('Wrong Password', toastColored as ToastOptions<{}>);
    }
  };

  const sendDataToDatabase = async (mail: string, password: string) => {
    const response = await toast.promise(
      fetch(API.registration, {
        method: 'POST',
        headers,
        body: JSON.stringify({ username: mail, password }),
      }),
      {
        pending: 'Waiting',
        success: 'Register is success. 👌',
        error: 'An error occurred while registering. 🤯',
      }
    );
    cleaningValueInput();
  };

  const cleaningValueInput = () => {
    setMail('');
    setPassword('');
    setPasswordRepeating('');
  };

  return (
    <>
      <ToastContainer />
      <S.SingInWrapper $isHidden={isActive}>
        <S.RegistrationText>Registration</S.RegistrationText>
        <WrapperForm>
          <form onSubmit={handleForm}>
            <WrapperInputs>
              <Input
                $fontColorLabel='white'
                $boxShadowLight='boxShadowPurpleLight'
                $boxShadowDark='boxShadowPurpleDark'
                label='Email'
                id='e-mail_Registration'
                type='email'
                value={mail}
                onChange={value => setMail(value)}
                autoComplete='email'
                placeholder='email'
                minlength={4}
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
                required
              />
              <Input
                $fontColorLabel='white'
                label='Password'
                id='password_Registration'
                type='password'
                value={password}
                onChange={value => setPassword(value)}
                autoComplete='password'
                // placeholder={nameElement.email}
                placeholder='password'
                minlength={4}
                required
                $boxShadowLight='boxShadowPurpleLight'
                $boxShadowDark='boxShadowPurpleDark'
              />
              <Input
                $fontColorLabel='white'
                $boxShadowLight='boxShadowPurpleLight'
                $boxShadowDark='boxShadowPurpleDark'
                label='Password Repeating'
                id='password_Registration_Repeating'
                type='password'
                value={passwordRepeating}
                onChange={value => setPasswordRepeating(value)}
                autoComplete='password'
                placeholder='password'
                minlength={4}
                required
              />
            </WrapperInputs>
            <Submit
              id='submit_Login'
              type='submit'
              value='Registration'
              $boxShadowLight='boxShadowPurpleLight'
              $boxShadowDark='boxShadowPurpleDark'
            />
          </form>
        </WrapperForm>
        <Button onClick={onClick}>Login</Button>
      </S.SingInWrapper>
    </>
  );
};

export default Registration;
