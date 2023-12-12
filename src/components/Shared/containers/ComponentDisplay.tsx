import styled from 'styled-components';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';

export const WrapperComponentDisplay = styled.div`
  min-height: 50vh;
  margin: 0 auto;
`;

interface ComponentDisplayProps {
  children: React.ReactNode;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = props => {
  return (
    <WrapperComponentDisplay>
      <div>{props.children}</div>
    </WrapperComponentDisplay>
  );
};

export default ComponentDisplay;
