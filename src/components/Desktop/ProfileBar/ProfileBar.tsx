import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './ProfileBar.module.scss';
import { animated } from 'react-spring';
import { BarLayout } from '../../UI-Kit/BarLayout';
import cx from 'classnames';
import { ArrowHandleIcon } from '../../../helpers/icons';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';

interface IProfileBar {
  style?: object;
  setOpen: (data: boolean) => void;
}
const Component: React.FC<IProfileBar> = ({ setOpen, style }) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(contentRef, () => setOpen(false));

  return createPortal(
    <div className={styles.profileBar}>
      <animated.div style={{ ...style }}>
        <BarLayout innerRef={contentRef}>
          <div className={styles.profileBar__head}>
            <div className={styles.profileBar__wrapper}>
              <div className={styles.profileBar__head__status}>
                <div className={styles.status}>status</div>
                <div
                  className={cx(styles.close)}
                  onClick={() => setOpen(false)}
                >
                  <ArrowHandleIcon />
                </div>
              </div>
              <div className={styles.profileBar__head__user}>
                <div className={styles.profileBar__head__profile}>
                  <div className={styles.profileBar__head__img}>
                    <img
                      src='
                                        https://giffun.ru/wp-content/uploads/2019/04/kachat_krasivye_kartinki_na_telefon_besplatno_29_23075447-500x313.jpg
                                        '
                      alt='img'
                    />
                  </div>
                  <div className={styles.profileBar__head__username}>
                    <div className={styles.name}>Name Name</div>
                    <div className={styles.position}>Owner</div>
                  </div>
                </div>
                <div className={styles.profileBar__head__id}>ID: 0959595847</div>
              </div>
              <div className={styles.profileBar__head__tabs}>
                <div className={styles.profileBar__head__tab}>Personal details</div>
                <div className={styles.profileBar__head__tab}>Password</div>
                <div className={styles.profileBar__head__tab}>Settings</div>
              </div>
            </div>
          </div>
          <div className={styles.profileBar__form}>FORMA</div>
          <div className={styles.profileBar__complete}>
            <div className={styles.profileBar__wrapper}>
              <button>SAVE</button>
            </div>
          </div>
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};
const ProfileBar = React.memo(Component);

export { ProfileBar };
