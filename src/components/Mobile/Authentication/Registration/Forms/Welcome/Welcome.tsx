import React from 'react';
import styles from './Welcome.module.scss';
import { PreviewLogoIcon } from '../../../../../../helpers/iconsMobile';

const Component: React.FC = () => {
    return (
        <div className={styles.welcome}>
            <div className={styles.welcome__wrapper}>
                <div className={styles.welcome__logo}>
                    <PreviewLogoIcon />
                </div>
                <div className={styles.welcome__slider}>
                    Slider
                </div>
                <div className={styles.welcome__buttons}>
                    <button>Registration</button>
                    <button>Sign in</button>
                    <button>You have code? Join your team</button>
                </div>
            </div>
        </div>
    );
};

const Welcome = React.memo(Component)

export { Welcome };