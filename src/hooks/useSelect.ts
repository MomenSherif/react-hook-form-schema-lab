import useCustomField, { type UseCustomFieldOptions } from './useCustomField';

export type UseSelectOptions = UseCustomFieldOptions;

export default function useSelect(options: UseSelectOptions) {
  return useCustomField(options);
}
