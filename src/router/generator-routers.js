import Layout from '@/layout'
import BlankLayout from '@/layout/components/BlankLayout'
import { isExternal } from '@/utils/validate'
import { toHump } from '@/utils'
import { constantRouterComponents } from '@/router'

/**
 * 创建Route对象，需过滤权限节点
 * @param {Object} menu 菜单
 * @param {Boolean} isRoot 是否为根节点
 */
function createRoute(menu, isRoot) {
  // 目录
  if (menu.type === 0) {
    return {
      path: menu.router,
      component: isRoot ? Layout : BlankLayout,
      alwaysShow: true,
      meta: { title: menu.name, icon: menu.icon }
    }
  }
  // 外链菜单
  if (isExternal(menu.router)) {
    return {
      path: `external-link${menu.menuId}`,
      component: Layout,
      children: [
        {
          path: menu.router,
          meta: { title: menu.name, icon: menu.icon }
        }
      ]
    }
  }
  const component = constantRouterComponents[menu.viewPath]
  if (!component) {
    return undefined
  }
  // 根菜单
  return isRoot ? {
    path: menu.router,
    redirect: `${menu.router}/index`,
    component: Layout,
    children: [
      {
        path: 'index',
        name: toHump(menu.viewPath),
        component,
        meta: {
          title: menu.name,
          icon: menu.icon,
          noCache: !menu.keepalive
        }
      }
    ]
  }
    : {
      path: menu.router,
      name: toHump(menu.viewPath),
      component,
      meta: {
        title: menu.name,
        icon: menu.icon,
        noCache: !menu.keepalive
      }
    }
}

/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, parentRoute) {
  const res = []
  routes.forEach(route => {
    if (route.type === 2 || !route.isShow) {
      // 如果是权限或隐藏直接跳过
      return
    }
    // 根级别菜单渲染
    let realRoute
    if (!parentRoute && !route.parentId && route.type === 1) {
      // 根菜单
      realRoute = createRoute(route, true)
    } else if (!parentRoute && !route.parentId && route.type === 0) {
      // 目录
      const childRoutes = filterAsyncRoutes(routes, route)
      realRoute = createRoute(route, true)
      if (childRoutes && childRoutes.length > 0) {
        realRoute.redirect = childRoutes[0].path
        realRoute.children = childRoutes
      }
    } else if (parentRoute && parentRoute.menuId === route.parentId && route.type === 1) {
      // 子菜单
      realRoute = createRoute(route, false)
    } else if (parentRoute && parentRoute.menuId === route.parentId && route.type === 0) {
      // 如果还是目录，继续递归
      const childRoute = filterAsyncRoutes(routes, route)
      realRoute = createRoute(route, false)
      if (childRoute && childRoute.length > 0) {
        realRoute.redirect = childRoute[0].path
        realRoute.children = childRoute
      }
    }
    // add curent route
    if (realRoute) {
      res.push(realRoute)
    }
  })
  return res
}
