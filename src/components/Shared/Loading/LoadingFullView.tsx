import Loading from './Loading';

import styled from 'styled-components';
import { GlassWrapper } from '../containers/GlassWrapper';
import { font_settings } from 'style/mixins';

const Wrapper = styled(GlassWrapper)`
  width: 340px;
  height: 200px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

const Text = styled.p`
  ${font_settings(2.6, 'italic', 600)};
  color: ${({ theme }) => theme.purpleDark};
  margin-top: -50px; //hak for lottie loading
`;

const WrapperLoading = styled.div`
  margin-top: -50px; //hak for lottie loading
`;

const LoadingFullView = () => {
  return (
    <Wrapper>
      <WrapperLoading>
        <Loading />
      </WrapperLoading>
      <Text>Loading...</Text>
    </Wrapper>
  );
};

export default LoadingFullView;
