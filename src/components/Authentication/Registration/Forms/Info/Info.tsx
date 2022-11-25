import React, { useId, useState } from 'react'
import styles from './Info.module.scss'
import { infoInputs } from '../../../../../helpers/constants/registration/inputs'
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../../../../graphql/auth/registration/mutations'
import { useCookies } from 'react-cookie'
import { setupUser } from '../../../../../helpers/setupUser'
import { useAppDispatch } from '../../../../../hooks/redux'
import { userSlice } from '../../../../../redux/user/slices/UserSlice'
import { defaultInputs } from './default'
import { IModelValue, IModelValueInput } from '../../../../UI-Kit/Inputs/DefaultInput/interface'
import { checkValidValueInput } from '../../../../../helpers/constants/validate/checkValidValueInput'
import { InputTypes } from '../../../../../helpers/constants/enum'
import { validateModelValue } from '../../../../../helpers/constants/validate/validateModelValue'

const Component: React.FC = () => {
  const [, setCookie] = useCookies()
  const dispatch = useAppDispatch()

  const { userSet } = userSlice.actions

  const [handleRegister] = useMutation(REGISTER_USER, {
    onCompleted: async (data) => {
      const { registerUser } = data
      setupUser(registerUser.tokens, setCookie)
      await dispatch(userSet(registerUser.user))
    },
  })

  const [modelValue, setModelValue] = useState<IModelValue>(defaultInputs)

  const handleChangeInput = (name: string, modelValue: IModelValueInput) => {
    setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], ...modelValue } }))
  }

  const handleBlur = (
    typeInput: InputTypes,
    value: string,
    name: string,
    callback?: (data: boolean) => void,
  ) => {
    const isValidInput = checkValidValueInput(typeInput, value)
    if (!isValidInput) {
      setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: false } } } ) )
      callback && callback(false)
      return
    }
    setModelValue((prev) => ({ ...prev, [name]: { ...prev[name], error: { status: true } } } ) )
    callback && callback(true)
  }

  const handleSubmit = async () => {
    const countError = validateModelValue(modelValue)
    if (countError) return
    await handleRegister({
      variables: {
        user: {
          email: modelValue.email.value,
          phone: modelValue.phone.value,
        },
      },
    })
    setModelValue(defaultInputs)
  }

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <>
      <div className={styles.formInfo__wrapper__title}>
        <h4 className={styles.formInfo__title}>Welcome</h4>
        <div className={styles.formInfo__description}>
          lets get started with a few simple steps!
        </div>
      </div>
      <div className={styles.formInfo__form}>
        {infoInputs.map((i) => (
          <DefaultInput
            type={i.type}
            key={useId()}
            name={i.name}
            label={i.label}
            modelValue={modelValue}
            onChange={handleChangeInput}
            onKeyPress={handleKey}
            onBlur={handleBlur}
          />
        ))}
        <div className={styles.formInfo__wrapper__button}>
          <button className={styles.formInfo__button} onClick={handleSubmit}>
            Get started
          </button>
        </div>
      </div>
      <div className={styles.formInfo__login}>
        <span>You have a code?</span>
        <button>Join your team</button>
      </div>
    </>
  )
}
const Info = React.memo(Component)

export { Info }
