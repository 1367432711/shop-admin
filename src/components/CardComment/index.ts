/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-23 16:51:33
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppCardComment', Component)
  }
}
