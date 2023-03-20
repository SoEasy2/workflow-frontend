import React from 'react';
import styles from './CustomInput.module.scss';

interface ICustomInput {
  handleChangeInput: (string: string) => void;
}

const Component: React.FC<ICustomInput> = ({ handleChangeInput }) => {
  return (
    <input
      className={styles.customInput}
      type='text'
      placeholder='Type something...'
      onChange={(e) => handleChangeInput(e.target.value)}
    />
  );
};

const CustomInput = React.memo(Component);

export { CustomInput };
