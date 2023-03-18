import React, { useState } from 'react';
import { CreateFolderBar } from '../../../components/Desktop/CreateFolderBar';
import { Sidebar } from '../../../components/Desktop/Sidebar';
import { Topbar } from '../../../components/Desktop/Topbar';
import { barTransitions } from '../../../helpers/constants';
import styles from './Dashboard.module.scss';

const Component: React.FC = () => {
  const [isPopupFolder, setPopupFolder] = useState<boolean>(true);
  const popupFolderTransition = barTransitions(isPopupFolder);

  return (
    <div className={styles.dashboard}>
      <Sidebar />
      <div className={styles.dashboard__content}>
        <Topbar />
        <div
          style={{ border: '1px solid black', width: '150px', height: '150px' }}
          onClick={() => setPopupFolder(true)}
        >
          {popupFolderTransition(
            (style, item) =>
              item && (
                <CreateFolderBar
                  setOpen={setPopupFolder}
                  style={style}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
};

const DashboardPage = React.memo(Component);

export { DashboardPage };
