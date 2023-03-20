import { IRoute } from './types';
import { RegistrationPage, TestError } from '../../pages/Desktop';
import { UiKit } from '../../pages/Desktop/UI-KIT';
import { isMobile } from 'react-device-detect';
import { RegistrationMobile } from '../../pages/Mobile/AuthenticationMobile/RegistrationMobile';
import { LoginPage } from '../../pages/Desktop/Authentication/Login';
import { ConnectWithCodePage } from '../../pages/Desktop/Authentication/ConnectWithCode';
import { DashboardPage } from '../../pages/Desktop/Dashboard';
import { TaskManagerPage } from '../../pages/Desktop/TaskManager';
import { RouteEnum } from './enum/route';

const desktopRoutes: IRoute[] = [
  {
    path: RouteEnum.REGISTRATION,
    component: <RegistrationPage />,
  },
  {
    path: RouteEnum.TASK_MANAGER,
    component: <TaskManagerPage />,
  },
  {
    path: RouteEnum.LOGIN,
    component: <LoginPage />,
  },
  {
    path: RouteEnum.CONNECT_WITH_CODE,
    component: <ConnectWithCodePage />,
  },
  {
    path: RouteEnum.DASHBOARD,
    component: <DashboardPage />,
  },
  {
    path: RouteEnum.UI_KIT,
    component: <UiKit />,
  },
  {
    path: RouteEnum.ERROR,
    component: <TestError />,
  },
];

const mobileRoutes: IRoute[] = [
  {
    path: RouteEnum.REGISTRATION,
    component: <RegistrationMobile />,
  },
];

const routes = isMobile ? mobileRoutes : desktopRoutes;

export { routes };
