import { useFormContext, useWatch } from 'react-hook-form';

import useDidUpdate from './useDidUpdate';

export default function useTriggerDepsValidation({
  name,
  validation,
}: {
  name: string;
  validation?: string;
}) {
  const { trigger } = useFormContext();
  const values = useWatch({
    name: validation?.match(/(?<=[:,]\$)\w+/g) || [], // match :$param | ,$param
  });

  useDidUpdate(() => {
    trigger(name);
  }, [values, name]);
}
