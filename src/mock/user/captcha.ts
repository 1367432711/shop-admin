/*
 * @FilePath: \shop-admin\src\mock\user\captcha.ts
 * @Filename: '生成验证码'
 * @Author: 小豆
 * @Date: 2022-07-19 18:44:40
 * @LastEditTime: 2022-07-19 22:06:40
 */

import Mock from 'mockjs'
Mock.mock('/captcha_pro', 'get', () => {
  const result = { }
  result.code = 0
  result.data = Mock.Random.dataImage('120x50', '1324')
  return result
})
