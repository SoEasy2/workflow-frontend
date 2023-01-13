import { OptionEnum } from '../../../../../../../helpers/constants/registration/enums/option';
import { EnumLanguages } from '../../../../../../../helpers/constants/enum/languages';

export interface IOption {
  value: OptionEnum | EnumLanguages;
  label: string;
}
export interface IOptionProps {
  option: IOption;
  handleClick?: (option: IOption) => void;
}
