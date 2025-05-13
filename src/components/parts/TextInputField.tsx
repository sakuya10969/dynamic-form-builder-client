import { TextInput } from '@mantine/core';
import type { TextInputProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

interface TextInputFieldProps extends Omit<TextInputProps, 'onChange'> {
  label: string;
  placeholder?: string;
  name: string;
  control: Control<any>;
}

const TextInputField = ({ label, placeholder, name, control, ...props }: TextInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <TextInput
          label={label}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default TextInputField;
