import { IModelValue } from '../../../../../../UI-Kit/Inputs/DefaultInput/interface';

export const defaultInputs: IModelValue = {
  fullName: {
    value: '',
    required: true,
    error: {
      status: null,
    },
    prefix: 'user',
    objectName: 'username',
  },
  companyName: {
    value: '',
    required: true,
    error: {
      status: null,
    },
    prefix: 'company',
    objectName: 'name',
  },
  amountOfEmployees: {
    value: '',
    required: true,
    error: {
      status: null,
    },
    prefix: 'company',
    objectName: 'amountOfEmployees',
  },
  password: {
    value: '',
    required: true,
    error: {
      status: null,
    },
    prefix: 'user',
    objectName: 'password',
  },
};
