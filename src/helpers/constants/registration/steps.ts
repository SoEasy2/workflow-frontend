import { StepEnum } from './enums/step';
import { IStep } from './types/steps';

export const steps: IStep[] = [
  {
    text: 'Registration',
    step: StepEnum.REGISTRATION,
  },
  {
    text: 'Please, verificate your e-mail',
    step: StepEnum.VERIFICATION,
  },
  {
    text: 'Company details',
    step: StepEnum.DETAILS,
  },
  {
    text: 'Login',
    step: StepEnum.LOGIN,
  },
];
