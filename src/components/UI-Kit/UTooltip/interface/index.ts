import { IOffset } from '../../../../helpers/constants/types/offset';

export interface IUTooltip {
  text?: string;
  className?: string;
  timeout?: number;
  style?: object;
  offset: IOffset;
}
