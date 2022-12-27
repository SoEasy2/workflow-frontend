import { IOption } from '../components/Option/interface';

export interface ISelect {
  options: IOption[];
  value?: ISelect;
  handleChange?: (value: ISelect) => void;
  placeholder?: string;
}
