/*
 * @FilePath: \shop-admin\src\mock\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-19 16:48:01
 * @LastEditTime: 2022-11-01 00:32:49
 */
// 引入mockjs
import Mock from 'mockjs'
import '@/mock/user/captcha'
import '@/mock/user/login'
import '@/mock/user/logout'
import '@/mock/articles'
// 设置全局延时
Mock.setup({
  timeout: '200-400'
})
