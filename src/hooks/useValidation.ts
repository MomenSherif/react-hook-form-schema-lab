import { useCallback, useMemo } from 'react';
import { useFormContext } from 'react-hook-form';
import RegExpParser from '../utils/RegExpParser';

const numberRegExp = /^[+-]?([0-9]+[.])?[0-9]+$/; // Integer & Float
const integerRegExp = /^[+-]?[0-9]+$/; // Integer only
const floatRegExp = /^[+-]?([0-9]+[.])[0-9]+$/; // Float only
const alphaRegExp = /^[\p{L}\p{M}]+$/u; // Any character
const alphaNumericRegExp = /^[\p{L}\p{M}\d]+$/u; // Any character & numbers
const alphaSpacesRegExp = /^[\p{L}\p{M}]+(\s[\p{L}\p{M}]+)*$/u; // Any character & spaces between only

type ValidationRules = Record<string, (value: any, ...args: any[]) => boolean>;

const validationFunctions: ValidationRules = {
  required: value => !!value,
  minLength: (value, min) => (value ? value.length >= Number(min) : true),
  maxLength: (value, max) => (value ? value.length <= Number(max) : true),
  length: (value, min, max) =>
    value
      ? Number(value.length) >= Number(min) &&
        Number(value.length) <= Number(max)
      : true,
  startsWith: (value, searchString) =>
    value ? value.startsWith(searchString) : true,
  endsWith: (value, searchString) =>
    value ? value.endsWith(searchString) : true,
  alpha: value => (value ? alphaRegExp.test(value) : true),
  alphaNumeric: value => (value ? alphaNumericRegExp.test(value) : true),
  alphaSpaces: value => (value ? alphaSpacesRegExp.test(value) : true),
  matches: (value, pattern) =>
    value ? RegExpParser(pattern).test(value) : true,
  number: value => (value ? numberRegExp.test(value) : true),
  integer: value => (value ? integerRegExp.test(value) : true),
  float: value => (value ? floatRegExp.test(value) : true),
  min: (value, min) => (value ? Number(value) >= Number(min) : true),
  max: (value, max) => (value ? Number(value) <= Number(max) : true),
  between: (value, min, max) =>
    value ? Number(value) >= Number(min) && Number(value) <= Number(max) : true,
};

type UseValidationOptions = {
  validation?: string;
};

export default function useValidation({ validation }: UseValidationOptions) {
  const { getValues } = useFormContext();

  const prepareArgumentValues = useCallback(
    (args?: string[]) =>
      args?.map(arg => (/^\$/.test(arg) ? getValues(arg.slice(1)) : arg)) ?? [],
    [getValues],
  );

  const validate = useMemo(() => {
    const validationStrings = validation?.split('|');
    if (!validationStrings?.length) return undefined;

    const validationRules = validationStrings.reduce((acc, curr) => {
      const [operation, args] = curr.split(':') as [string, string | undefined];
      if (!validationFunctions[operation])
        throw new Error(
          `"${operation}" is not valid, Available validations (${Object.keys(
            validationFunctions,
          ).join(', ')})`,
        );

      acc[operation] = (v: any) =>
        validationFunctions[operation](
          v,
          ...prepareArgumentValues(args?.split(',')),
        );
      return acc;
    }, {} as Record<string, any>);

    return validationRules;
  }, [validation, prepareArgumentValues]);

  return validate;
}
