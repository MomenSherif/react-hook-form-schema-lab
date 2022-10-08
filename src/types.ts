export interface Option {
  label: React.ReactNode;
  value: any;
  [key: string]: any;
}

export interface CustomField {
  name: string;
  label: string;
  placeholder?: string;
  validation?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: any;
}

export interface CheckboxProps extends Omit<CustomField, 'placeholder'> {}

export interface CheckboxGroupProps extends CheckboxProps {
  options: Option[];
}
export interface RadioGroupProps extends CheckboxProps {
  options: Option[];
}

export interface SelectProps extends CustomField {
  options: Option[];
  multiple?: boolean;
}
export interface DepSelectProps extends CustomField {
  optionsMap: Record<string, Option[]>;
  multiple?: boolean;
  dependency: string;
  autoFocusOnDepChange?: boolean;
}

export interface TextFieldProps extends CustomField {}
export interface DatePickerProps extends CustomField {}
