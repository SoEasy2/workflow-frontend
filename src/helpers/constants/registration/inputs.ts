import { IDefaultInput } from '../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { InputTypes } from '../enum';
import { isMobile } from 'react-device-detect';

export const infoInputsDesktop: IDefaultInput[] = [
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

const infoInputsMobile: IDefaultInput[] = [
  {
    type: InputTypes.EMAIL,
    placeholder: 'Use work e-mail',
    label: 'Work e-mail*',
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

const infoInputs = isMobile ? infoInputsMobile : infoInputsDesktop;

export { infoInputs };

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
    prefix: 'company',
  },
  {
    type: InputTypes.TEXT,
    placeholder: 'Choose',
    label: 'Amount of employees',
    key: 'amountOfEmployees',
    name: 'amountOfEmployees',
    isShow: false,
    disabled: false,
    prefix: 'company',
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
