import React from 'react'
import { Header } from '../../../components/Authentication/Header'
import { Layout } from '../../../components/Authentication/Layout'
import { Step } from '../../../components/Authentication/Registration/Step'
import styles from './Registration.module.scss'
const Component: React.FC = () => {
  return (
    <div className={styles.registration}>
      <Header />
      <Layout>
          <Step />
      </Layout>
    </div>
  )
}
const Registration = React.memo(Component)

export { Registration }
