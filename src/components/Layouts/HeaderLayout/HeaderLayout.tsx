import React, { PropsWithChildren } from 'react';
import styles from './HeaderLayout.module.scss';

const HeaderLayout:React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <header className={styles.header}>
            <div className={styles.header__wrapper}>
                { children }
            </div>
        </header>
    );
};

export { HeaderLayout };