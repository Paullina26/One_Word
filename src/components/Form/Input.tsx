import { FC } from 'react';
import styled from 'styled-components';
import { font } from 'style/mixins';

interface InputProps {
  id: string;
  type: string;
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
}

export const LabelStyle = styled.label<{ $fontColorLabel: string }>`
  ${font(2, 'italic', 400)};
  text-align: center;
  color: ${({ theme, $fontColorLabel }) => theme[$fontColorLabel]};
`;
export const InputStyle = styled.input`
  ${font(1.8, 'italic', 300)};
  display: block;
  text-align: center;
  width: 70%;
  height: 35px;
  margin: 5px auto 15px auto;
  padding: 5px;
  background-color: ${({ theme }) => theme.white};
  border-radius: 20px;
  border: none;
  box-shadow: -5px -5px 10px ${({ theme }) => theme.boxShadowWhite},
    5px 5px 10px ${({ theme }) => theme.boxShadowGray};
`;

const Input: FC<InputProps> = ({
  label,
  id,
  type,
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
      />
    </LabelStyle>
  );
};

export default Input;
