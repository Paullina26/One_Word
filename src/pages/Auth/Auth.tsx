import { useNavigate } from 'react-router-dom';
import Background from 'components/Background/Background';
import OneWord from 'components/Logo/OneWord';
import styled from 'styled-components';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';

export const WrapperLogo = styled.div`
  text-align: center;
  padding-top: 10px;
  /* background-color: ${({ theme }) => theme.purpleDark}; */
  border-radius: 0 0 10px 10px;
  margin-bottom: 10px;
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
`;

export const Auth = () => {
  return (
    <>
      <Background />
      <WrapperLogo>
        <OneWord fontColor='light' />
      </WrapperLogo>
      <Login />
      {/* <Registration /> */}
    </>
  );
};

export default Auth;
