import React from 'react'
import { InputTypes } from '../../../../../helpers/constants/enum'

export interface IDefaultInput {
  classNameWrapper?: string
  classNameInput?: string
  classNameLabel?: string
  type: InputTypes
  placeholder?: string
  label?: string
  key: string
  name: string
  modelValue?: any
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isShow?: boolean
  disabled?: boolean
}
