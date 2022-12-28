import { IRoute } from './types';
import { RegistrationPage, TestError } from '../../pages/Desktop';
import { UiKit } from '../../pages/Desktop/UI-KIT';
import { isMobile } from 'react-device-detect';
import { RegistrationMobile } from '../../pages/Mobile/AuthenticationMobile/RegistrationMobile';
import { LoginPage } from '../../pages/Desktop/Authentication/Login';
import { ConnectWithCodePage } from '../../pages/Desktop/Authentication/ConnectWithCode';
import { DashboardPage } from '../../pages/Desktop/Dashboard';

const desktopRoutes: IRoute[] = [
  {
    path: '/registration',
    component: <RegistrationPage />,
  },
  {
    path: '/login',
    component: <LoginPage />,
  },
  {
    path: '/connect-with-code',
    component: <ConnectWithCodePage />,
  },
  {
    path: '/dashboard',
    component: <DashboardPage />,
  },
  {
    path: '/tools/ui-kit',
    component: <UiKit />,
  },
  {
    path: '/*',
    component: <TestError />,
  },
];

const mobileRoutes: IRoute[] = [
  {
    path: '/registration',
    component: <RegistrationMobile />,
  },
];

const routes = isMobile ? mobileRoutes : desktopRoutes;

export { routes };
