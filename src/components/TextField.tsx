import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import { useTextField } from '../hooks/useTextField';
import type { CustomField } from '../types';

export type TextFieldProps = CustomField;

export default function TextField(props: TextFieldProps) {
  const { label, placeholder, disabled, readOnly } = props;
  const { name, value, error, onChange, onBlur, ref } = useTextField(props);

  return (
    <FormControl
      isRequired
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
