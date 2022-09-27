import useCustomField, { type UseCustomFieldOptions } from './useCustomField';

export type UseCheckboxOptions = UseCustomFieldOptions;

export default function useCheckbox(options: UseCheckboxOptions) {
  return useCustomField({ ...options, defaultValue: false });
}
