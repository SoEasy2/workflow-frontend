import { IRoute } from './types'
import { Registration, TestError } from '../../pages'

export const routes: IRoute[] = [
  {
    path: '/',
    component: <Registration />,
  },
  {
    path: '/*',
    component: <TestError />,
  },
]
