import { IModelValue } from '../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { Dispatch, SetStateAction } from 'react';

export const validateModelValue = (
  modelValue: IModelValue,
  callback?: Dispatch<SetStateAction<IModelValue>>,
) => {
  let countError = 0;
  Object.keys(modelValue).forEach((key) => {
    if (modelValue[key].required && !modelValue[key].value) {
      countError++;
      callback &&
        callback((prev) => ({ ...prev, [key]: { ...prev[key], error: { status: true } } }));
    }
    if (modelValue[key].error.status !== null && !modelValue[key].error.status) countError++;
  });
  return countError;
};
