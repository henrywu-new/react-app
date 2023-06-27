import { lazy } from 'react'

const Home = lazy(() => import('@/pages/home'))
const Login = lazy(() => import('@/pages/login'))
const NotFound = lazy(() => import('@/pages/404'))

export default [
  {
    path: '/',
    meta: {
      title: '首页',
      isLogin: true,
    },
    component: Home,
  },
  {
    path: '/login',
    meta: {
      title: '登录',
    },
    component: Login,
  },
  {
    path: '*',
    meta: {
      title: '404',
    },
    component: NotFound,
  },
]
