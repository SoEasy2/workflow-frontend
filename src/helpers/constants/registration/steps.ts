import { StepEnum } from './enums/step';
import { IStep, TypeButtonRedirect } from './types/steps';
import { StepConnect } from './enums/stepConnect';

export const steps: IStep[] = [
  {
    text: 'Registration',
    step: StepEnum.REGISTRATION,
    type: TypeButtonRedirect.LOGIN,
    isNotShow: false,
  },
  {
    text: 'Please, verificate your e-mail',
    step: StepEnum.VERIFICATION,
    type: TypeButtonRedirect.LOGIN,
    isNotShow: false,
  },
  {
    text: 'Company details',
    step: StepEnum.DETAILS,
    type: TypeButtonRedirect.LOGIN,
    isNotShow: false,
  },
  {
    text: 'Login',
    step: StepEnum.LOGIN,
    type: TypeButtonRedirect.REGISTRATION,
    isNotShow: true,
  },
];
export const stepsConnect: IStep[] = [
  {
    text: 'Connect with code',
    step: StepConnect.CONNECT_WITH_CODE,
    type: TypeButtonRedirect.LOGIN,
    isNotShow: true,
  },
  {
    text: 'Registration',
    step: StepConnect.CONNECT_DETAILS,
    type: TypeButtonRedirect.LOGIN,
    isNotShow: false,
  },
  {
    text: 'Please, verificate your e-mail',
    step: StepConnect.CONNECT_VERIFICATION,
    type: TypeButtonRedirect.NO_BUTTON,
    isNotShow: false,
  },
];
