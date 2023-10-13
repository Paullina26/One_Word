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
}

export const LabelStyle = styled.label`
  ${font(2, 'italic', 400)};
  text-align: center;
  color: ${({ theme }) => theme.purpleDark};
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
  /* box-shadow: inset 0px 0px 80px -50px rgba(175, 175, 220, 1),
    -3px -3px 9px rgba(255, 255, 255, 0.4), 3px 3px 7px rgba(46, 39, 86, 0.3); */
  box-shadow: -4px -4px 7px ${({ theme }) => theme.boxShadowWhite},
    4px 4px 7px ${({ theme }) => theme.boxShadowGray};
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
}) => {
  return (
    <LabelStyle htmlFor={id}>
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
