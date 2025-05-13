import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const formSchema = z.object({
  name: z.string().min(1, '名前は必須です'),
  age: z.number().min(18, '18歳以上が必要です'),
  gender: z.string().nonempty('性別を選択してください'),
});

export const useFormControl = () => {
  const methods = useForm({
    resolver: zodResolver(formSchema),
  });

  return {
    control: methods.control,
    handleSubmit: methods.handleSubmit,
    formState: methods.formState,
  };
};
