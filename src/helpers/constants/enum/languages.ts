import { IOption } from '../../../components/UI-Kit/Inputs/CustomSelect/components/Option/interface';
import { DefaultObject } from '../../../types/defaultObject';

export const Languages: DefaultObject<string> = {
  ENGLISH: 'en',
  RUSSIAN: 'ru',
  FRENCH: 'fr',
};

export enum EnumLanguages {
  ENGLISH = 'en',
  RUSSIAN = 'ru',
  FRENCH = 'fr',
}

export const languageOptions: IOption[] = Object.keys(Languages).map(
  (key) =>
    ({
      value: Languages[key],
      label: `${key.toLowerCase().charAt(0).toUpperCase()}${key.toLowerCase().slice(1)}`,
    } as unknown as IOption),
);
