import React from 'react';
import styles from './Header.module.scss';
import { LogoIcon } from '../../../helpers/icons';
import { Button } from '../../UI-Kit/Button';
import { ButtonTypes } from '../../../helpers/constants/enum';

const Component: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                <LogoIcon />
                <Button type={ButtonTypes.ACTIVE} text={'Sign in'} />
            </div>
        </header>
    );
};
const Header = React.memo(Component)

export { Header };