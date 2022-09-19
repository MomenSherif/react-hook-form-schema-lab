import type { ComponentProps, ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import type {
  UseFormProps,
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from 'react-hook-form';

type FormProps<TFieldValues extends FieldValues> = {
  onSubmit: SubmitHandler<TFieldValues>;
  onError?: SubmitErrorHandler<TFieldValues>;
  children: ReactNode;
} & UseFormProps<TFieldValues> &
  Omit<ComponentProps<'form'>, 'onSubmit' | 'onError' | 'children'>;

export default function Form<TFieldValues extends FieldValues = FieldValues>({
  onSubmit,
  onError,
  mode = 'onTouched',
  reValidateMode = 'onChange',
  shouldUnregister = true,
  shouldFocusError = true,
  shouldUseNativeValidation = false,
  criteriaMode = 'firstError',
  context,
  defaultValues,
  delayError,
  resolver,
  ...formProps
}: FormProps<TFieldValues>) {
  const methods = useForm<TFieldValues>({
    defaultValues,
    mode,
    reValidateMode,
    criteriaMode,
    delayError,
    context,
    resolver,
    shouldUnregister,
    shouldFocusError,
    shouldUseNativeValidation,
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onError)} {...formProps} />
    </FormProvider>
  );
}
