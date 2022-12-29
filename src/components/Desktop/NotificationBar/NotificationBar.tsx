import React, { useRef, useState } from 'react';
import styles from './NotificationBar.module.scss';
import { BarLayout } from '../../UI-Kit/BarLayout';
import cx from 'classnames';
import { ArrowHandleIcon } from '../../../helpers/icons';
import NotificationBarEmpty from '../../../assets/images/bars/notificationBarEmpty.jpg';
import { createPortal } from 'react-dom';
import { animated } from 'react-spring';
import useOnClickOutside from '../../../hooks/clickOutside/useClickOutside';

interface INotificationBar {
  setOpen: (data: boolean) => void;
  style?: object;
}
type TypeTab = 'ALL' | 'UNREAD';
const Component: React.FC<INotificationBar> = ({ setOpen, style }) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState<TypeTab>('ALL');

  useOnClickOutside(contentRef, () => setOpen(false));

  return createPortal(
    <div className={styles.notificationBar}>
      <animated.div style={{ ...style }}>
        <BarLayout innerRef={contentRef}>
          <div className={styles.notificationBar__close}>
            <div
              className={cx(styles.close)}
              onClick={() => setOpen(false)}
            >
              <ArrowHandleIcon />
            </div>
          </div>
          <div className={styles.notificationBar__title}>
            <h4 className={styles.title}>Notification</h4>
          </div>
          <div className={styles.notificationBar__tabs}>
            <button
              className={cx(
                styles.notificationBar__tab,
                styles.notificationBar__tab_all,
                activeTab === 'ALL' && styles.notificationBar__tab_active,
              )}
              name={'ALL'}
              onClick={() => setActiveTab('ALL')}
            >
              All
            </button>
            <button
              className={cx(
                styles.notificationBar__tab,
                styles.notificationBar__tab_unread,
                activeTab === 'UNREAD' && styles.notificationBar__tab_active,
              )}
              name={'UNREAD'}
              onClick={() => setActiveTab('UNREAD')}
            >
              Unread
            </button>
          </div>
          <hr className={styles.hr} />
          <div
            className={cx(styles.notificationBar__content, styles.notificationBar__content_empty)}
          >
            <img
              src={NotificationBarEmpty}
              alt='empty bar img'
            />
          </div>
        </BarLayout>
      </animated.div>
    </div>,
    document.body,
  );
};

const NotificationBar = React.memo(Component);

export { NotificationBar };
