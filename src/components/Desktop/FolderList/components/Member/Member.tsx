import React from 'react';
import { Avatar } from '../../../../UI-Kit/Avatar';
import { Members } from '../interface';
import styles from './Member.module.scss';

interface IMembers {
  countOfMembers: Members[];
}

const Component: React.FC<IMembers> = ({ countOfMembers }) => {
  return (
    <div className={styles.Members}>
      <p>Members</p>
      <Avatar countOfMembers={countOfMembers} />
    </div>
  );
};

const Member = React.memo(Component);

export { Member };
