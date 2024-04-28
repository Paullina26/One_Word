import { useContext } from 'react';
import styled from 'styled-components';
import { GlobalContext } from 'utils/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { routes } from 'data/routes';
import { Button } from 'components/Shared/Buttons/Button';
import logoutIcon from 'assets/icon/logout_Icon.svg';

export const WrapperLogOut = styled.div`
  right: 10px;
  position: absolute;
  width: 150px;
  height: 50px;
`;

export const LogoutButton = styled(Button)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  font-size: 2.1rem;
  font-weight: 500;

  img {
    margin-right: 5px;
    margin-left: 0;
    margin-top: -3px;
    width: 25px;
  }
`;

export const LogOut = () => {
  const { setIsLoginUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoginUser(false);
    navigate(`${routes.HOME.to}`);
  };

  return (
    <WrapperLogOut>
      <LogoutButton onClick={handleLogout} $isLightTeam={true}>
        <img src={logoutIcon} alt='Logout Icon' />
        Log Out
      </LogoutButton>
    </WrapperLogOut>
  );
};

export default LogOut;
