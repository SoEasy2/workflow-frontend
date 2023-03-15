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
  countOfTasks: number;
  countOfMembers: Members[];
  newTasks: number;
  newAlerts: number;
}

const Component: React.FC = () => {
  const cards: MockTaskCard[] = [
    {
      type: 'default',
      icon: <TestSvg />,
      color: '#C9C7EF',
      title: 'New Folder',
      creator: 'Katerina Abravavava',
      countOfTasks: 5,
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
      newTasks: 12,
      newAlerts: 5,
    },
    {
      type: 'purchase',
      icon: <TestSvg />,
      color: '#F1C7C4',
      title: 'New Folder 2',
      creator: 'Vanya Smolasdasd',
      countOfTasks: 2,
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
      newTasks: 2,
      newAlerts: 4,
    },
    {
      type: 'default',
      icon: <TestSvg />,
      color: '#C9C7EF',
      title: 'New Folder',
      creator: 'Katerina Abravavava',
      countOfTasks: 5,
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
      newTasks: 12,
      newAlerts: 5,
    },
    {
      type: 'purchase',
      icon: <TestSvg />,
      color: '#F1C7C4',
      title: 'New Folder 2',
      creator: 'Vanya Smolasdasd',
      countOfTasks: 2,
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
      newTasks: 2,
      newAlerts: 4,
    },
    {
      type: 'default',
      icon: <TestSvg />,
      color: '#C9C7EF',
      title: 'New Folder',
      creator: 'Katerina Abravavava',
      countOfTasks: 5,
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
      newTasks: 12,
      newAlerts: 5,
    },
    {
      type: 'purchase',
      icon: <TestSvg />,
      color: '#F1C7C4',
      title: 'New Folder 2',
      creator: 'Vanya Smolasdasd',
      countOfTasks: 2,
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
      newTasks: 2,
      newAlerts: 4,
    },
    {
      type: 'default',
      icon: <TestSvg />,
      color: '#C9C7EF',
      title: 'New Folder',
      creator: 'Katerina Abravavava',
      countOfTasks: 5,
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
      newTasks: 12,
      newAlerts: 5,
    },
    {
      type: 'purchase',
      icon: <TestSvg />,
      color: '#F1C7C4',
      title: 'New Folder 2',
      creator: 'Vanya Smolasdasd',
      countOfTasks: 2,
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
      newTasks: 2,
      newAlerts: 4,
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
