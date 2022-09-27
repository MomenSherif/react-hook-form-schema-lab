import { useCallback } from 'react';

import useCustomField, { type UseCustomFieldOptions } from './useCustomField';
import isArray from '../utils/isArray';

export type UseCheckboxGroupOptions = UseCustomFieldOptions;

export default function useCheckboxGroup(options: UseCheckboxGroupOptions) {
  const { value, onChange, ...rest } = useCustomField({
    ...options,
    defaultValue: [],
  });

  const checkBoxGroupOnChange = useCallback(
    (event: any[] | React.ChangeEvent<HTMLInputElement>) => {
      if (isArray(event)) return onChange(event);

      if (event.target.checked) return onChange([...value, event.target.value]);

      return onChange(value.filter((v: any) => v !== event.target.value));
    },
    [value, onChange],
  );

  const isChecked = useCallback(
    (optionValue: any) => value.includes(optionValue),
    [value],
  );

  return {
    value,
    onChange: checkBoxGroupOnChange,
    isChecked,
    ...rest,
  };
}
