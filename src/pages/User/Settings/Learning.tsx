import Input from 'components/Shared/Form/Input';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import styled from 'styled-components';

const Wrapper = styled(GlassWrapper)`
  margin: 20px auto;
  height: 500px;
  width: 500px;
`;

const LearningSettings = () => {
  return (
    <Wrapper>
      <div>Learning Settings</div>
    </Wrapper>
  );
};

export default LearningSettings;
