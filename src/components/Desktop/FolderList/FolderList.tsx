import React, { ReactElement, useId } from 'react';
import { Folder } from './components/Folder';
import { TestSvg } from './components/Folder/shared/Test';
import styles from './FolderList.module.scss';

interface Members {
  link: string;
  name: string;
}

interface MockTaskCard {
  type: string;
  icon: ReactElement;
  color: string;
  title: string;
  creator: string;
  countOfTasks: string;
  countOfMembers: Members[];
  newTasks: string;
  newAlerts: string;
}

const Component: React.FC = () => {
  const cards: MockTaskCard[] = [
    {
      type: 'default',
      icon: <TestSvg />,
      color: '#C9C7EF',
      title: 'New Folder',
      creator: 'Katerina Abravavava',
      countOfTasks: '5 tasks',
      countOfMembers: [
        {
          link: '/',
          name: 'Vwnya',
        },
        {
          link: '/',
          name: 'Roman',
        },
        {
          link: '/',
          name: 'Donbass',
        },
        {
          link: '/',
          name: 'Belarus',
        },
        {
          link: '/',
          name: 'Donbass',
        },
        {
          link: '/',
          name: 'Belarus',
        },
      ],
      newTasks: '12 tasks',
      newAlerts: '14 alerts',
    },
    {
      type: 'purchase',
      icon: <TestSvg />,
      color: '#F1C7C4',
      title: 'New Folder 2',
      creator: 'Vanya Smolasdasd',
      countOfTasks: '2 tasks',
      countOfMembers: [
        {
          link: '/',
          name: 'Vanya',
        },
        {
          link: '/',
          name: 'Roman',
        },
        {
          link: '/',
          name: 'Donbass',
        },
        {
          link: '/',
          name: 'Belarus',
        },
      ],
      newTasks: '5 tasks',
      newAlerts: '7 alerts',
    },
  ];
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
