import { useMemo } from 'react';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from '@chakra-ui/react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import { format, formatISO } from 'date-fns';

import type { DatePickerProps } from '../types';
import { useDatePicker } from '../hooks/useDatePicker';

export default function DatePicker(props: DatePickerProps) {
  const { required, disabled, readOnly, label } = props;
  const { name, value, onChange, onBlur, error, ref } = useDatePicker(props);

  const formattedValue = useMemo(
    () => (value ? format(new Date(value), 'PP') : ''),
    [value],
  );

  let footer = <p>Please pick a day.</p>;
  if (value) {
    footer = <p>You picked {formattedValue}.</p>;
  }

  return (
    <FormControl
      isRequired={required}
      isInvalid={!!error}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      <FormLabel ref={ref} htmlFor={name} _invalid={{ color: 'red' }}>
        {label}
      </FormLabel>
      <Popover placement="bottom-start">
        <PopoverTrigger>
          <Button>
            {value ? `Selected Day ${formattedValue}` : 'Select Day'}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <DayPicker
            mode="single"
            selected={new Date(value)}
            onSelect={(day: Date | undefined) =>
              onChange(day ? formatISO(day) : '')
            }
            onDayBlur={onBlur}
            footer={footer}
          />
        </PopoverContent>
      </Popover>
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
  );
}
/**
 * Native date & datetime-local pickers
 * <FormControl
      isRequired={required}
      isInvalid={!!error}
      isDisabled={disabled}
      isReadOnly={readOnly}
    >
      <FormLabel htmlFor={name} _invalid={{ color: 'red' }}>
        {label}
      </FormLabel>
      <Input
        id={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        type="date"
        ref={ref}
        placeholder={placeholder}
      />
      <FormErrorMessage>{JSON.stringify(error, null, 2)}</FormErrorMessage>
    </FormControl>
 */
