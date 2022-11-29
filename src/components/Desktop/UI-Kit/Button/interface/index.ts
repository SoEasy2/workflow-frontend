import { ButtonTypes } from '../../../../../helpers/constants/enum';

export interface IButtonProps {
  type: ButtonTypes;
  onClick?: () => void;
  text?: string;
  className?: string;
}
