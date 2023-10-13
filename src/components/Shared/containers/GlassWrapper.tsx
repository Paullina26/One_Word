import styled from 'styled-components';

export const GlassWrapper = styled.div`
  text-align: center;
  width: 80vw;
  max-width: 500px;
  max-height: 650px;
  margin: auto;
  padding: 10px;
  background: linear-gradient(
    160deg,
    ${({ theme }) => theme.glassLightOne} 0%,
    ${({ theme }) => theme.glassLightTwo}25%,
    ${({ theme }) => theme.glassLightThere} 50%,
    ${({ theme }) => theme.glassLightFour} 75%,
    ${({ theme }) => theme.glassLightFive} 100%
  );
  backdrop-filter: blur(5px);
  border-radius: 20px;
  box-shadow: -4px -4px 7px ${({ theme }) => theme.boxShadowWhite},
    4px 4px 7px ${({ theme }) => theme.boxShadowGray};
`;
