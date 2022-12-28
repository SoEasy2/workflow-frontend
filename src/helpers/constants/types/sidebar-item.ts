import React from 'react';
import { SidebarTypeItem } from '../enum/sidebarTypeItem';

export interface ISidebarItem {
  icon: React.ReactNode;
  type: SidebarTypeItem;
  name: string;
  withChildren: boolean;
}
