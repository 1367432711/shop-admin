/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 16:44:30
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from '@/layout/AppLayout.vue'
import zixunRouter from './modules/zixun'
import jiaochengRouter from './modules/jiaocheng'
import sucaiRouter from './modules/sucai'
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
        component: () => import('../views/home/index.vue'),
        meta: { title: '首页' }
      },
      zixunRouter,
      sucaiRouter,
      jiaochengRouter,
      {
        path: '/design-navigation',
        name: 'design',
        component: () => import('../views/design/index.vue'),
        meta: { title: '设计导航', requiresAuth: false }
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

router.beforeEach((to, from, next) => {
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
  // chrome
  document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  window.pageYOffset = 0
  next()
})

router.afterEach(() => {
  nprogress.done() // 加载进度条
})

export default router
