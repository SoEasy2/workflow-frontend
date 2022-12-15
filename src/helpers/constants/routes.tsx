import { IRoute } from './types';
import { RegistrationPage, TestError } from '../../pages/Desktop';
import { UiKit } from '../../pages/Desktop/UI-KIT';
import { isMobile } from 'react-device-detect';
import { RegistrationMobile } from '../../pages/Mobile/AuthenticationMobile/RegistrationMobile';
import { LoginPage } from '../../pages/Desktop/Authentication/Login';

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
    path: '/*',
    component: <TestError />,
  },
  {
    path: '/tools/ui-kit',
    component: <UiKit />,
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
