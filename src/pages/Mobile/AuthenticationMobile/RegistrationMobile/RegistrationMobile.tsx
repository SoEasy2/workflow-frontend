import React from 'react';
import styles from './RegistrationMobile.module.scss';
import { RegistrationLayout } from '../../../../components/Mobile/Authentication/Registration/Layout/RegistrationLayout/RegistrationLayout';
import { Welcome } from '../../../../components/Mobile/Authentication/Registration/Forms/Welcome';
import { Info } from '../../../../components/Mobile/Authentication/Registration/Forms/Info/Info';
import {
    Verification
} from '../../../../components/Mobile/Authentication/Registration/Forms/Verification/Verification';

const Component: React.FC = () => {
    console.log(Welcome);
    console.log(Info)
  return (
    <div className={styles.registration__mobile}>
      <RegistrationLayout>
          <Verification />
      </RegistrationLayout>
    </div>
  );
};

const RegistrationMobile = React.memo(Component);

export { RegistrationMobile };
