import React from 'react'
import styles from './Registration.module.scss'
const Component: React.FC = () => {
  return <div className={styles.registration}></div>
}
const Registration = React.memo(Component)

export { Registration }
