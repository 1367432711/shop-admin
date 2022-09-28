/*
 * @FilePath: \shop-admin\src\mock\user\login.ts
 * @Filename: '登录接口'
 * @Author: 小豆
 * @Date: 2022-07-19 21:59:40
 * @LastEditTime: 2022-07-19 22:42:46
 */
import Mock, { Random } from 'mockjs'

const user = Mock.mock({
  account: '@cname()',
  address: '@CITY'
})
Mock.mock('/login', 'post', ({ body }) => {
  console.log(body)
  const result = { data: {} }
  const { account, pwd, imgcode } = JSON.parse(body)
  let success = false
  if (account === 'admin' && pwd === '888888' && imgcode === '1324') {
    success = true
    result.data.permissions = [{ id: 'queryForm', operation: ['add', 'edit'] }]
    result.data.roles = [{ id: 'admin', operation: ['add', 'edit', 'delete'] }]
  } else if (account === 'test' && pwd === '888888' && imgcode === '1324') {
    success = true
    result.data.permissions = [{ id: 'queryForm', operation: ['add', 'edit'] }]
    result.data.roles = [{ id: 'test', operation: ['add', 'edit', 'delete'] }]
  } else {
    success = false
  }

  if (success) {
    result.status = 0
    result.msg = Mock.mock('@cname()') + '，欢迎回来'
    result.data.user_info = user
    result.data.user_info.avatar = Random.image('200x100', '#4A7BF7', 'Hello')
    result.data.token = Random.guid()
    result.data.expireAt = new Date(new Date().getTime() + 30 * 60 * 1000)
  } else {
    result.status = -1
    result.msg = '账户名或密码错误（admin/888888 or test/888888）'
  }
  return result
})
