import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useController } from 'react-hook-form';

export type TextFieldProps = {
  label: string;
  name: string;
};

export default function TextField({ name, label }: TextFieldProps) {
  const {
    field: { onBlur, onChange, ref, value },
    fieldState: { error },
  } = useController({
    name,
    rules: {
      required: true,
    },
    defaultValue: '',
  });

  return (
    <FormControl isRequired isInvalid={!!error}>
      <FormLabel htmlFor={name} _invalid={{ color: 'red' }}>
        {label}
      </FormLabel>
      <Input
        ref={ref}
        id={name}
        required={false} // Remove required props inserted by <FormControl />
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </FormControl>
  );
}
