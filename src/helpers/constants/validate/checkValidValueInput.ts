import { InputTypes } from '../enum';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { EMAIL_REGEXP_VALID } from '../regexp';

export const checkValidValueInput = (typeInput: InputTypes, value: string): boolean => {
  switch (typeInput) {
    case InputTypes.PHONE: {
      return isValidPhoneNumber(value);
    }
    case InputTypes.EMAIL: {
      return EMAIL_REGEXP_VALID.test(value);
    }
    case InputTypes.EMAIL_OR_PHONE: {
      return isValidPhoneNumber(value) || EMAIL_REGEXP_VALID.test(value);
    }
    default:
      return true;
  }
};
