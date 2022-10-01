import React from 'react'
import { IButtonProps } from '../../../components/UI-Kit/Button/interface'
import { IDefaultInput } from '../../../components/UI-Kit/Inputs/DefaultInput/interface'

export interface IUIKit {
  name: string
  props: IButtonProps | IDefaultInput
  component: () => React.ReactNode
}
