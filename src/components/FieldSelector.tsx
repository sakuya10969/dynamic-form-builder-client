import { Modal, Button, Select, TextInput, Stack } from '@mantine/core';
import { useState } from 'react';

interface FieldSelectorProps {
  opened: boolean;
  onClose: () => void;
  onAdd: (type: 'text' | 'number' | 'select', label: string) => void;
}

const FieldSelector = ({ opened, onClose, onAdd }: FieldSelectorProps) => {
  const [label, setLabel] = useState('');
  const [type, setType] = useState<'text' | 'number' | 'select'>('text');

  const handleAdd = () => {
    if (label.trim()) {
      onAdd(type, label);
      setLabel('');
      onClose();
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="フィールドを追加">
      <Stack gap="sm">
        <TextInput
          label="フィールド名"
          placeholder="名前や年齢等"
          value={label}
          onChange={(e) => setLabel(e.currentTarget.value)}
        />
        <Select
          label="フィールドタイプ"
          value={type}
          onChange={(value) => setType(value as 'text' | 'number' | 'select')}
          data={[
            { value: 'text', label: 'テキスト' },
            { value: 'number', label: '数値' },
            { value: 'select', label: 'セレクトボックス' },
          ]}
        />
        <Button onClick={handleAdd}>追加</Button>
      </Stack>
    </Modal>
  );
};

export default FieldSelector;
