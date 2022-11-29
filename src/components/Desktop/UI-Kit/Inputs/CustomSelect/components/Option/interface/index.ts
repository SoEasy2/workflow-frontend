import { OptionEnum } from '../../../../../../../../helpers/constants/registration/enums/option';

export interface IOption {
  value: OptionEnum;
  label: string;
}
export interface IOptionProps {
  option: IOption;
  handleClick: (option: IOption) => void;
}
