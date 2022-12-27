import { StepEnum } from '../../../helpers/constants/registration/enums/step';
import { ICompany } from '../company.interface';
import { TypeRegistration } from '../../../helpers/constants/registration/enums/typeRegistration';
import { StepConnect } from '../../../helpers/constants/registration/enums/stepConnect';

export interface IUser {
  id: string;
  email: string;
  phone: string;
  sendCodeDate: Date;
  codeEmail: string;
  stepRegistration: StepEnum | StepConnect;
  name?: string;
  currentCompany?: ICompany;

  typeRegistration: TypeRegistration;
}
