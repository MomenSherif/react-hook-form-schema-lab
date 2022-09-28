import useCustomField, { type UseCustomFieldOptions } from './useCustomField';

// TODO: Read props from component type
export type UseSelectOptions = {
  multiple?: boolean;
} & UseCustomFieldOptions;

export default function useSelect(options: UseSelectOptions) {
  return useCustomField({
    ...options,
    defaultValue: options.multiple ? [] : '',
  });
}
