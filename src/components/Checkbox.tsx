import {
  FormControl,
  FormErrorMessage,
  Checkbox as CharkaCheckbox,
} from '@chakra-ui/react';
import useCheckbox from '../hooks/useCheckbox';
import type { CheckboxProps } from '../types';

export default function CheckBox(props: CheckboxProps) {
  const { label, required, disabled, readOnly } = props;
  const { name, value, error, onChange, onBlur, ref } = useCheckbox(props);

  return (
    <FormControl
      isInvalid={!!error}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      <CharkaCheckbox
        name={name}
        isChecked={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      >
        {label}
      </CharkaCheckbox>
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}
