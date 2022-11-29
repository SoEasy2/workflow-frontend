import { IDefaultInput } from '../../../components/Desktop/UI-Kit/Inputs/DefaultInput/interface';
import { InputTypes } from '../enum';

export const infoInputs: IDefaultInput[] = [
  {
    type: InputTypes.EMAIL,
    placeholder: 'email',
    label: 'E-mail*',
    key: 'email',
    name: 'email',
    isShow: false,
    disabled: false,
    required: true,
  },
  {
    type: InputTypes.PHONE,
    placeholder: 'Phone number*',
    label: 'Phone number*',
    key: 'phone',
    name: 'phone',
    isShow: false,
    disabled: false,
    required: true,
  },
];
export const detailsInputs: IDefaultInput[] = [
  {
    type: InputTypes.TEXT,
    placeholder: 'Text',
    label: 'Full name*',
    key: 'fullName',
    name: 'fullName',
    isShow: false,
    disabled: false,
    prefix: 'user',
  },
  {
    type: InputTypes.TEXT,
    placeholder: 'Text',
    label: 'Company name*',
    key: 'companyName',
    name: 'companyName',
    isShow: false,
    disabled: false,
    prefix: 'company'
  },
  {
    type: InputTypes.TEXT,
    placeholder: 'Choose',
    label: 'Amount of employees',
    key: 'amountOfEmployees',
    name: 'amountOfEmployees',
    isShow: false,
    disabled: false,
    prefix: 'company'
  },
  {
    type: InputTypes.PASSWORD,
    placeholder: 'Create password',
    label: 'Password*',
    key: 'password',
    name: 'password',
    isShow: true,
    disabled: false,
    prefix: 'user',
  },
];
