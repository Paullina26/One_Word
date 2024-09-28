import styled from 'styled-components';
import { color_gradient_glassEffect_light } from '@style/mixins';
import { ScrollbarStyles } from '../Atoms/ScrollbarStyle';

export const GlassWrapper = styled.div`
  ${color_gradient_glassEffect_light};
  ${ScrollbarStyles}
  text-align: center;
  width: 90vw;
  max-width: 340px;
  max-height: 650px;
  padding: 10px 15px;
`;
