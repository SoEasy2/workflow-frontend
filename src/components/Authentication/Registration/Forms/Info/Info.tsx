import React, { useId, useState } from 'react'
import styles from './Info.module.scss'
import { infoInputs } from '../../../../../helpers/constants/registration/inputs'
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput'
import { useMutation } from '@apollo/client'
import { REGISTER_USER } from '../../../../../graphql/auth/registration/mutations'
import { RegistrationInterface } from './interfaces'
import { useCookies } from 'react-cookie'
import { setupUser } from '../../../../../helpers/setupUser'
import { useAppDispatch } from '../../../../../hooks/redux'
import { userSlice } from '../../../../../redux/user/slices/UserSlice'

const Component: React.FC = () => {
  const [, setCookie] = useCookies()
  const dispatch = useAppDispatch()

  const { userSet } = userSlice.actions

  const [handleRegister, { loading, error, data }] = useMutation(REGISTER_USER, {
    onCompleted: async (data) => {
      const { registerUser } = data
      setupUser(registerUser.tokens, setCookie)
      await dispatch(userSet(registerUser.user))
    },
  })

  const [modelValue, setModelValue] = useState<RegistrationInterface>({
    email: '',
    phone: '',
  })

  const handleChangeInput = (name: string, value: string) => {
    setModelValue((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    // infoInputs.forEach(input => {
    //     if (input.required && !modelValue[input.name]) {
    //         console.log('error')
    //     }
    // })
    console.log(loading, error, data)
    await handleRegister({
      variables: {
        user: {
          email: modelValue.email,
          phone: modelValue.phone,
        },
      },
    })
    Object.keys(modelValue).forEach((key) => {
      setModelValue((prev) => ({ ...prev, [key]: '' }))
    })
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
