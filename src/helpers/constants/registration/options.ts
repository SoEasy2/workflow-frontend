import { IOption } from '../../../components/UI-Kit/Inputs/CustomSelect/components/Option/interface'
import { OptionEnum } from './enums/option'

export const detailsOptions: IOption[] = [
  {
    label: '0-10',
    value: OptionEnum.TEN,
  },
  {
    label: '10-20',
    value: OptionEnum.TWENTY,
  },
  {
    label: '20-40',
    value: OptionEnum.FORTY,
  },
  {
    label: '50+',
    value: OptionEnum.FIFTY,
  },
]
