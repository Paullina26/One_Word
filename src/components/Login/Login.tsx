import styled from 'styled-components';
import { font } from 'style/mixins';

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
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadowBlack};
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
  box-shadow: 0 4px 30px ${({ theme }) => theme.shadowBlack};
  border-radius: 50% 50% 0 0;
  padding: 20px;
`;

export const LoginText = styled.div`
  padding: 20px;
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.purpleDark};
`;

export const Login = () => {
  return (
    <WrapperLogin>
      <LoginText>Login</LoginText>
      <div>
        <form>
          <input type='text' />
          <input type='text' />
          <input type='submit' />
        </form>
      </div>
      <SingIn>Sing In</SingIn>
    </WrapperLogin>
  );
};

export default Login;
