import { ButtonsVariants } from '../../components/UI-Kit/Button/ui';
import { IUIKit } from './types';
import { InputsVariants } from '../../components/UI-Kit/Inputs/DefaultInput/ui';
import { select } from '../../components/UI-Kit/Inputs/CustomSelect/ui';

export const uiKitList: IUIKit[] = [...ButtonsVariants, ...InputsVariants, ...select];
