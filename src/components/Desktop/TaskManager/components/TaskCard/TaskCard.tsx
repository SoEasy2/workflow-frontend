import React, { ReactElement } from 'react';
import { Avatar } from '../Avatar';
import styles from './TaskCard.module.scss';

interface ITaskCard {
  type: string;
  icon: ReactElement;
  color: string;
  title: string;
  creator: string;
  countOfTasks: number;
  countOfMembers: {
    link: string;
    name: string;
  }[];
  newTasks: number;
  newAlerts: number;
}

const Component: React.FC<ITaskCard> = ({
  type,
  icon,
  color,
  title,
  creator,
  countOfTasks,
  countOfMembers,
  newTasks,
  newAlerts,
}) => {
  function cutTextToFitWidth(text: string, maxWidth: number): string {
    if (text.length <= 1) return text;
    const ellipsis = '...';
    const context = document.createElement('canvas').getContext('2d');
    context.font = getComputedStyle(document.body).font;
    while (
      context.measureText(text).width > maxWidth - context.measureText(ellipsis).width &&
      text.length > 0
    ) {
      text = text.slice(0, -1);
    }
    return text.length <= 1 ? text : text.slice(0, -1) + ellipsis;
  }

  console.log(type);

  return (
    <div className={styles.card}>
      <div
        className={styles.card__top}
        style={{ background: color }}
      >
        <div className={styles.card__icon}>{icon}</div>
        <div>
          <span className={styles.card__title}>{title}</span>
          <div className={styles.card__folder}>
            <p className={styles.card__creator}>{cutTextToFitWidth(creator, 100)}</p>
            <p className={styles.card__dot}></p>
            <p className={styles.card__task}>{countOfTasks} tasks</p>
          </div>
        </div>
      </div>

      <div className={styles.card__bottom_block}>
        <div className={styles.card__members}>
          <p>Members</p>
          <Avatar countOfMembers={countOfMembers} />
        </div>

        <div className={styles.card__counter}>
          <p className={styles.card__newTasks}>{newTasks} new</p>
          <p className={styles.card__newAlerts}>{newAlerts} alerts</p>
        </div>
      </div>
    </div>
  );
};

const TaskCard = React.memo(Component);

export { TaskCard };
