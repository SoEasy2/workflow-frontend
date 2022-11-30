import React from 'react';
import styles from './RegistrationMobile.module.scss'
import {
    RegistrationLayout
} from '../../../../components/Mobile/Authentication/Registration/Layout/RegistrationLayout/RegistrationLayout';
import { Welcome } from '../../../../components/Mobile/Authentication/Registration/Forms/Welcome';

const Component: React.FC = () => {
    return (
        <div className={styles.registration__mobile}>
            <RegistrationLayout>
                <Welcome />
            </RegistrationLayout>
        </div>
    );
};

const RegistrationMobile = React.memo(Component)

export { RegistrationMobile };