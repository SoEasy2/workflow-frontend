import React from 'react';
import { FolderList } from '../../../components/Desktop/FolderList';
import { Sidebar } from '../../../components/Desktop/Sidebar';
import { Topbar } from '../../../components/Desktop/Topbar';
import styles from './Dashboard.module.scss';

const Component: React.FC = () => {
  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.dashboard__content}>
        <Topbar />
        <FolderList />
      </div>
    </div>
  );
};

const DashboardPage = React.memo(Component);

export { DashboardPage };
