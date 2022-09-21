import styles from './MainLayout.module.scss';
import React, { PropsWithChildren } from 'react';
const MainLayout:React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className={styles.layout}>
            { children }
        </div>
    );
};

export { MainLayout };