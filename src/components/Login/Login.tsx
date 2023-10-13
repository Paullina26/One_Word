import styled from 'styled-components';
import { font } from 'style/mixins';
import Input from 'components/Form/Input';
import Submit from 'components/Form/Submit';

export const WrapperLogin = styled.div`
  position: relative;
  top: 20vh;
  text-align: center;
  width: 100vw;
  height: 70vh;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleLight} 0%,
    ${({ theme }) => theme.gradientPurpleLightOne} 25%,
    ${({ theme }) => theme.gradientPurpleLightTwo} 50%,
    ${({ theme }) => theme.gradientPurpleLightThere} 75%,
    ${({ theme }) => theme.gradientPurpleLightFour}100%
  );
  border-radius: 40px 40px 0 0;
  box-shadow: 0 4px 30px -50px ${({ theme }) => theme.shadowBlack};
  backdrop-filter: blur(5px);
`;

export const SingIn = styled.div`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  width: 100%;
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
  border-radius: 50% 50% 0 0;
  border: none;
  padding: 20px;
`;

export const LoginText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.purpleDark};
`;

export const WrapperForm = styled.div`
  /* background-color: #478787; */
`;

const handleForm = () => {
  console.log('wysłano');
};

export const Login = () => {
  return (
    <WrapperLogin>
      <LoginText>Login</LoginText>
      <WrapperForm>
        <form>
          <Input
            // label={nameElement.email}
            label='Email'
            id='e-mail_Login'
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
            // label={nameElement.email}
            label='Password'
            id='password_Login'
            type='password'
            // value={mail}
            value=''
            // onChange={e => setMail(e.target.value)}
            onChange={e => console.log(e)}
            autoComplete='password'
            // placeholder={nameElement.email}
            placeholder='password'
            minlength={4}
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
            required
          />
          <Submit id='submit_Login' type='submit' value='Login' onClick={handleForm} />
        </form>
      </WrapperForm>
      <SingIn>Sing In</SingIn>
    </WrapperLogin>
  );
};

export default Login;
