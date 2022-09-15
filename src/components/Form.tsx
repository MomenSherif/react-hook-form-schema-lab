import { forwardRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

export type FormProps = {
  onSubmit: (data: unknown) => void;
  children: React.ReactNode;
} & React.ComponentProps<'form'>;

export default forwardRef<HTMLFormElement, FormProps>(
  ({ onSubmit, ...props }, ref) => {
    const methods = useForm({
      mode: 'onTouched',
    });

    return (
      <FormProvider {...methods}>
        <form ref={ref} onSubmit={methods.handleSubmit(onSubmit)} {...props} />
      </FormProvider>
    );
  },
);
