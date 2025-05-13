import { TextInput, NumberInput, Select, Button, Group, Box } from '@mantine/core';
import type { FormField as FieldType } from '@/hooks/useDynamicForm';

interface FormFieldProps {
  field: FieldType;
  onRemove: () => void;
}

const FormField = ({ field, onRemove }: FormFieldProps) => {
  return (
    <Group mt="sm" align="flex-end" style={{ width: '100%' }}>
      <Box style={{ flex: 1 }}>
        {field.type === 'text' && <TextInput label={field.label} placeholder={field.label} />}
        {field.type === 'number' && <NumberInput label={field.label} placeholder={field.label} />}
        {field.type === 'select' && <Select label={field.label} data={['選択1', '選択2']} />}
      </Box>
      <Button color="red" onClick={onRemove}>削除</Button>
    </Group>
  );
};

export default FormField;
