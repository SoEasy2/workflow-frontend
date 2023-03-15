import React from 'react';
import { PlusFill, PlusNoFill, More } from '../../../helpers/icons/taskmanager';
import styles from './TaskManger.module.scss';

const Component: React.FC = () => {
  return (
    <div>
      <div className={styles.header}>
        <div className={styles.header__left}>Task manager</div>
        <div className={styles.header__right}>
          <div className={styles.header__right__btn_add_circle}>
            <PlusFill />
            <a
              href='#'
              className={styles.header__right__btn_add_circle__link}
            >
              New folder
            </a>
          </div>
          <div className={styles.header__right__btn_invite}>
            <PlusNoFill />
            <a
              href='#'
              className={styles.header__right__btn_invite__link}
            >
              Invite
            </a>
          </div>
          <div className={styles.header__right__btn_more}>
            <More />
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <img
          src='../../../../src/assets/images/bars/emptyState.jpg'
          alt='empyState'
          className={styles.content__img}
        />
        <div className={styles.content__text}>
          <div className={styles.content__text__title}>This folder is empty</div>
          <div className={styles.content__text__btn}>
            <PlusFill />
            <a
              href='#'
              className={styles.content__text__btn__link}
            >
              Add new folder
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const TaskManagerPage = React.memo(Component);

export { TaskManagerPage };
