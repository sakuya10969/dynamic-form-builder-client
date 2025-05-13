import { NumberInput } from '@mantine/core';
import type { NumberInputProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

interface NumberInputFieldProps extends Omit<NumberInputProps, 'onChange'> {
  label: string;
  placeholder?: string;
  name: string;
  control: Control<any>;
}

const NumberInputField = ({ label, placeholder, name, control, ...props }: NumberInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <NumberInput
          label={label}
          placeholder={placeholder}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default NumberInputField;
