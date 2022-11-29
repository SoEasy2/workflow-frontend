import { ButtonsVariants } from '../../components/Desktop/UI-Kit/Button/ui';
import { IUIKit } from './types';
import { InputsVariants } from '../../components/Desktop/UI-Kit/Inputs/DefaultInput/ui';
import { select } from '../../components/Desktop/UI-Kit/Inputs/CustomSelect/ui';

export const uiKitList: IUIKit[] = [...ButtonsVariants, ...InputsVariants, ...select];
