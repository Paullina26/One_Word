import { FC } from 'react';
import * as S from 'components/Registration/StyleRegistration';
import { WrapperForm } from 'components/Form/StyleForm';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';

interface RegistrationProps {
  onClick: () => void;
  isActive: boolean;
}

export const Registration: FC<RegistrationProps> = ({ onClick, isActive }) => {
  const handleForm = () => {
    console.log('wysłano');
  };

  return (
    <S.SingInWrapper $isHidden={isActive}>
      <S.RegistrationText onClick={onClick}>Sing In</S.RegistrationText>
      <WrapperForm>
        <form onSubmit={handleForm}>
          <Input
            $fontColorLabel='white'
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
            $fontColorLabel='white'
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
          <Input
            $fontColorLabel='white'
            // label={nameElement.email}
            label='Password'
            id='password_Registration_Repeating'
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
          <Submit id='submit_Login' type='submit' value='Sing In' />
        </form>
      </WrapperForm>
    </S.SingInWrapper>
  );
};

export default Registration;
