import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  // Select as ChakraSelect,
} from '@chakra-ui/react';
import { Select as ReactSelect } from 'chakra-react-select';

import useSelect from '../hooks/useSelect';
import { CustomField } from '../types';

type Option = {
  label: React.ReactNode;
  value: any;
  [key: string]: any;
};

export type SelectProps = {
  options: Option[];
  multiple?: boolean;
} & CustomField;

export default function Select(props: SelectProps) {
  const {
    label,
    placeholder,
    required,
    options,
    readOnly,
    disabled,
    multiple,
  } = props;
  const { name, value, error, onChange, onBlur, ref } = useSelect(props);

  return (
    <FormControl
      isRequired={required}
      isReadOnly={readOnly}
      isDisabled={disabled}
      isInvalid={!!error}
    >
      <FormLabel _invalid={{ color: 'red' }}>{label}</FormLabel>
      <ReactSelect
        placeholder={placeholder}
        name={name}
        value={
          multiple
            ? options.filter(o => value.includes(o.value))
            : options.find(o => o.value === value)
        }
        onChange={(newValue: any) =>
          multiple
            ? onChange(newValue.map((c: Option) => c.value))
            : onChange(newValue.value)
        }
        onBlur={onBlur}
        ref={ref}
        options={options}
        useBasicStyles
        selectedOptionStyle="check"
        isMulti={multiple}
      />
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}

/**
 * Native select
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
 */
