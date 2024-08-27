import { FC } from 'react';
import styled from 'styled-components';
import {
  font_settings,
  boxShadow_darkTheme_input,
  boxShadow_lightTheme_input,
  outline_focus,
} from '@style/mixins';

interface InputProps {
  id?: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  autoComplete?: string;
  pattern?: string;
  required?: boolean;
  className?: string;
  minlength?: number;
  maxLength?: number;
  $fontColorLabel: string;
  $isLightTeam: boolean;
  min?: number;
  max?: number;
}

export const LabelStyle = styled.label<{ $fontColorLabel?: string }>`
  ${font_settings(2, 'italic', 400)};
  text-align: center;
  color: ${({ theme, $fontColorLabel }) => theme[$fontColorLabel || 'purpleDark']};
  padding: 20px auto;
`;

export const InputStyle = styled.input<{ $isLightTeam: boolean }>`
  ${font_settings(1.8, 'italic', 300)};
  display: block;
  text-align: center;
  width: 80%;
  max-width: 300px;
  height: 35px;
  margin: 15px auto 20px auto;
  padding: 5px;
  background-color: ${({ theme }) => theme.whiteDark};
  border-radius: 20px;
  ${({ $isLightTeam }) => ($isLightTeam ? boxShadow_lightTheme_input : boxShadow_darkTheme_input)};
  ${outline_focus};
`;

const Input: FC<InputProps> = ({
  label,
  id,
  type = 'text',
  value,
  onChange,
  autoComplete,
  placeholder,
  minlength,
  pattern,
  required,
  className,
  maxLength,
  $fontColorLabel,
  $isLightTeam,
  min,
  max,
}) => {
  return (
    <LabelStyle htmlFor={id} $fontColorLabel={$fontColorLabel}>
      {label}
      <InputStyle
        id={id}
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete={autoComplete}
        placeholder={placeholder}
        pattern={pattern}
        required={required}
        className={className}
        minLength={minlength}
        maxLength={maxLength}
        $isLightTeam={$isLightTeam}
        min={min}
        max={max}
      />
    </LabelStyle>
  );
};

export default Input;
