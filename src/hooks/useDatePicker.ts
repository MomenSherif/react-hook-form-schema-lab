import useCustomField, { UseCustomFieldOptions } from './useCustomField';

export type UseDatePickerOptions = UseCustomFieldOptions;

export function useDatePicker(options: UseDatePickerOptions) {
  return useCustomField({ ...options, defaultValue: null });
}
