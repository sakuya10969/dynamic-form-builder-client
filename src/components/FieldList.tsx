import { Stack, Paper } from '@mantine/core';
import type { FormField as FieldType } from '../hooks/useDynamicForm';
import FormField from './FormField';

interface FieldListProps {
  fields: FieldType[];
  onRemove: (id: string) => void;
}

const FieldList = ({ fields, onRemove }: FieldListProps) => {
  return (
    <Stack>
      {fields.length > 0 && (
        <Paper shadow="xs" p="xl" withBorder>
          <Stack>
            {fields.map((field) => (
              <FormField key={field.id} field={field} onRemove={() => onRemove(field.id)} />
            ))}
          </Stack>
        </Paper>
      )}
    </Stack>
  );
};

export default FieldList;
