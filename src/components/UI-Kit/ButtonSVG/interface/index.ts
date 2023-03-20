import { ReactElement } from 'react';
import { ButtonTypes } from '../../../../helpers/constants/enum';

export interface IButtonProps {
  type: ButtonTypes;
  icon: ReactElement;
  onClick?: () => void;
  text?: string;
  className?: string;
}
