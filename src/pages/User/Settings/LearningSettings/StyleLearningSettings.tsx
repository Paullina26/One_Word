import styled from 'styled-components';

import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import { font_settings } from 'style/mixins';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';

export const Wrapper = styled(GlassWrapper)`
  margin: 20px auto;
  height: 500px;
  width: 500px;
  overflow-y: auto;
`;

export const Notification = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

export const WrapperTimePicker = styled.div`
  padding: 0 5px;
  height: auto;
  width: 100%;
`;

export const TimePickerPosition = styled.div`
  width: 100%;
`;

export const NotificationForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
