/*
 * @FilePath: \shop-admin\src\components\Emoji\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-23 11:12:15
 * @LastEditTime: 2022-07-23 11:12:39
 */
import { App } from '@vue/runtime-dom'
import Component from './index.vue'

export default {
  install (app: App) {
    app.component('AppEmoji', Component)
  }
}
