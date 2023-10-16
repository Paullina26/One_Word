import { FC } from 'react';
import * as S from 'components/Login/StyleLogin';
import styled, { keyframes } from 'styled-components';
import { font } from 'style/mixins';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';

interface RegistrationProps {
  onClick: () => void;
  isActive: boolean;
}

export const SingIn = styled.div`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70vh;
  bottom: 0;
  position: absolute;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7);
  border-radius: 50px 50px 0 0;
  border: none;
  padding: 20px;
`;

export const RegistrationText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
`;

const showRegistration = keyframes`
  from {
    height: 20vh;
  }
  to {
    height: 70vh;
  }
`;

const hideRegistration = keyframes`
  from {
    height: 70vh;
  }
  to {
    height: 20vh;
  }
`;

export const SingInWrapper = styled.div<{ is_hidden: boolean }>`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
  height: 70vh;
  bottom: 0;
  position: absolute;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  box-shadow: -2px -2px 15px rgba(46, 39, 86, 0.7);
  border-radius: 50px 50px 0 0;
  border: none;
  padding: 20px;
  /* animation: ${showRegistration} 1s ease-in-out; */
  animation: ${({ is_hidden }) => (is_hidden ? hideRegistration : showRegistration)} 1s ease-in-out;
  /* transform: rotateY('angle'); */
`;

const handleForm = () => {
  console.log('wysłano');
};

export const Registration: FC<RegistrationProps> = ({ onClick, isActive }) => {
  return (
    <S.WrapperLogin>
      <S.LoginText onClick={onClick}>Login</S.LoginText>
      <SingInWrapper is_hidden={isActive}>
        <RegistrationText>Sing In</RegistrationText>
        <S.WrapperForm>
          <form onSubmit={handleForm}>
            <Input
              font_color_label='white'
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
              font_color_label='white'
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
              font_color_label='white'
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
        </S.WrapperForm>
      </SingInWrapper>
    </S.WrapperLogin>
  );
};

export default Registration;
