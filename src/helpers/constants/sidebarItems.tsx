import { ISidebarItem } from './types/sidebar-item';
import { SidebarTypeItem } from './enum/sidebarTypeItem';
import {
  SidebarContactsIcon,
  SidebarFolderIcon,
  SidebarMyTasksIcon,
  SidebarNewsBoardIcon,
  SidebarStorageIcon,
  SidebarTaskManagerIcon,
  SidebarWorkStatusIcon,
} from '../icons/sidebar';

export const sidebarItems: ISidebarItem[] = [
  {
    type: SidebarTypeItem.DEFAULT,
    name: 'My tasks',
    icon: <SidebarMyTasksIcon />,
    withChildren: false,
  },
  {
    type: SidebarTypeItem.DEFAULT,
    name: 'Task Manager',
    icon: <SidebarTaskManagerIcon />,
    withChildren: true,
  },
  {
    type: SidebarTypeItem.DEFAULT,
    name: 'Storage',
    icon: <SidebarStorageIcon />,
    withChildren: false,
  },
  {
    type: SidebarTypeItem.FAVORITES,
    name: 'Folder name',
    icon: <SidebarFolderIcon />,
    withChildren: false,
  },
  {
    type: SidebarTypeItem.TEAM_MANAGE,
    name: 'Work status',
    icon: <SidebarWorkStatusIcon />,
    withChildren: false,
  },
  {
    type: SidebarTypeItem.TEAM_MANAGE,
    name: 'Contacts',
    icon: <SidebarContactsIcon />,
    withChildren: false,
  },
  {
    type: SidebarTypeItem.TEAM_MANAGE,
    name: 'News board',
    icon: <SidebarNewsBoardIcon />,
    withChildren: false,
  },
];
export const sidebarItemsDefault = sidebarItems.filter(
  (item) => item.type === SidebarTypeItem.DEFAULT,
);
export const sidebarItemsFavorite = sidebarItems.filter(
  (item) => item.type === SidebarTypeItem.FAVORITES,
);
export const sidebarItemsTeamManage = sidebarItems.filter(
  (item) => item.type === SidebarTypeItem.TEAM_MANAGE,
);
