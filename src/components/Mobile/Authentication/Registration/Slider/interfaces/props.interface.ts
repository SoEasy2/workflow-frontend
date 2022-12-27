import { ICustomSettings } from './customSettings.interface';
import { ISliderItem } from '../SliderItem/interfaces';

export interface IProps {
  customSettings?: ICustomSettings;
  slides: ISliderItem[];
  className?: string;
}
