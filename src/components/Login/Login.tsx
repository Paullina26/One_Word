import styled from 'styled-components';
import { font } from 'style/mixins';

export const WrapperLogin = styled.div`
  text-align: center;
  width: 100vw;
  min-height: 40vh;
  height: 80vh;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.glassDarkWhiteLogin},
    ${({ theme }) => theme.glassMediumWhiteLogin},
    ${({ theme }) => theme.glassLightWhiteLogin},
    ${({ theme }) => theme.glassWhiteLogin},
    ${({ theme }) => theme.glassLightWhiteLogin},
    ${({ theme }) => theme.glassMediumWhiteLogin},
    ${({ theme }) => theme.glassDarkWhiteLogin}
  );
  border-radius: 20px 20px 0 0;
  box-shadow: 0 4px 30px ${({ theme }) => theme.glassShadowBlack};
  backdrop-filter: blur(5px);
`;

export const SingIn = styled.div`
  ${font(3, 'italic', 900)};
  color: ${({ theme }) => theme.white};
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.glassDarkPurpleRegistration},
    ${({ theme }) => theme.glassMediumPurpleRegistration},
    ${({ theme }) => theme.glassLightPurpleRegistration},
    ${({ theme }) => theme.glassPurpleRegistration},
    ${({ theme }) => theme.glassLightPurpleRegistration},
    ${({ theme }) => theme.glassMediumPurpleRegistration},
    ${({ theme }) => theme.glassDarkPurpleRegistration}
  );
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 30px ${({ theme }) => theme.glassShadowBlackRegistration};
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
