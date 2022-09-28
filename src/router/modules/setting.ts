/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: 小豆
 * @LastEditTime: 2022-07-12 14:09:52
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const permissionRoutes: RouteRecordRaw = {
  path: 'system_admin/index',
  component: RouterView,
  meta: {
    title: '权限管理'
  },
  children: [
    {
      path: 'system_admin/index',
      name: 'system_admin-index',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: { // 自定义路由元数据
        title: '管理员'
      }
    },
    {
      path: 'system_role/index',
      name: 'system_role-index',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '角色'
      }
    },
    {
      path: 'system_menus/index',
      name: 'system_menus-index',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '规则'
      }
    }
  ]
}

const routes: RouteRecordRaw = {
  path: 'setting',
  component: RouterView,
  meta: {
    title: '设置'
  },
  children: [
    permissionRoutes
  ]
}

export default routes
