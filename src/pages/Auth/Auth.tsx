import { useNavigate } from 'react-router-dom';
import Background from 'components/Background/Background';
import OneWord from 'components/Logo/OneWord';
import styled from 'styled-components';
import Login from 'components/Login/Login';
import Registration from 'components/Registration/Registration';

export const WrapperLogo = styled.div`
  text-align: center;
  padding-top: 10px;
  border-radius: 0 0 40px 40px;
  margin-bottom: 10px;
  background: radial-gradient(
    circle,
    ${({ theme }) => theme.gradientPurpleDark} 0%,
    ${({ theme }) => theme.gradientPurpleOne} 25%,
    ${({ theme }) => theme.gradientPurpleTwo} 50%,
    ${({ theme }) => theme.gradientPurpleThere} 75%,
    ${({ theme }) => theme.gradientPurpleFour}100%
  );
  backdrop-filter: blur(5px);
  box-shadow: 3px 3px 15px rgba(46, 39, 86, 0.7);
`;

export const Auth = () => {
  return (
    <>
      <Background />
      <WrapperLogo>
        <OneWord fontColor='white' />
      </WrapperLogo>
      <Login />
      {/* <Registration /> */}
    </>
  );
};

export default Auth;
