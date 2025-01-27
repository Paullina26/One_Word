import styled from 'styled-components';
import { color_gradient_glassEffect_light } from '@style/mixins';

export const WrapperSettings = styled.div`
  ${color_gradient_glassEffect_light};
  color: ${({ theme }) => theme.purpleDark};
  border-radius: 20px;
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
