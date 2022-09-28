/*
 * @FilePath: \shop-admin\src\router\modules\zixun.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditTime: 2022-07-23 16:06:53
 */
import { RouteRecordRaw, RouterView } from 'vue-router'
const routes: RouteRecordRaw = {
  path: '/zixun',
  component: RouterView,
  meta: {
    title: '资讯'
  },
  redirect: '/zixun/zixun_hangyedongtai',
  children: [
    {
      path: '/zixun/zixun_hangyedongtai',
      name: 'zixun-hangyedongtai',
      component: () => import('@/views/zixun/index.vue'),
      meta: { // 自定义路由元数据
        title: '行业动态'
      }
    },
    {
      path: '/zixun/zixun_shejizhinan',
      name: 'zixun-shejizhinan',
      component: () => import('@/views/zixun/index.vue'),
      meta: { // 自定义路由元数据
        title: '设计指南'
      }
    },
    {
      path: '/zixun/project/:id',
      name: 'zixun-project',
      component: () => import('@/views/zixun/article/index.vue'),
      meta: { // 自定义路由元数据
        title: '作品浏览',
        IsHidden: true
      }
    }
  ]
}

export default routes
