import { Suspense } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import routes from './config'
// 拦截
const RouterBeforeEach = (props: { route: any; children: any }) => {
  if (props?.route?.meta?.title) {
    document.title = props.route.meta.title
  }
  // const isLogin: boolean = !!Cookies.get('userInfo')
  const isLogin = true

  if (props?.route?.meta?.isLogin) {
    if (!isLogin) {
      return <Navigate to={'/login'} replace />
    }
  }
  // const location = useLocation()
  const routerKey = location.pathname
  if (isLogin && ['/login'].includes(routerKey)) {
    return <Navigate to={'/'} replace />
  }
  return <Suspense>{props.children}</Suspense>
}
// 渲染路由
const renderRoutes = (routes: any) => {
  return routes.map((item: any) => {
    const route: any = { meta: item.meta, path: item.path }
    if (item.component) {
      route.element = (
        <RouterBeforeEach route={item}>
          {' '}
          <item.component />
        </RouterBeforeEach>
      )
    }
    if (item.children) {
      route.children = renderRoutes(item.children)
    }
    if (item.redirect) {
      route.element = <Navigate to={item.redirect} />
    }
    return route
  })
}
export default function Router() {
  return useRoutes(renderRoutes(routes))
}
