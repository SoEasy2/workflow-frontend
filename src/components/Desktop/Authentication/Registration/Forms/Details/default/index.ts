import { IModelValue } from '../../../../../UI-Kit/Inputs/DefaultInput/interface';

export const defaultInputs: IModelValue = {
    fullName: {
        value: '',
        required: true,
        error: {
            status: null,
        },
        prefix: 'user'
    },
    companyName: {
        value: '',
        required: true,
        error: {
            status: null,
        },
        prefix: 'company',
    },
    password: {
        value: '',
        required: true,
        error: {
            status: null,
        },
        prefix: 'user',
    }
};
