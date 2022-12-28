import React from 'react';
import styles from './Timer.module.scss';
import cx from 'classnames';
import { TimerPlayIcon } from '../../../../../helpers/icons';

const Component: React.FC = () => {
  return (
    <div className={styles.timer}>
      <button className={styles.timer__button}>
        <TimerPlayIcon />
      </button>
      <div className={styles.timer__time}>
        <div className={cx(styles.time, styles.minutes)}>00</div>
        <span>:</span>
        <div className={cx(styles.time, styles.seconds)}>00</div>
        <span>:</span>
        <div className={cx(styles.time, styles.milliseconds)}>00</div>
      </div>
    </div>
  );
};

const Timer = React.memo(Component);

export { Timer };
