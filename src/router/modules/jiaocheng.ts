/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: 小豆
 * @LastEditTime: 2022-07-13 16:12:23
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/jiaocheng',
  component: RouterView,
  meta: {
    title: '教程'
  },
  redirect: '/jiaocheng/jiaocheng_scratch',
  children: [
    {
      path: '/jiaocheng/jiaocheng_scratch',
      name: '/jiaocheng-scratch',
      component: () => import('@/views/zixun/hydt/index.vue'),
      meta: { // 自定义路由元数据
        title: 'SCRATCH'
      }
    },
    {
      path: '/jiaocheng/jiaocheng_python',
      name: '/jiaocheng-python',
      component: () => import('@/views/zixun/sjzn/index.vue'),
      meta: { // 自定义路由元数据
        title: 'PYTHON'
      }
    }
  ]
}

export default routes
