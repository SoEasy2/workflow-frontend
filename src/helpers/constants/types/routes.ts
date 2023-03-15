import React from 'react';
import { RouteEnum } from '../enum/route';
export interface IRoute {
  path: RouteEnum;
  component: React.ReactNode;
  exact?: boolean;
}
