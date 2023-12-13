import styled from 'styled-components';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';

export const WrapperComponentDisplay = styled.div`
  height: 100vh;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
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
