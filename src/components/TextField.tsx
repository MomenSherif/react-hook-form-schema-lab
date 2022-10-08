import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useTextField } from '../hooks/useTextField';
import type { TextFieldProps } from '../types';

export default function TextField(props: TextFieldProps) {
  const { label, placeholder, required, disabled, readOnly } = props;
  const { name, value, error, onChange, onBlur, ref } = useTextField(props);

  return (
    <FormControl
      isRequired={required}
      isInvalid={!!error}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      <FormLabel htmlFor={name} _invalid={{ color: 'red' }}>
        {label}
      </FormLabel>
      <Input
        ref={ref}
        id={name}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}
