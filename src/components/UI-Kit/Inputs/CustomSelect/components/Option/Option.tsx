import React from 'react';
import { IOption } from './interface';
import styles from './Option.module.scss'

const Component: React.FC<IOption> = ({ label }) => {
    return (
        <button className={styles.option}>
            {label}
        </button>
    );
};
const Option = React.memo(Component)

export { Option };