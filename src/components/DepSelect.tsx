import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react';
import { Select as ReactSelect } from 'chakra-react-select';

import useDepSelect from '../hooks/useDepSelect';
import type { DepSelectProps, Option } from '../types';

export default function DepSelect(props: DepSelectProps) {
  const { label, placeholder, required, readOnly, disabled, multiple } = props;
  const { name, value, options, error, onChange, onBlur, ref } =
    useDepSelect(props);

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
            : options.find(o => o.value === value) ?? ''
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
