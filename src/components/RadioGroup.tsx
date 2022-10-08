import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Radio,
  RadioGroup as ChakraRadioGroup,
  Stack,
} from '@chakra-ui/react';
import useRadioGroup from '../hooks/useRadioGroup';
import type { RadioGroupProps } from '../types';

export default function RadioGroup(props: RadioGroupProps) {
  const { label, options, required, disabled, readOnly } = props;

  const { name, value, error, onChange, onBlur, ref } = useRadioGroup(props);

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
      <ChakraRadioGroup
        name={name}
        onChange={onChange}
        value={value}
        onBlur={onBlur}
      >
        <Stack direction="row">
          {options.map(option => (
            <Radio key={option.value} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Stack>
      </ChakraRadioGroup>
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}
