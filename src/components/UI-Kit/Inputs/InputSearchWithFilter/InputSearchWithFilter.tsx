import React, { useState } from 'react';
import styles from './InputSearchWithFilter.module.scss';
import { SearchIcon } from '../../../../helpers/icons';
import cx from 'classnames';

interface IInputSearchWithFilter {
  placeholder?: string;
}

const Component: React.FC<IInputSearchWithFilter> = ({ placeholder }) => {
  const [isFocus, setFocus] = useState<boolean>(false);

  return (
    <div className={cx(styles.wrapper, isFocus && styles.wrapper__focus)}>
      <div className={styles.icon__search}>
        <SearchIcon />
      </div>
      <input
        placeholder={placeholder}
        type='text'
        className={cx(styles.input, isFocus && styles.input__focus)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </div>
  );
};

const InputSearchWithFilter = React.memo(Component);

export { InputSearchWithFilter };
