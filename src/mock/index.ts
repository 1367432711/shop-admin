/*
 * @FilePath: \shop-admin\src\mock\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-19 16:48:01
 * @LastEditTime: 2022-07-19 22:59:54
 */
// 引入mockjs
import Mock from 'mockjs'
import '@/mock/user/captcha'
import '@/mock/user/login'
import '@/mock/user/logout'
// 设置全局延时
Mock.setup({
  timeout: '200-400'
})
