import React, { useRef, useState } from 'react'
import styles from './Item.module.scss'
import { HelpIcon } from '../../../helpers/icons'

import { Transition } from 'react-transition-group'
import '../../../sass/_abstract/_transition.scss'
interface IItemProps {
  name: string
  component: React.ReactNode
  props: any
}
const Item: React.FC<IItemProps> = ({ name, component }) => {
  const [isHelp, setIsHelp] = useState<boolean>(false)
  const duration = 300
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }
  // const transitionStyles = {
  //   entering: { opacity: 1 },
  //   entered: { opacity: 1 },
  //   exiting: { opacity: 0 },
  //   exited: { opacity: 0 },
  // }
  const nodeRef = useRef(null)
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
        <Transition nodeRef={nodeRef} in={isHelp} timeout={duration}>
          {(state) => {
            console.log('STATE', state)
            return (
              <div
                ref={nodeRef}
                style={{
                  ...defaultStyle,
                }}
              >
                Im a fade Transition!
              </div>
            )
          }}
        </Transition>
        );
      </div>
    </div>
  )
}

export { Item }
