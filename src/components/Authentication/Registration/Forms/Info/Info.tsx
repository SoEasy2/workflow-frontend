import React, { useId } from 'react'
import styles from './Info.module.scss'
import { infoInputs } from '../../../../../helpers/constants/registration/inputs'
import { DefaultInput } from '../../../../UI-Kit/Inputs/DefaultInput'
const Component: React.FC = () => {
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
          <DefaultInput type={i.type} key={useId()} name={i.name} label={i.label} />
        ))}
        <div className={styles.formInfo__wrapper__button}>
          <button className={styles.formInfo__button}>Get started</button>
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
