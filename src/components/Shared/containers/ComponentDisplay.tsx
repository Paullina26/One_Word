import styled from 'styled-components';
import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';

export const WrapperComponentDisplay = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

interface ComponentDisplayProps {
  children: React.ReactNode;
}

const ComponentDisplay: React.FC<ComponentDisplayProps> = props => {
  return <WrapperComponentDisplay>{props.children}</WrapperComponentDisplay>;
};

export default ComponentDisplay;
