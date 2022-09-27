import { useController } from 'react-hook-form';

import useValidation from './useValidation';
import useTriggerDepsValidation from './useTriggerDepsValidation';
import { CustomField } from '../types';

export type UseCustomFieldOptions = CustomField;

export default function useCustomField({
  name,
  validation,
}: UseCustomFieldOptions) {
  const validate = useValidation({ validation });
  useTriggerDepsValidation({ name, validation });

  const {
    field: { value, onChange, onBlur, ref },
    fieldState: { error, isDirty, isTouched },
  } = useController({
    name,
    defaultValue: '',
    rules: { validate },
  });

  return {
    name,
    value,
    onChange,
    onBlur,
    ref,
    error,
    isDirty,
    isTouched,
  };
}
