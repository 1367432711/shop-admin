/*
 * @FilePath: \shop-admin\src\router\modules\sucai.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-12 14:12:05
 * @LastEditTime: 2022-07-20 22:17:14
 */
import { RouteRecordRaw, RouterView } from 'vue-router'

const routes: RouteRecordRaw = {
  path: '/sucai',
  component: RouterView,
  meta: {
    title: '素材'
  },
  redirect: '/sucai/sucai_chahua',
  children: [
    {
      path: '/sucai/sucai_chahua',
      name: '/sucai-chahua',
      component: () => import('@/views/zixun/hydt/index.vue'),
      meta: { // 自定义路由元数据
        title: '插画'
      }
    },
    {
      path: '/sucai/sucai_jiemianziyuan',
      name: '/sucai-jiemianziyuan',
      component: () => import('@/views/zixun/sjzn/index.vue'),
      meta: { // 自定义路由元数据
        title: '界面素材'
      }
    }
  ]
}

export default routes
