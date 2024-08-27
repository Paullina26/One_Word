import Error from './Error';

import styled from 'styled-components';
import { GlassWrapper } from '../containers/GlassWrapper';
import { font_settings, color_gradient_glassEffect_light } from '@style/mixins';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  ${color_gradient_glassEffect_light}; //background page full view
`;

const StyledGlass = styled(GlassWrapper)`
  width: 340px;
  height: 400px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  ${font_settings(2.6, 'italic', 600)};
  color: ${({ theme }) => theme.purpleDark};
  margin-top: -50px; //hak for lottie loading
`;

const WrapperLoading = styled.div`
  margin-top: -50px; //hak for lottie loading
`;

const ErrorFullView = () => {
  return (
    <Wrapper>
      <StyledGlass>
        <Error />
        <Text>Error, please refresh page.</Text>
      </StyledGlass>
    </Wrapper>
  );
};

export default ErrorFullView;
