import {
  FormControl,
  FormErrorMessage,
  Checkbox as CharkaCheckbox,
} from '@chakra-ui/react';
import useCheckbox from '../hooks/useCheckbox';
import { CustomField } from '../types';

export type CheckboxProps = Omit<CustomField, 'placeholder'>;

export default function CheckBox(props: CheckboxProps) {
  const { label, disabled, readOnly } = props;
  const { name, value, error, onChange, onBlur, ref } = useCheckbox(props);

  return (
    <FormControl
      isInvalid={!!error}
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