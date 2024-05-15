import styled from 'styled-components';
import { font_settings } from 'style/mixins';

export const NotificationWrapper = styled.div`
  background-color: rgba(103, 161, 243, 0.6);
  border: 1px solid #5d9cf4;
  border-left: 5px solid #5d9cf4;
  border-radius: 10px;
  p {
    ${font_settings(1.6, 'normal', 300)}
    padding: 15px;
  }
`;

interface NotificationInformationProps {
  notificationText: string;
}

const NotificationInformation: React.FC<NotificationInformationProps> = ({ notificationText }) => {
  return (
    <NotificationWrapper>
      <p>{notificationText}</p>
    </NotificationWrapper>
  );
};
export default NotificationInformation;
