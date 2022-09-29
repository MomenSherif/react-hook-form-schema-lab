import {
  FormControl,
  FormErrorMessage,
  Checkbox as CharkaCheckbox,
  CheckboxGroup,
  Stack,
  FormLabel,
} from '@chakra-ui/react';
import useCheckboxGroup from '../hooks/useCheckboxGroup';
import { CustomField } from '../types';

type Option = {
  label: React.ReactNode;
  value: any;
  [key: string]: any;
};

export type CheckboxGroupProps = {
  options: Option[];
} & Omit<CustomField, 'placeholder'>;

export default function CheckBox(props: CheckboxGroupProps) {
  const { label, options, required, disabled, readOnly } = props;
  const { name, value, error, onChange, onBlur, ref } = useCheckboxGroup(props);

  return (
    <FormControl
      isInvalid={!!error}
      isRequired={required}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      <FormLabel tabIndex={-1} ref={ref} _invalid={{ color: 'red.500' }}>
        {label}
      </FormLabel>
      <CheckboxGroup value={value} onChange={onChange}>
        <Stack spacing={[1, 5]} direction={['column', 'row']}>
          {options.map(option => (
            <CharkaCheckbox
              key={option.value}
              value={option.value}
              name={name}
              isDisabled={option.disabled}
              onBlur={onBlur}
            >
              {option.label}
            </CharkaCheckbox>
          ))}
        </Stack>
      </CheckboxGroup>
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}

/**
 * Another use case (each option onChange & checked)
 *   {options.map(option => (
          <CharkaCheckbox
            key={option.value}
            value={option.value}
            isChecked={isChecked(option.value)}
            onChange={onChange}
            name={name}
          >
            {option.label}
          </CharkaCheckbox>
        ))}
 */
