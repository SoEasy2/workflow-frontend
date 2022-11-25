import { IModelValue } from '../../../components/UI-Kit/Inputs/DefaultInput/interface'

export const validateModelValue = (modelValue: IModelValue): number => {
  let countError = 0
  Object.keys(modelValue).forEach((object) => {
    if (modelValue[object].required) !modelValue[object].value && countError++
    if (modelValue[object].error.status !== null && !modelValue[object].error.status) countError++
  })
  return countError
}
