import { Container, Button, Title, Center, Box } from '@mantine/core';
import { useState } from 'react';
import { useDynamicForm } from './hooks/useDynamicForm';
import FieldList from './components/FieldList';
import FieldSelector from './components/FieldSelector';

function App() {
  const { fields, addField, removeField } = useDynamicForm();
  const [opened, setOpened] = useState(false);

  return (
    <Center>
      <Container size="sm" mt={20}>
        <Title order={2}>動的フォーム作成ツール</Title>
        <Button onClick={() => setOpened(true)} mt="md">フィールドを追加</Button>

        <Box mt="xl">
          <FieldList fields={fields} onRemove={removeField} />
        </Box>
        
        <FieldSelector
          opened={opened}
          onClose={() => setOpened(false)}
          onAdd={(type, label) => addField(type, label)}
        />
      </Container>
    </Center>
  );
}

export default App;
