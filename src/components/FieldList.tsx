import { Stack, Paper, Button } from '@mantine/core';
import { useForm } from '@mantine/form';

import type { FormField as FieldType } from '@/hooks/useDynamicForm';
import FormField from '@/components/FormField';

interface FieldListProps {
  fields: FieldType[];
  onRemove: (id: string) => void;
  onSubmit: (values: Record<string, any>) => void;
}

const FieldList = ({ fields, onRemove, onSubmit }: FieldListProps) => {
  const form = useForm({
    initialValues: fields.reduce((acc, field) => {
      acc[field.id] = '';
      return acc;
    }, {} as Record<string, any>),
  });

  return (
    <form onSubmit={form.onSubmit((values) => onSubmit(values))}>
      <Stack>
        {fields.length > 0 && (
          <Paper shadow="xs" p="xl" withBorder>
            <Stack>
              {fields.map((field) => (
                <FormField
                  key={field.id}
                  field={field}
                  value={form.values[field.id]}
                  onChange={(value) => form.setFieldValue(field.id, value)}
                  onRemove={() => onRemove(field.id)}
                />
              ))}
              <Button type="submit" mt="md" variant="filled" color="blue">
                送信
              </Button>
            </Stack>
          </Paper>
        )}
      </Stack>
    </form>
  );
};

export default FieldList;
