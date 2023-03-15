import React, { ReactElement, useId } from 'react';
import { TaskCard } from './components/TaskCard';
import { TestSvg } from './components/TaskCard/shared/Test';
import styles from './TaskManager.module.scss';

interface MockTaskCard {
  type: string;
  icon: ReactElement;
  color: string;
  title: string;
  creator: string;
  countOfTasks: number;
  countOfMembers: { link: string; name: string }[];
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
          <TaskCard
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

const TaskManager = React.memo(Component);

export { TaskManager };
