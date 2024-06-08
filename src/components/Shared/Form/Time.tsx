import React, { FC } from 'react';
import ReactDatePicker from 'react-datepicker';
import styled from 'styled-components';
import {
  font_settings,
  boxShadow_darkTheme_input,
  boxShadow_lightTheme_input,
  outline_focus,
} from 'style/mixins';

import 'react-datepicker/dist/react-datepicker.css';

interface DatePickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
  timeIntervals?: number;
  label?: string;
  id?: string;
}

const Wrapper = styled.div`
  ${font_settings(1.8, 'italic', 400)};
  input {
    ${boxShadow_lightTheme_input};
    ${font_settings(1.8, 'italic', 400)};
    background-color: ${({ theme }) => theme.whiteDark};
    height: 2.375rem;
    min-height: 38px;
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
    outline: none;
    cursor: pointer;
    width: 220px;
    text-align: center;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    ${font_settings(1.8, 'italic', 300)};
    background-color: ${({ theme }) => theme.purpleDark};
    color: white;
    border: none;
    height: 20px;
    padding: 5px;
    margin: 0;
    white-space: nowrap;
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item {
    height: 20px;
    padding: 5px;
    white-space: nowrap;
  }

  .react-datepicker {
    ${font_settings(1.8, 'italic', 300)};
    background-color: ${({ theme }) => theme.whiteDark};
    color: ${({ theme }) => theme.purpleDark};
    border: 1px solid #aeaeae;
    border-radius: 0.3rem;
    display: inline-block;
    position: relative;
    line-height: initial;
    border: none;
  }

  .react-datepicker__current-month,
  .react-datepicker-time__header,
  .react-datepicker-year-header {
    margin-top: 0;
    color: ${({ theme }) => theme.purpleDark};
    ${font_settings(1.4, 'italic', 800)};
  }

  .react-datepicker__time-container {
    float: none;
    border: none;
    width: 150px;
  }

  .react-datepicker__time-box {
    width: 100%;
    border: none;
  }
  .react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box {
    width: 100%;
    overflow-x: hidden;
    margin: 0 auto;
    text-align: center;
    border-bottom-right-radius: 0.3rem;
  }
`;

const Label = styled.label`
  ${font_settings(1.8, 'italic', 400)};
`;

const TimePickerViewRenderers: FC<DatePickerProps> = ({
  value,
  onChange,
  timeIntervals,
  id,
  label,
}) => {
  return (
    <Wrapper>
      {label && <Label htmlFor={id}>{label}</Label>}
      <ReactDatePicker
        id={id}
        selected={value}
        onChange={(date: Date | null) => onChange(date)}
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={timeIntervals || 15}
        timeCaption='Time'
        dateFormat={'h:mm aa'}
      />
    </Wrapper>
  );
};

export default TimePickerViewRenderers;
