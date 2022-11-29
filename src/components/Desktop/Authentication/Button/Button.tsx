import React from 'react';
import cx from 'classnames';
import styles from './Button.module.scss';

interface IButton {
  onClick: () => void;
  text: string;
  disabled?: boolean;
}
const Component: React.FC<IButton> = ({ onClick, text, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cx(styles.button, disabled && styles.button_disabled)}
    >
      {text}
    </button>
  );
};
const Button = React.memo(Component);

export { Button };
