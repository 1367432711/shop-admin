/*
 * @FilePath: \shop-admin\src\mock\user\logout.ts
 * @Filename: '生成验证码'
 * @Author: 小豆
 * @Date: 2022-07-19 18:44:40
 * @LastEditTime: 2022-07-19 22:59:04
 */

import Mock from 'mockjs'
Mock.mock('/setting/admin/logout', 'get', () => {
  const result = { }
  result.status = 0
  result.msg = '操作成功'
  return result
})
