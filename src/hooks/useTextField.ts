import useCustomField, { UseCustomFieldOptions } from './useCustomField';

export type UseTextFieldOptions = UseCustomFieldOptions;

export function useTextField(options: UseTextFieldOptions) {
  return useCustomField(options);
}
