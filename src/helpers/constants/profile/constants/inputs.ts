import { IDefaultInput } from '../../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { isMobile } from 'react-device-detect';
import { InputTypes } from '../../enum';

const personalProfileInputsDesktop: IDefaultInput[] = [
  {
    type: InputTypes.PHONE,
    placeholder: 'Phone',
    label: 'Phone',
    key: 'phone',
    name: 'phone',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.EMAIL,
    placeholder: 'E-mail',
    label: 'E-mail',
    key: 'email',
    name: 'email',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.SELECT,
    placeholder: 'Choose',
    label: 'Department',
    key: 'department',
    name: 'department',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.SELECT,
    placeholder: 'Choose',
    label: 'Manager',
    key: 'manager',
    name: 'manager',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.DATE,
    placeholder: 'Choose date',
    label: 'Birthday',
    key: 'birthday',
    name: 'birthday',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.TEXT,
    placeholder: 'Text',
    label: 'Address',
    key: 'address',
    name: 'address',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.TEXTAREA,
    placeholder: 'Add more details to your profile',
    label: 'Description',
    key: 'description',
    name: 'description',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
];
const personalProfileInputsMobile: IDefaultInput[] = [];
const personalProfileInputs = isMobile ? personalProfileInputsMobile : personalProfileInputsDesktop;

export { personalProfileInputs };

const changePasswordInputsDesktop: IDefaultInput[] = [
  {
    type: InputTypes.PASSWORD,
    placeholder: 'Enter current password',
    label: 'Current password',
    key: 'password',
    name: 'password',
    isShow: true,
    disabled: false,
    required: true,
    withReset: false,
  },
  {
    type: InputTypes.PASSWORD,
    placeholder: 'Create new password',
    label: 'New password',
    key: 'newPassword',
    name: 'newPassword',
    isShow: true,
    disabled: false,
    required: true,
    withReset: false,
  },
];
const changePasswordInputsMobile: IDefaultInput[] = [];
const changePasswordInputs: IDefaultInput[] = isMobile
  ? changePasswordInputsMobile
  : changePasswordInputsDesktop;
export { changePasswordInputs };

const settingInputsDesktop: IDefaultInput[] = [
  {
    type: InputTypes.SELECT,
    placeholder: 'Choose',
    label: 'Language',
    key: 'language',
    name: 'language',
    isShow: false,
    disabled: false,
    required: true,
    withReset: false,
  },
];
const settingInputsMobile: IDefaultInput[] = [];
const settingInputs: IDefaultInput[] = isMobile ? settingInputsMobile : settingInputsDesktop;
export { settingInputs };
