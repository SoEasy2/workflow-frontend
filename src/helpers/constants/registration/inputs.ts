import { IDefaultInput } from '../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { InputTypes } from '../enum';
import { isMobile } from 'react-device-detect';

const infoInputsDesktop: IDefaultInput[] = [
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

export const detailsInputsDesktop: IDefaultInput[] = [
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
    isSelect: true,
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

export const detailsInputsMobile: IDefaultInput[] = [
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
    isSelect: true,
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

const detailsInputs = isMobile ? detailsInputsMobile : detailsInputsDesktop;

export { detailsInputs };

const detailsConnectInputsDesktop:IDefaultInput[] = [
  {
    type: InputTypes.TEXT,
    placeholder: 'Text',
    label: 'Full name*',
    key: 'username',
    name: 'username',
    isShow: false,
    disabled: false,
  },
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

const detailsConnectInputsMobile:IDefaultInput[] = [];

const detailsConnectInputs = isMobile ? detailsConnectInputsMobile : detailsConnectInputsDesktop;

export{ detailsConnectInputs }

const loginInputsMobile: IDefaultInput[] = [];

const loginInputsDesktop: IDefaultInput[] = [
  {
    type: InputTypes.EMAIL_OR_PHONE,
    placeholder: 'E-mail or phone number',
    label: 'E-mail or phone number',
    key: 'login',
    name: 'login',
    isShow: false,
    disabled: false,
    required: true,
  },
  {
    type: InputTypes.PASSWORD,
    placeholder: 'Create password',
    label: 'Password*',
    key: 'password',
    name: 'password',
    isShow: false,
    disabled: false,
    required: true,
  },
];

const loginInputs = isMobile ? loginInputsMobile : loginInputsDesktop;

export { loginInputs };
