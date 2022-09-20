import { IRoute } from './types'
import { Test, TestError } from '../../pages'

export const routes: IRoute[] = [
  {
    path: '/',
    component: <Test />,
  },
  {
    path: '/*',
    component: <TestError />,
  },
]
