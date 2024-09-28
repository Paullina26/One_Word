import styled from 'styled-components';
import OneWord from '@components/Shared/Logo/OneWord';

export const WrapperLogo = styled.div`
  text-align: center;
  margin: 40px auto;
`;

export const TittleOnly = styled.p`
  color: ${({ theme }) => theme.purpleDark};
  font-size: 3rem;
`;

export const TittleDay = styled.p`
  color: ${({ theme }) => theme.purpleDark};
  font-size: 3rem;
  margin-top: -5px;
`;

export const Logo = () => {
  return (
    <WrapperLogo>
      <TittleOnly>only</TittleOnly>
      <OneWord $fontColor='purpleDark' />
      <TittleDay>a day</TittleDay>
    </WrapperLogo>
  );
};

export default Logo;
