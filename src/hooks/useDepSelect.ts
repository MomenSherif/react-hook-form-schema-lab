import { useFormContext, useWatch } from 'react-hook-form';
import useCustomField, { type UseCustomFieldOptions } from './useCustomField';
import useDidUpdate from './useDidUpdate';

type Option = {
  label: React.ReactNode;
  value: any;
  [key: string]: any;
};

export type UseDepSelectOptions = {
  optionsMap: Record<string, Option[]>;
  multiple?: boolean;
  dependency: string;
  autoFocusOnDepChange?: boolean;
} & UseCustomFieldOptions;

export default function useDepSelect(options: UseDepSelectOptions) {
  const { setFocus, setValue } = useFormContext();

  const { name, dependency, multiple, optionsMap, autoFocusOnDepChange } =
    options;

  const dependencyValue = useWatch({ name: dependency });

  useDidUpdate(() => {
    setValue(name, multiple ? [] : '');
    if (autoFocusOnDepChange) setFocus(name);
  }, [name, multiple, dependencyValue, setValue]);

  return {
    options: optionsMap[dependencyValue] ?? [],
    ...useCustomField({
      ...options,
      defaultValue: options.multiple ? [] : '',
    }),
  };
}
