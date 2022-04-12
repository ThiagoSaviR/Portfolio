import React from 'react';

import { FieldSet, Legend, StyledInput } from './styles';

interface IProps {
  label?: string;
  type?: string;
  name?: string;
  value?: string | number;
  id?: string;
  required?: boolean;
  onChange?: any;
  onBlur?: any;
}

const Input = ({
  type,
  label,
  name,
  value,
  id,
  required,
  onChange,
  onBlur,
}: IProps) => {
  return (
    <FieldSet>
      <Legend>{label}</Legend>
      <StyledInput
        id={id}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        required={required}
      />
    </FieldSet>
  );
};

export default Input;
