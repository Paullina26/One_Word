import styled from 'styled-components';

export const GlassWrapper = styled.div`
  text-align: center;
  margin: auto;
  width: 80vw;
  padding: 10px;
  min-height: 40vh;
  background-image: linear-gradient(
    to bottom right,
    ${({ theme }) => theme.GlassDarkWhite},
    ${({ theme }) => theme.GlassMediumWhite},
    ${({ theme }) => theme.GlassLightWhite},
    ${({ theme }) => theme.GlassWhite},
    ${({ theme }) => theme.GlassLightWhite},
    ${({ theme }) => theme.GlassMediumWhite},
    ${({ theme }) => theme.GlassDarkWhite}
  );
  border-radius: 16px;
  box-shadow: 0 4px 30px ${({ theme }) => theme.GlassShadowBlack};
  backdrop-filter: blur(5px);
`;
