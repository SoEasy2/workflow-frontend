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
    type: InputTypes.TEXT,
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
    type: InputTypes.TEXT,
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
    type: InputTypes.TEXT,
    placeholder: 'Choose date',
    label: 'Birthday',
    key: 'manager',
    name: 'manager',
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
    type: InputTypes.TEXT,
    placeholder: 'Add more details to your profile',
    label: 'Descriptor',
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
