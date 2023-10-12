import styled from 'styled-components';

export const GlassWrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 80vw;
  padding: 10px;
  min-height: 40vh;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.glassDarkWhite},
    ${({ theme }) => theme.glassMediumWhite},
    ${({ theme }) => theme.glassLightWhite},
    ${({ theme }) => theme.glassWhite},
    ${({ theme }) => theme.glassLightWhite},
    ${({ theme }) => theme.glassMediumWhite},
    ${({ theme }) => theme.glassDarkWhite}
  );
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.glassShadowBlack};
  backdrop-filter: blur(5px);
`;
