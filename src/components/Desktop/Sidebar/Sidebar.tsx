import React, { useId } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarLayout } from './components/SidebarLayout';
import { LogoIcon } from '../../../helpers/icons';
import {
  sidebarItemsDefault,
  sidebarItemsFavorite,
  sidebarItemsTeamManage,
} from '../../../helpers/constants';
import { SidebarItem } from './components/SidebarItem';

interface ISidebar {
  classNameLayout?: string;
}
const Component: React.FC<ISidebar> = ({ classNameLayout }) => {
  return (
    <div className={styles.sidebar}>
      <SidebarLayout classNameLayout={classNameLayout}>
        <div className={styles.sidebar__logo}>
          <LogoIcon />
        </div>
        <div className={styles.sidebar__list}>
          <div className={styles.sidebar__default}>
            {sidebarItemsDefault.map((item) => (
              <SidebarItem
                item={item}
                key={useId()}
              />
            ))}
          </div>
          <div className={styles.sidebar__favorites}>
            <div className={styles.sidebar__title}>Favorites (1)</div>
            <div className={styles.list}>
              {sidebarItemsFavorite.map((item) => (
                <SidebarItem
                  item={item}
                  key={useId()}
                />
              ))}
            </div>
          </div>
          <div className='sidebar__teamMenage'>
            <div className={styles.sidebar__title}>Team Manage</div>
            <div className={styles.list}>
              {sidebarItemsTeamManage.map((item) => (
                <SidebarItem
                  item={item}
                  key={useId()}
                />
              ))}
            </div>
          </div>
        </div>
      </SidebarLayout>
    </div>
  );
};

const Sidebar = React.memo(Component);

export { Sidebar };
