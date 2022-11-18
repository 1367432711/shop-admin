/*
 * @FilePath: \shop-admin\src\components\LeaveMessage\index.ts
 * @Filename: '留言板'
 * @Author: 小豆
 * @Date: 2022-10-31 14:10:50
 * @LastEditTime: 2022-10-31 14:11:20
 */
import { App } from '@vue/runtime-dom'
import Component from './CommentBox.vue'

export default {
  install (app: App) {
    app.component('AppLeaveMessage', Component)
  }
}
