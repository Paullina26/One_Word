import styled from 'styled-components';

import { GlassWrapper } from 'components/Shared/containers/GlassWrapper';
import { font_settings } from 'style/mixins';
import ButtonIcon from 'components/Shared/Buttons/ButtonIcon';

export const Wrapper = styled(GlassWrapper)`
  margin: 20px auto;
  height: 500px;
  width: 500px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(54, 35, 81, 0.5);
    border-radius: 6px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.5);
  }
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
