import { useController } from 'react-hook-form';

export type UseTextFieldProps = {
  label: string;
  name: string;
  validation?: string;
};

export function useTextField({ name, label }: UseTextFieldProps) {
  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error, isDirty, isTouched },
  } = useController({
    name,
    defaultValue: '',
  });

  return {
    name,
    value,
    onChange,
    onBlur,
    ref,
    error,
    isDirty,
    isTouched,
    label,
  };
}
