import { StepEnum } from '../enums/step';
import { StepConnect } from '../enums/stepConnect';

export enum TypeButtonRedirect {
  REGISTRATION = 1,
  LOGIN = 2,
  NO_BUTTON = 3,
}
export interface IStep {
  text: string;
  step: StepEnum | StepConnect;
  type: TypeButtonRedirect;
  isNotShow: boolean;
}
