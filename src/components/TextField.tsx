import { FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useTextField, UseTextFieldProps } from '../hooks/useTextField';

export type TextFieldProps = UseTextFieldProps;

export default function TextField(props: TextFieldProps) {
  const { name, value, error, label, onChange, onBlur, ref } =
    useTextField(props);

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
