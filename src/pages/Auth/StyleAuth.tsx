import styled from 'styled-components';

export const WrapperLogo = styled.div`
  /* z-index: 1; */
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
    ${({ theme }) => theme.gradientPurpleFour} 100%
  );
  backdrop-filter: blur(5px);
  box-shadow: 3px 3px 15px rgba(46, 39, 86, 0.7);
`;
export const WrapperAuth = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
