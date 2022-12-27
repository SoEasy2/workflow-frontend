import React from 'react';
import { ButtonTypes } from '../../../helpers/constants/enum';
import cx from 'classnames';
import styles from './Button.module.scss';
import { IButtonProps } from './interface';

const Component: React.FC<IButtonProps> = ({ type, onClick, text, className }) => {
  return (
    <button
      className={cx(
        styles.button,
        type === ButtonTypes.ACTIVE && styles.active,
        type === ButtonTypes.DISABLED && styles.disabled,
        className,
      )}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

const Button = React.memo(Component);

export { Button };
