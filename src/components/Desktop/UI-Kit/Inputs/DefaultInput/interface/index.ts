import React from 'react';
import { InputTypes } from '../../../../../../helpers/constants/enum';

export interface IModelValue {
  [U: string]: IModelValueInput;
}

export interface IDefaultInput {
  classNameWrapper?: string;
  classNameInput?: string;
  classNameLabel?: string;
  type: InputTypes;
  placeholder?: string;
  label?: string;
  key: string;
  name: string;
  modelValue?: IModelValue;
  onChange?: (key: string, value: IModelValueInput) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  isShow?: boolean;
  disabled?: boolean;
  required?: boolean;
  onBlur?: (
    typeInput: InputTypes,
    value: string,
    name: string,
    callback?: (data: boolean) => void,
  ) => void;
  prefix?: string;
}

export interface IModelValueInput {
  value: string;
  required: boolean;
  error: {
    status: null | boolean;
    text?: string;
  };
  prefix?: string;
}
