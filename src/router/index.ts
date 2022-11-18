/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-16 00:28:18
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import worksRouter from './modules/works'
import jiaochengRouter from './modules/jiaocheng'
// import sucaiRouter from './modules/sucai'
import nprogress from 'nprogress' // @types/nprogress
import 'nprogress/nprogress.css'
import { store } from '@/store'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: AppLayout,
    meta: {
      menushow: true
    },
    redirect: '/index',
    children: [
      {
        path: '/index', // 默认子路由
        name: 'index',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页' }
      },
      {
        path: '/courses', // 默认子路由
        name: 'courses',
        component: () => import('@/views/courses/index.vue'),
        meta: { title: '课程' }
      },
      worksRouter,
      // sucaiRouter,
      jiaochengRouter,
      {
        path: '/design-navigation',
        name: 'design',
        component: () => import('../views/design/index.vue'),
        meta: { title: '设计导航', IsHidden: false }
      }
    ]
  },
  {
    path: '/login',
    name: '登录页',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/403',
    name: '403',
    redirect: '/index'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    redirect: '/index'
  }
]
const router = createRouter({
  history: createWebHashHistory(), // 路由模式
  routes // 路由规则
})

router.beforeEach((to, from) => {
  nprogress.start() // 开始加载进度条
  if (to.meta.requiresAuth && !store.state.user) {
    // 此路由需要授权，请检查是否已登录
    // 如果没有，则重定向到登录页面
    return {
      path: '/index',
      // 保存我们所在的位置，以便以后再来
      query: { redirect: to.fullPath }
    }
  }
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})

export default router
