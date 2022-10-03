import React from 'react'
import { IOptionProps } from './interface'
import styles from './Option.module.scss'

const Component: React.FC<IOptionProps> = ({ option, handleClick }) => {
  return (
    <button className={styles.option} onClick={() => handleClick(option)}>
      {option.label}
    </button>
  )
}
const Option = React.memo(Component)

export { Option }
