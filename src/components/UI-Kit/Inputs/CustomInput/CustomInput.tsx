import React from 'react';
import styles from './CustomInput.module.scss';

const Component: React.FC = () => {
  return (
    <input
      className={styles.customInput}
      type='text'
      placeholder='Type something...'
    />
  );
};

const CustomInput = React.memo(Component);

export { CustomInput };
