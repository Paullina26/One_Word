import styled from 'styled-components';
import { GradientGlassEffectLight, BorderRadiusBubble } from 'style/mixins';

export const GlassWrapper = styled.div`
  ${GradientGlassEffectLight};
  ${BorderRadiusBubble};
  text-align: center;
  width: 90vw;
  max-width: 500px;
  max-height: 650px;
  margin: auto;
  padding: 20px 30px;
  backdrop-filter: blur(3px);
  box-shadow: -3px -3px 5px rgba(94, 104, 121, 0.2), 3px 3px 5px rgba(94, 104, 121, 0.2);
  border: 3px inset rgba(220, 220, 220, 0.2);
`;
