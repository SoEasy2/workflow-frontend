import { StepEnum } from '../../../helpers/constants/registration/enums/step';
import { ICompany } from '../company.interface';

export interface IUser {
  id: string;
  email: string;
  phone: string;
  sendCodeDate: Date;
  codeEmail: string;
  stepRegistration: StepEnum;
  name?: string;
  currentCompany?: ICompany;
}
