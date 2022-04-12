import React from 'react';

import { FieldSet, Legend, StyledTextarea } from './styles';

interface IProps {
  label?: string;
  name?: string;
  value?: string;
  rows?: number;
  id?: string;
  required?: boolean;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
  onBlur?: React.FocusEventHandler<HTMLTextAreaElement> | undefined;
}

const Textarea = ({
  label,
  name,
  value,
  rows,
  id,
  required,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <StyledTextarea
        id={id}
        name={name}
        value={value}
        rows={rows}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
    </FieldSet>
  );
};

export default Textarea;
