/*
 * @FilePath: \shop-admin\src\api\article.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:30
 * @LastEditTime: 2022-11-15 01:10:35
 */
/**
 * 文章相关请求模块
 */
import request from '@/utils/request'

/**
 * 获取用户标签列表
 */
export const getArticles = (params: {
    page: number
    limit: number
    tag: string
    sort: string
  }) => {
  return request<{
      total: number
      list: any
    }>({
      method: 'POST',
      url: '/getarticles',
      params
    })
}

/**
 * 获取用户评论
 */

export const getReply = (data: {
  projectId: number
}) => {
  return request<{
Data: any
[x: string]: any
    projectId: number
  }>({
    method: 'POST',
    url: '/getreply',
    data
  })
}
