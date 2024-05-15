import { FC } from 'react';
import styled from 'styled-components';
import {
  font_settings,
  boxShadow_darkTheme_input,
  boxShadow_lightTheme_input,
  outline_focus,
} from 'style/mixins';

interface SelectOption<TType = string> {
  label: string;
  value: TType;
}
interface SelectProps<T> {
  options: SelectOption<T>[];
  onChange: (value: T) => void;
  value: T;
  labelValue: string;
  id: string;
  $isLightTeam: boolean;
  $fontColorLabel: string;
}

const SelectWrapper = styled.div`
  display: block;
  margin-bottom: 10px;
`;

const SelectLabel = styled.label<{ $fontColorLabel: string }>`
  ${font_settings(2, 'italic', 400)};
  text-align: center;
  color: ${({ theme, $fontColorLabel }) => theme[$fontColorLabel]};
`;

const StyledSelect = styled.select<{ $isLightTeam: boolean }>`
  ${font_settings(1.8, 'italic', 300)};
  display: block;
  text-align: center;
  width: 80%;
  max-width: 300px;
  height: 35px;
  margin: 5px auto 10px auto;
  padding: 5px;
  background-color: ${({ theme }) => theme.whiteDark};
  border-radius: 20px;
  ${({ $isLightTeam }) =>
    $isLightTeam ? `${boxShadow_lightTheme_input}` : `${boxShadow_darkTheme_input}`};
  ${outline_focus};
`;

const handleSelectChange = <T,>(
  e: React.ChangeEvent<HTMLSelectElement>,
  onChange: (value: T) => void
) => {
  const newValue = e.target.value;
  const convertedValue = isNaN(Number(newValue)) ? newValue : Number(newValue);
  onChange(convertedValue as T);
};

const Select = <T extends string | number>({
  id,
  options,
  onChange,
  value,
  labelValue,
  $isLightTeam,
  $fontColorLabel,
}: SelectProps<T>): JSX.Element => {
  return (
    <SelectWrapper>
      <SelectLabel htmlFor={id} $fontColorLabel={$fontColorLabel}>
        {labelValue}
      </SelectLabel>
      <StyledSelect
        id={id}
        value={value.toString()}
        onChange={e => handleSelectChange(e, onChange)}
        $isLightTeam={$isLightTeam}
      >
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    </SelectWrapper>
  );
};

export default Select;
