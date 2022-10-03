import { IDefaultInput } from '../../../components/UI-Kit/Inputs/DefaultInput/interface';
import { InputTypes } from '../enum';

export const infoInputs:IDefaultInput[] = [
    {
        type: InputTypes.TEXT,
        placeholder: 'email',
        label: 'E-mail*',
        key: 'email',
        name: 'email',
        isShow: false,
        disabled: false,
    },
    {
        type: InputTypes.TEXT,
        placeholder: 'Phone number*',
        label: 'Phone number*',
        key: 'phone',
        name: 'phone',
        isShow: false,
        disabled: false,
    }
 ]