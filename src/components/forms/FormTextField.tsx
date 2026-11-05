import React, { ComponentPropsWithoutRef } from 'react';
import {
  Controller,
  type Control,
  type FieldValue,
  type FieldValues,
  type Path,
} from 'react-hook-form';

type FormTextFieldProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  type: React.HTMLInputTypeAttribute;
  autoComplete: React.HTMLInputAutoCompleteAttribute;
  label: string;
  description?: string;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<'input'>,
  | 'name'
  | 'type'
  | 'autoComplete'
  | 'defaultValue'
  | 'value'
  | 'onChange'
  | 'onBlur'
  | 'aria-invalid'
  | 'ref'
  | 'id'
>;

// export const FormTextField = ({className}: Form) => {
//   return <Controller />
// }
