import { ReactElement } from 'react';
import { TestSvg } from '../components/Folder/shared/Test';

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

export const cards: MockTaskCard[] = [
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
