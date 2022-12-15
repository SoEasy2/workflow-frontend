import React from 'react';
import styles from './Login.module.scss';
import { Header } from '../../../../components/Desktop/Authentication/Header';
import { Layout } from '../../../../components/Desktop/Authentication/Layout';
import { Step } from '../../../../components/Desktop/Authentication/Step';
import { ModalLayout } from '../../../../components/Desktop/Authentication/ModalLayout';
import { StepEnum } from '../../../../helpers/constants/registration/enums/step';
import { Login } from '../../../../components/Desktop/Authentication/Forms/Login';

const Component: React.FC = () => {
  return (
    <div className={styles.login}>
      <Header />
      <Layout>
        <Step stepNumber={StepEnum.LOGIN} />
        <ModalLayout>
          <Login />
        </ModalLayout>
      </Layout>
    </div>
  );
};

const LoginPage = React.memo(Component);

export { LoginPage };
