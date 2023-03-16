import React from 'react';
import { ButtonTypes } from '../../../helpers/constants/enum';
import cx from 'classnames';
import styles from './ButtonSVG.module.scss';
import { IButtonProps } from './interface';

const Component: React.FC<IButtonProps> = ({ type, icon, onClick, text, className }) => {
  return (
    <div className={styles.buttonSVG}>
      <button
        className={cx(
          styles.button,
          type === ButtonTypes.ACTIVE && styles.active,
          type === ButtonTypes.DISABLED && styles.disabled,
          className,
        )}
        onClick={onClick}
      >
        <div className={styles.buttonSVG__svg}>{icon}</div>
        {text}
      </button>
    </div>
  );
};

const ButtonSVG = React.memo(Component);

export { ButtonSVG };
