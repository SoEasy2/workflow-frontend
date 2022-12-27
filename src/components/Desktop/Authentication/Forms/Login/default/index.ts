import { IModelValue } from '../../../../../UI-Kit/Inputs/DefaultInput/interface';

export const defaultInputs: IModelValue = {
  login: {
    value: '',
    required: true,
    error: {
      status: null,
    },
  },
  password: {
    value: '',
    required: true,
    error: {
      status: null,
    },
  },
};
