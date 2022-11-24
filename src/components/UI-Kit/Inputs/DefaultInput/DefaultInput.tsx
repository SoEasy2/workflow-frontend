import React, { useState } from 'react'
import { IDefaultInput } from './interface'
import cx from 'classnames'
import styles from './DefaultInput.module.scss'
import { HelperHideIcon, HelperRemoveIcon, HelperShowIcon } from '../../../../helpers/icons/helper'
import { InputTypes } from '../../../../helpers/constants/enum'
import PhoneInput from 'react-phone-number-input/input'

const Component: React.FC<IDefaultInput> = ({
  key,
  name,
  modelValue,
  type = InputTypes.TEXT,
  classNameInput,
  classNameLabel,
  classNameWrapper,
  isShow,
  disabled = false,
  label,
  onChange,
  onKeyPress,
}) => {
  const [value, setValue] = useState<string>(modelValue ? modelValue[name] : '')
  const [typeInput, setTypeInput] = useState<InputTypes>(type)
  const handleChange = (value: string) => {
    setValue(value)
    onChange && onChange(name, value)
  }
  const handleClickReset = () => {
    setValue('')
  }
  return (
    <div
      className={cx(
        styles.input__wrapper,
        disabled && styles.input__wrapper_disable,
        classNameWrapper,
      )}
    >
      <label htmlFor={key} className={cx(styles.label, classNameLabel)}>
        {label}
      </label>
      {typeInput === InputTypes.PHONE ? (
        <PhoneInput
          type={typeInput}
          id={key}
          name={name}
          value={value}
          onChange={handleChange}
          className={cx(styles.input, classNameInput)}
          disabled={disabled}
          onKeyPress={onKeyPress}
        />
      ) : (
        <input
          type={typeInput}
          id={key}
          name={name}
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)}
          className={cx(styles.input, classNameInput)}
          disabled={disabled}
          onKeyPress={onKeyPress}
        />
      )}
      <div className={styles.helper}>
        {!disabled &&
          value &&
          value.length > 0 &&
          (type === InputTypes.TEXT || type === InputTypes.PHONE) && (
            <div className={styles.helper__remove} onClick={handleClickReset}>
              <HelperRemoveIcon />
            </div>
          )}
        {!disabled && isShow && (
          <div
            className={styles.helper__showIcon}
            onClick={() =>
              setTypeInput((prev) =>
                prev === InputTypes.TEXT ? InputTypes.PASSWORD : InputTypes.TEXT,
              )
            }
          >
            {typeInput === InputTypes.TEXT ? (
              <HelperShowIcon />
            ) : (
              <div className={styles.helper__hideIcon_top}>
                <HelperHideIcon />
              </div>
            )}
          </div>
        )}
        {/* <div className={styles.helper__valid}>
                    <HelperValidIcon />
                </div>*/}
      </div>
    </div>
  )
}

const DefaultInput = React.memo(Component)

export { DefaultInput }
