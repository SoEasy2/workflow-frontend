import React from 'react'
import { IButtonProps } from '../../../components/UI-Kit/Button/interface'

export interface IUIKit {
  name: string
  props: IButtonProps
  component: () =>  React.ReactNode
}
