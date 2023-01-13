import { IDefaultInput } from '../../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { InputTypes } from '../../enum';
import { isMobile } from 'react-device-detect';

const companyDetailsDesktop: IDefaultInput[] = [
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
const companyDetailsMobile: IDefaultInput[] = [];
const companyDetails = isMobile ? companyDetailsMobile : companyDetailsDesktop;

export { companyDetails };
