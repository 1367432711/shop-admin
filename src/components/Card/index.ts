/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditors: 小豆
 * @LastEditTime: 2022-07-12 15:20:10
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppCard', Component)
  }
}
