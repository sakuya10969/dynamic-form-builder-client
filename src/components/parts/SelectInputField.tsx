import { Select } from '@mantine/core';
import type { SelectProps } from '@mantine/core';
import { Controller } from 'react-hook-form';
import type { Control } from 'react-hook-form';

interface SelectInputFieldProps extends Omit<SelectProps, 'onChange'> {
  label: string;
  data: { value: string; label: string }[];
  name: string;
  control: Control<any>;
}

const SelectInputField = ({ label, data, name, control, ...props }: SelectInputFieldProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          label={label}
          data={data}
          {...field}
          {...props}
        />
      )}
    />
  );
};

export default SelectInputField;
