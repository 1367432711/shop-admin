/*
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-19 21:36:50
 */
/**
 * 公共基础接口封装
 */
import request from '@/utils/request'
import { ILoginInfo, ILoginResponse } from './types/common'

export const getLoginInfo = () => {
  return request<ILoginInfo>({
    method: 'GET',
    url: '/login/info'
  })
}

export const getCaptcha = () => {
  return request<Blob>({
    method: 'GET',
    url: '/captcha_pro',
    // params: {
    //   stamp: Date.now()
    // },
    responseType: 'blob' // 请求获取图片数据
  })
}

export const login = (data: {
  account: string
  pwd: string
  imgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const iphonelogin = (data: {
  iphone: string
  msgcode: string
}) => {
  return request<ILoginResponse>({
    method: 'POST',
    url: '/login',
    data
  })
}

export const logout = () => {
  return request({
    method: 'GET',
    url: '/setting/admin/logout'
  })
}
