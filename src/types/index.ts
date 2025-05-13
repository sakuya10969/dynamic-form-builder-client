import type { TextInputProps, NumberInputProps, SelectProps } from '@mantine/core';
import type { Control } from 'react-hook-form';

export interface NumberInputFieldProps extends Omit<NumberInputProps, 'onChange'> {
    label: string;
    placeholder?: string;
    name: string;
    control: Control<any>;
}

export interface SelectInputFieldProps extends Omit<SelectProps, 'onChange'> {
    label: string;
    data: { value: string; label: string }[];
    name: string;
    control: Control<any>;
}

export interface TextInputFieldProps extends Omit<TextInputProps, 'onChange'> {
    label: string;
    placeholder?: string;
    name: string;
    control: Control<any>;
}

export type FieldType = 'text' | 'number' | 'select';

export interface FormField {
    id: string;
    type: FieldType;
    label: string;
}

export interface FieldListProps {
    fields: FieldType[];
    onRemove: (id: string) => void;
}

export interface FieldSelectorProps {
    opened: boolean;
    onClose: () => void;
    onAdd: (type: 'text' | 'number' | 'select', label: string) => void;
}

export interface FormFieldProps {
    field: FieldType;
    onRemove: () => void;
  }
