import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select as ChakraSelect,
} from '@chakra-ui/react';
import useSelect from '../hooks/useSelect';
import { CustomField } from '../types';

type Option = {
  label: string | React.ReactNode;
  value: any;
  [key: string]: any;
};

export type SelectProps = {
  options: Option[];
} & CustomField;

export default function Select(props: SelectProps) {
  const { label, placeholder, options } = props;
  const { name, value, error, onChange, onBlur, ref } = useSelect(props);

  return (
    <FormControl isRequired isInvalid={!!error}>
      <FormLabel _invalid={{ color: 'red' }}>{label}</FormLabel>
      <ChakraSelect
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        ref={ref}
      >
        {options.map(option => (
          <option key={option.value}>{option.label}</option>
        ))}
      </ChakraSelect>
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}
