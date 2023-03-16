import React from 'react';
import { PlusFill, PlusNoFill, More } from '../../../helpers/icons/taskmanager';
import styles from './TaskManger.module.scss';
import { Topbar } from '../../../components/Desktop/Topbar';
import { Sidebar } from '../../../components/Desktop/Sidebar';
import image from '../../../../src/assets/images/bars/emptyState.png';
import { ButtonSVG } from '../../../components/UI-Kit/ButtonSVG';
import { ButtonTypes } from '../../../helpers/constants/enum';

const Component: React.FC = () => {
  return (
    <div className={styles.taskmanager}>
      <Sidebar />
      <div className={styles.taskmanager__content}>
        <Topbar />
        <div className={styles.header}>
          <div className={styles.header__left}>Task manager</div>
          <div className={styles.header__right}>
            <ButtonSVG
              icon={<PlusFill />}
              type={ButtonTypes.ACTIVE}
              className={styles.button}
              text={'New folder'}
              onClick={() => console.log('click')}
            />

            <ButtonSVG
              icon={<PlusNoFill />}
              type={ButtonTypes.ACTIVE}
              className={styles.button}
              text={'Invite'}
              onClick={() => console.log('click')}
            />

            <ButtonSVG
              icon={<More />}
              type={ButtonTypes.ACTIVE}
              className={styles.button}
              text={''}
              onClick={() => console.log('click')}
            />
          </div>
        </div>

        <div className={styles.content}>
          <img
            src={image}
            alt='empyState'
            className={styles.content__img}
          />

          <div className={styles.content__title}>This folder is empty</div>
          <ButtonSVG
            icon={<PlusFill />}
            type={ButtonTypes.ACTIVE}
            className={styles.button}
            text={'Add new folder'}
            onClick={() => console.log('click')}
          />
        </div>
      </div>
    </div>
  );
};

const TaskManagerPage = React.memo(Component);

export { TaskManagerPage };
