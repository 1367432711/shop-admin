/*
 * @FilePath: \shop-admin\src\components\BackTop\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-08-10 11:28:53
 * @LastEditTime: 2022-08-10 11:29:07
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('BackTop', Component)
  }
}
