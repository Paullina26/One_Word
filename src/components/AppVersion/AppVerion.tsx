import styled from 'styled-components';
import { font_settings, boxShadow_darkTheme_input, outline_focus } from '@style/mixins';

const VersionContainer = styled.div`
  ${font_settings(1.3, 'normal', 400)}
  ${outline_focus};
  ${boxShadow_darkTheme_input};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 25px;
  width: 40px;
  text-align: center;
  background-color: rgba(222, 222, 222, 0.5);
  margin-bottom: 0px;
  position: fixed;
  bottom: 10px;
  left: 10px;
`;

const AppVersion: React.FC = () => {
  const version = '0.0.7';
  return <VersionContainer>{version}</VersionContainer>;
};

export default AppVersion;
