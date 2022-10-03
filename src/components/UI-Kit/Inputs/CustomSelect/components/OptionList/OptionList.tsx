import React, { useId } from 'react'
import { IOption } from '../Option/interface'
import styles from './OptionList.module.scss'
import { Option } from '../Option'

interface IOptionList {
  options: IOption[]
  handleClick: (option: IOption) => void
}
const Component: React.FC<IOptionList> = ({ options, handleClick }) => {
  return (
    <div className={styles.optionList}>
      {options.map((option) => (
        <Option option={option} key={useId()} handleClick={handleClick} />
      ))}
    </div>
  )
}
const OptionList = React.memo(Component)

export { OptionList }
