import { FC } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { boxShadow_lightTheme_input, font_settings } from 'style/mixins';
import styled from 'styled-components';

const StyledTextarea = styled(TextareaAutosize)<{ $fontColorLabel?: string }>`
  padding: 30px;
  border-radius: 30px;
  width: 100%;
  ${font_settings(2, 'italic', 400)};
  color: ${({ theme, $fontColorLabel }) => theme[$fontColorLabel || 'purpleDark']};
  background-color: ${({ theme }) => theme.whiteDark};
  ${boxShadow_lightTheme_input}
  border: none;
`;

interface TextareaProps {
  value: string;
  onChange: (value: string) => void;
  minRows?: number;
  maxRows?: number;
  fontColorLabel?: string;
}

const Textarea: FC<TextareaProps> = ({
  value,
  onChange,
  minRows = 3,
  maxRows = 6,
  fontColorLabel,
}) => {
  return (
    <StyledTextarea
      value={value}
      onChange={ev => onChange(ev.target.value)}
      minRows={minRows}
      maxRows={maxRows}
      $fontColorLabel={fontColorLabel}
    />
  );
};

export default Textarea;
