import React, { useState } from 'react'
import styles from './Item.module.scss'
import { HelpIcon } from '../../../helpers/icons'
import '../../../sass/_abstract/_transition.scss'
interface IItemProps {
  name: string
  component: React.ReactNode
  props: any
}
const Item: React.FC<IItemProps> = ({ name, component }) => {
  const [isHelp, setIsHelp] = useState<boolean>(false)
  return (
    <div className={styles.item}>
      <div className='item__title'>
        <h6>Name: {name} </h6>
      </div>
      <div className={'item__component'}>{component}</div>
      <div className={'item__popup'}>
        <div className={styles.item__icon} onClick={() => setIsHelp(!isHelp)}>
          <HelpIcon />
        </div>
      </div>
    </div>
  )
}

export { Item }
