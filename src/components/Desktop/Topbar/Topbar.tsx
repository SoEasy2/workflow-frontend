import React from 'react';
import styles from './Topbar.module.scss';
import { NotificationIcon } from '../../../helpers/icons';
import { Timer } from './components/Timer';

const Component: React.FC = () => {
  return (
    <div className={styles.topbar}>
      <div className={styles.topbar__wrapper}>
        <div className='topbar__search'>search input</div>
        <div className={styles.user}>
          <div className={styles.user__timer}>
            <Timer />
          </div>
          <div className={styles.user__divider} />
          <div className={styles.user__notification}>
            <NotificationIcon />
          </div>
          <div className={styles.user__image}>
            <img
              src='https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg'
              alt='profile img'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Topbar = React.memo(Component);

export { Topbar };
