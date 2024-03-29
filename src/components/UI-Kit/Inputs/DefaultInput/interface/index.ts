import React from 'react';
import { InputTypes } from '../../../../../helpers/constants/enum';
import { TypeValid } from '../../../../../helpers/constants/enum/typeHelper';
import { IOption } from '../../CustomSelect/components/Option/interface';

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
  classNamePositionHelper?: string;
  classNamePositionShowPass?: string;
  classNamePositionReset?: string;
  onFocus?: (callback: (status: boolean) => void, status: boolean) => void;
  typeValid?: TypeValid;
  isSelect?: boolean;
  withReset?: boolean;
  options?: IOption[];
}

export interface IModelValueInput {
  value: string;
  required: boolean;
  error: {
    status: null | boolean;
    text?: string;
  };
  prefix?: string;

  objectName?: string;
}
