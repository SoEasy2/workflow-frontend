import React from 'react';
import styles from './SidebarItem.module.scss';
import { ISidebarItem } from '../../../../../helpers/constants/types/sidebar-item';
import { SidebarCloseIcon } from '../../../../../helpers/icons/sidebar';
import { useNavigate } from 'react-router';

interface IItem {
  item: ISidebarItem;
}
const Component: React.FC<IItem> = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.item}>
      {item.withChildren && (
        <div className={styles.children}>
          <SidebarCloseIcon />
        </div>
      )}
      <div className={styles.item__wrapper}>
        <div
          className={styles.item__info}
          onClick={() => item.to && navigate(item.to)}
        >
          <div className={styles.item__icon}>{item.icon}</div>
          <div className={styles.item__name}>{item.name}</div>
        </div>
        <div className={styles.counter}>
          <div className={styles.counter__unread}>0</div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = React.memo(Component);

export { SidebarItem };
