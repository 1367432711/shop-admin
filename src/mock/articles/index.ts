/* eslint-disable no-undef */
/*
 * @FilePath: \shop-admin\src\mock\articles\index.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-10-27 22:35:12
 * @LastEditTime: 2022-11-16 23:45:19
 */
/* eslint-disable no-eval */
import Mock from 'mockjs'
// eslint-disable-next-line no-unused-vars
import { parseUrlParams } from '@/utils/common'

// 文章数据
const articlesTage = ['音乐', '动画']
const goodsList = Mock.mock({
  'list|100': [{
    'id|+1': 0,
    name: '@cname',
    title: '@ctitle(10)',
    time: '@date("yyyy年MM月dd日")',
    'tag|1': articlesTage,
    image: 'https://www.murphycode.com/cover/base-for-website.png'
  }]
})
Mock.mock(RegExp('/getarticles' + '.*'), 'post', ({ url }) => {
  const params: { [s: string]: any } = parseUrlParams(decodeURI(url))
  console.log(params)
  let { page, limit } = params
  page = eval(page) - 1 || 0
  limit = eval(limit) || 10
  delete params.page
  delete params.limit
  delete params.tag
  delete params.sort
  let result = goodsList.list.filter((item: { [x: string]: string }) => {
    for (const [key, value] of Object.entries(params)) {
      if (item[key] !== value) {
        return false
      }
    }
    return true
  })
  const total = result.length
  if ((page) * limit > total) {
    result = []
  } else {
    result = result.slice(page * limit, (page + 1) * limit)
  }
  return {
    code: 0,
    message: 'success',
    data: {
      page: page + 1,
      limit,
      total,
      list: result
    }
  }
})

// 获取项目评论留言
const replylist = Mock.mock({
  'replylist|3': [{
    'uid|+1': 0,
    nickName: '@cname()',
    content: '@ctitle(100)',
    avatar: 'https://joeschmoe.io/api/v1/random',
    createTime: '@datetime()',
    replies: null
  }]
})
Mock.mock('/getreply', 'post', ({ body }) => {
  // let result = { data: {} }
  // eslint-disable-next-line no-unused-vars
  const { projectId } = JSON.parse(body)
  console.log(projectId)
  return {
    code: 0,
    message: 'success',
    Data: {
      list: replylist.replylist
    }
  }
})
