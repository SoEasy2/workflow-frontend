import React from 'react'
import { IButtonProps } from '../../../components/UI-Kit/Button/interface'
import { IDefaultInput } from '../../../components/UI-Kit/Inputs/DefaultInput/interface'
import { ISelect } from '../../../components/UI-Kit/Inputs/CustomSelect/interface';

export interface IUIKit {
  name: string
  props: IButtonProps | IDefaultInput | ISelect
  component: () => React.ReactNode
}
