/*
 * @FilePath: \shop-admin\src\components\Skeleton\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-10-30 13:42:28
 * @LastEditTime: 2022-10-30 13:42:44
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppSkeleton', Component)
  }
}
