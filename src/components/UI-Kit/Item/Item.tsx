import React from 'react'
import styles from './Item.module.scss'
interface IItemProps {
  name: string
  component: React.ReactNode
}
const Item: React.FC<IItemProps> = ({ name, component }) => {
  return (
    <div className={styles.item}>
      <div className='item__title'>
        <h6>Name: {name} </h6>
        <div className={'item__component'}>{component}</div>
        <div className={'item__popup'}>PROPS</div>
      </div>
    </div>
  )
}

export { Item }
