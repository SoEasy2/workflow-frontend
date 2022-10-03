import React from 'react';
import styles from './CustomSelect.module.scss';

const Component: React.FC = () => {
    return (
        <div className={styles.select}>
            <button>
                <span>Choose</span>
            </button>
        </div>
    );
};
const CustomSelect = React.memo(Component)

export { CustomSelect };