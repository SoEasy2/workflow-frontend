import React from 'react';
import { ButtonTypes } from '../../../helpers/constants/enum';
import cx from 'classnames';
import styles from './ButtonSVG.module.scss';
import { IButtonProps } from './interface';

const Component: React.FC<IButtonProps> = ({ type, icon, onClick, text, className }) => {
  return (
    <button
      className={cx(
        styles.buttonSVG,
        type === ButtonTypes.ACTIVE && styles.active,
        type === ButtonTypes.DISABLED && styles.disabled,
        className,
      )}
      onClick={onClick}
    >
      <div className={styles.buttonSVG__content}>
        <div className={styles.buttonSVG__svg}>{icon}</div>
        <div className={styles.buttonSVG__text}>{text}</div>
      </div>
    </button>
  );
};

const ButtonSVG = React.memo(Component);

export { ButtonSVG };
