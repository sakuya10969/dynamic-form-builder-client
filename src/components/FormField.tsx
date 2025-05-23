import { TextInput, NumberInput, Select, Button, Group, Box } from '@mantine/core';
import type { FormField as FieldType } from '@/hooks/useDynamicForm';

interface FormFieldProps {
  field: FieldType;
  value: string | number;
  onChange: (value: string | number) => void;
  onRemove: () => void;
}

const FormField = ({ field, value, onChange, onRemove }: FormFieldProps) => {
  return (
    <Group mt="sm" align="flex-end" style={{ width: '100%' }}>
      <Box style={{ flex: 1 }}>
        {field.type === 'text' && (
          <TextInput
            label={field.label}
            placeholder={field.label}
            value={value as string}
            onChange={(event) => onChange(event.currentTarget.value)}
          />
        )}
        {field.type === 'number' && (
          <NumberInput
            label={field.label}
            placeholder={field.label}
            value={value as number}
            onChange={(val) => onChange(val || 0)}
          />
        )}
        {field.type === 'select' && (
          <Select
            label={field.label}
            data={['選択1', '選択2']}
            value={value as string}
            onChange={(val) => onChange(val || '')}
          />
        )}
      </Box>
      <Button color="red" onClick={onRemove}>削除</Button>
    </Group>
  );
};

export default FormField;
