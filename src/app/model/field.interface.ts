import { FieldConfig } from './field.interface';
export interface Validator {

    name: string;

    validator: any;

    message: string;

}

export interface FieldConfig {

    label?: string;

    name?: string;

    inputType?: string;

    options?: string[];

    collections?: any;

    type: string;

    value?: any;

    validations?: Validator[];


}
export class FieldConfigClass implements FieldConfig {
  label?: string;

  name?: string;

  inputType?: string;

  options?: string[];

  collections?: any;

  type: string;

  value?: any;

  validations?: Validator[];

 constructor() {
}

}
