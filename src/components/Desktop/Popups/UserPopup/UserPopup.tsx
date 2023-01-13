import React, { useRef } from 'react';
import styles from './UserPopup.module.scss';
import { animated } from 'react-spring';
import useClickOutside from '../../../../hooks/clickOutside/useClickOutside';
import { useAppSelector } from '../../../../hooks/redux';

interface IUserPopup {
  style?: object;
  setOpen: (data: boolean) => void;
  setOpenProfile: (data: boolean) => void;
  setOpenAdminSettings: (data: boolean) => void;
}
const Component: React.FC<IUserPopup> = ({
  style,
  setOpen,
  setOpenProfile,
  setOpenAdminSettings,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  const { user } = useAppSelector((state) => state.user);

  useClickOutside(contentRef, () => setOpen(false));

  const handleClickProfile = () => {
    setOpen(false);
    setOpenProfile(true);
  };

  const handleClickAdminSettings = () => {
    setOpen(false);
    setOpenAdminSettings(true);
  };

  return (
    <animated.div style={{ ...style }}>
      <div
        className={styles.userPopup}
        ref={contentRef}
      >
        <div className={styles.userPopup__content}>
          <div className={styles.userPopup__info}>
            <div className={styles.userPopup__img}>
              <img
                src='https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg'
                alt='profile img'
              />
            </div>
            <div className={styles.userPopup__username}>
              <div className={styles.name}>{user?.username}</div>
              <div className={styles.position}>Owner</div>
            </div>
          </div>
          <div className={styles.divider} />
          <div className={styles.userPopup__vacation}>
            <div className={styles.userPopup__label}>Vacation status</div>
            <div className={styles.userPopup__radioButton}>
              <input type='radio' />
            </div>
          </div>
          <div className={styles.divider} />
          <button
            className={styles.userPopup__button}
            onClick={handleClickProfile}
          >
            My profile
          </button>
          <button
            className={styles.userPopup__button}
            onClick={handleClickAdminSettings}
          >
            Admin settings
          </button>
          <button className={styles.userPopup__button}>Archive</button>
          <div className={styles.divider} />
          <button className={styles.userPopup__button}>Sign out</button>
        </div>
      </div>
      ,
    </animated.div>
  );
};
const UserPopup = React.memo(Component);

export { UserPopup };
