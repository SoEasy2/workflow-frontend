import React, { useState } from 'react'
import { IDefaultInput } from './interface'
import cx from 'classnames'
import styles from './DefaultInput.module.scss'
import { HelperHideIcon, HelperRemoveIcon, HelperShowIcon } from '../../../../helpers/icons/helper'
import { InputTypes } from '../../../../helpers/constants/enum'

const Component: React.FC<IDefaultInput> = ({
  key,
  name,
  modelValue,
  type = InputTypes.TEXT,
  classNameInput,
  classNameLabel,
  classNameWrapper,
  isShow,
}) => {
  const [value, setValue] = useState<string>(modelValue ? modelValue[name] : '')
  const [typeInput, setTypeInput] = useState<InputTypes>(type)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const handleClickReset = () => {
    setValue('')
  }
  return (
    <div className={cx(styles.input__wrapper, classNameWrapper)}>
      <label htmlFor={key} className={cx(styles.label, classNameLabel)}>
        {name}
      </label>
      <input
        type={typeInput}
        id={key}
        name={name}
        value={value}
        onChange={handleChange}
        className={cx(styles.input, classNameInput)}
      />
      <div className={styles.helper}>
        {value.length > 0 && type === InputTypes.TEXT && (
          <div className={styles.helper__remove} onClick={handleClickReset}>
            <HelperRemoveIcon />
          </div>
        )}
        {isShow && (
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
