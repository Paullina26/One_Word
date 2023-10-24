import { FC, useState, useContext } from 'react';
import * as S from 'components/Registration/StyleRegistration';
import { WrapperForm } from 'components/Form/StyleForm';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';
import { headers, API } from 'API/api';

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
      console.log('poprawne_hasła');
      try {
        await sendDataToDatabase(mail, password);
        console.log('wysłane do bazy danych');
      } catch (error) {
        console.log('BŁĄD_REJESTRACJI:', error);
      }
    } else {
      console.log('hasła_niepoprawne');
    }
  };

  const sendDataToDatabase = async (mail: string, password: string) => {
    const response = await fetch(API.registration, {
      method: 'POST',
      headers,
      body: JSON.stringify({ username: mail, password }),
    });
    cleaningValueInput();
  };

  const cleaningValueInput = () => {
    setMail('');
    setPassword('');
    setPasswordRepeating('');
  };

  return (
    <S.SingInWrapper $isHidden={isActive}>
      <S.RegistrationText onClick={onClick}>Sing In</S.RegistrationText>
      <WrapperForm>
        <form onSubmit={handleForm}>
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
          <Submit
            id='submit_Login'
            type='submit'
            value='Sing In'
            $boxShadowLight='boxShadowPurpleLight'
            $boxShadowDark='boxShadowPurpleDark'
          />
        </form>
      </WrapperForm>
    </S.SingInWrapper>
  );
};

export default Registration;
