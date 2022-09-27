import useCustomField, { type UseCustomFieldOptions } from './useCustomField';

export type UseRadioGroupOptions = UseCustomFieldOptions;

export default function useRadioGroup(options: UseRadioGroupOptions) {
  return useCustomField({ ...options, defaultValue: null });
}
