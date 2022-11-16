import { StepEnum } from '../../../helpers/constants/registration/enums/step';

export interface IUser {
    id: string;
    email: string;
    phone: string;
    stepRegistration: StepEnum;
}