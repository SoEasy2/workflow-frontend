import React, { useId } from 'react';
import { Folder } from './components/Folder';
import styles from './FolderList.module.scss';
import { cards } from './mockData';

const Component: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {cards.map((elem) => {
        return (
          <Folder
            key={useId()}
            type={elem.type}
            color={elem.color}
            icon={elem.icon}
            title={elem.title}
            creator={elem.creator}
            countOfTasks={elem.countOfTasks}
            countOfMembers={elem.countOfMembers}
            newTasks={elem.newTasks}
            newAlerts={elem.newAlerts}
          />
        );
      })}
    </div>
  );
};

const FolderList = React.memo(Component);

export { FolderList };
