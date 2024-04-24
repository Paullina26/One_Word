import styled from 'styled-components';
import { color_gradient_glassEffect_light, border_radius_effect_bubble } from 'style/mixins';

export const GlassWrapper = styled.div`
  ${color_gradient_glassEffect_light};
  text-align: center;
  width: 90vw;
  max-width: 340px;
  max-height: 650px;
  margin: auto;
  padding: 10px 15px;
`;
