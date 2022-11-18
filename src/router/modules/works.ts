/*
 * @FilePath: \shop-admin\src\router\modules\works.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-11-16 00:13:36
 * @LastEditTime: 2022-11-18 11:25:41
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: 'works',
  name: 'Works',
  component: RouterView,
  meta: {
    title: '作品'
  },
  children: [
    {
      path: '',
      name: '',
      component: () => import('@/views/zixun/index.vue'),
      meta: { // 自定义路由元数据
        title: '作品列表'
      }
    },
    {
      path: 'detail/:wordId',
      name: 'Detail',
      component: () => import('@/views/zixun/article/index.vue'),
      meta: {
        title: '作品详情'
      },
      props: true
    }
  ]
}

export default routes
