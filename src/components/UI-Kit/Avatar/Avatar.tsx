import React from 'react';
import { Members } from '../../../components/Desktop/FolderList/components/interface';
import styles from './Avatar.module.scss';
interface IAvatar {
  countOfMembers: Members[];
}

const Component: React.FC<IAvatar> = ({ countOfMembers }) => {
  const initials = countOfMembers[0]?.name.slice(0, 2).toUpperCase();
  const initials2 = countOfMembers[1]?.name.slice(0, 2).toUpperCase();

  return (
    <div className={styles.flex}>
      <div className={styles.Avatar}>{initials}</div>
      <div className={styles.Avatar}>{initials2}</div>
      <div className={styles.Counter}>+{countOfMembers.length - 2}</div>
    </div>
  );
};

const Avatar = React.memo(Component);

export { Avatar };
