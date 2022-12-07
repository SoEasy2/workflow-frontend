import { IInput } from './types'

export const registerInputs: IInput[] = [
  {
    name: 'email',
    label: 'E-mail*',
    isRequired: true,
    isDisabled: false,
    placeholder: 'E-mail',
    type: 'email',
  },
]
