import styled from 'styled-components';
import OneWord from 'components/Logo/OneWord';

export const WrapperLogo = styled.div`
  text-align: center;
  margin: 40px auto;
  width: 100vw;
`;

export const TittleOnly = styled.p`
  color: ${({ theme }) => theme.PurpleDark};
  font-size: 3rem;
`;

export const TittleaDay = styled.p`
  color: ${({ theme }) => theme.PurpleDark};
  font-size: 3rem;
  margin-top: -5px;
`;

export const Logo = () => {
  return (
    <WrapperLogo>
      <TittleOnly>only</TittleOnly>
      <OneWord />
      <TittleaDay>a day</TittleaDay>
    </WrapperLogo>
  );
};

export default Logo;
