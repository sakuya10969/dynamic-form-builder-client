import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type FieldType = 'text' | 'number' | 'select';

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
}

export const useDynamicForm = () => {
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FieldType, label: string) => {
    setFields((prev) => [...prev, { id: uuidv4(), type, label }]);
  };

  const removeField = (id: string) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
  };

  return { fields, addField, removeField };
};
