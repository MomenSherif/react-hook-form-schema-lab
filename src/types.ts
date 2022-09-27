export interface CustomField {
  name: string;
  label?: string;
  placeholder?: string;
  validation?: string;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  defaultValue?: any;
}
