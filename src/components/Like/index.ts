/*
 * @FilePath: \shop-admin\src\components\Like\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-19 09:19:46
 * @LastEditTime: 2022-07-19 09:20:01
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppLike', Component)
  }
}
