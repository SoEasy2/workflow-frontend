import {
  IModelValue,
  IModelValueInput,
} from '../../components/UI-Kit/Inputs/DefaultInput/interface';
import { useCallback, useState } from 'react';
import { InputTypes } from '../../helpers/constants/enum';
import { checkValidValueInput } from '../../helpers/constants/validate/checkValidValueInput';

export const useInput = (defaultValue: IModelValue) => {
  const [modelValue, setModelValue] = useState<IModelValue>(defaultValue);

  const handleChangeInput = useCallback(
    (name: string, modelValue: IModelValueInput) => {
      setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], ...modelValue } }));
    },
    [modelValue],
  );

  const handleBlur = useCallback(
    (typeInput: InputTypes, value: string, name: string, callback?: (data: boolean) => void) => {
      if (!checkValidValueInput(typeInput, value)) {
        setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: false } } }));
        callback && callback(false);
        return;
      }
      setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: true } } }));
      callback && callback(true);
    },
    [modelValue],
  );

  return { modelValue, handleChangeInput, handleBlur, setModelValue };
};
