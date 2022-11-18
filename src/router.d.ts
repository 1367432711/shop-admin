/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-10-30 09:07:07
 */
import 'vue-router'

declare module 'vue-router' {
  // eslint-disable-next-line no-unused-vars
  interface RouteMeta {
    title?: string
    requiresAuth?: boolean
    IsHidden?: boolean
    menushow?:boolean
  }
}
