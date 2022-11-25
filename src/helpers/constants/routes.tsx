import { IRoute } from './types';
import { Registration, TestError } from '../../pages';
import { UiKit } from '../../pages/UI-KIT';

export const routes: IRoute[] = [
  {
    path: '/registration',
    component: <Registration />,
  },
  {
    path: '/*',
    component: <TestError />,
  },
  {
    path: '/tools/ui-kit',
    component: <UiKit />,
  },
];
