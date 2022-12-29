import React, { useState } from 'react';
import styles from './Topbar.module.scss';
import { NotificationIcon } from '../../../helpers/icons';
import { Timer } from './components/Timer';
import { InputSearchWithFilter } from '../../UI-Kit/Inputs/InputSearchWithFilter/InputSearchWithFilter';
import { NotificationBar } from '../NotificationBar';
import { barTransitions } from '../../../helpers/constants';

const Component: React.FC = () => {
  const [isNotification, setNotification] = useState<boolean>(false);
  const notificationBarTransition = barTransitions(isNotification);
  return (
    <>
      {/* { isNotification &&*/}
      {/*    <NotificationBar*/}
      {/*      isOpen={isNotification}*/}
      {/*      setOpen={setNotification}*/}
      {/*   />*/}
      {/* }*/}
      {notificationBarTransition(
        (style, item) =>
          item && (
            <NotificationBar
              setOpen={setNotification}
              style={style}
            />
          ),
      )}
      <div className={styles.topbar}>
        <div className={styles.topbar__wrapper}>
          <div className={styles.topbar__search}>
            <InputSearchWithFilter placeholder={'Search folders, tasks, document'} />
          </div>
          <div className={styles.user}>
            <div className={styles.user__timer}>
              <Timer />
            </div>
            <div className={styles.user__divider} />
            <div
              className={styles.user__notification}
              onClick={() => setNotification(true)}
            >
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
    </>
  );
};

const Topbar = React.memo(Component);

export { Topbar };
