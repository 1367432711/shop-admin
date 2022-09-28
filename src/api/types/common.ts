/*
 * @FilePath: \shop-admin\src\api\types\common.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditTime: 2022-09-15 22:53:29
 */
export interface ILoginInfo {
  logo_square: string
  logo_rectangle: string
  login_logo: string
  slide: string[]
}

export interface IUserInfo {
  id: number
  account: string
  head_pic: string
}

export interface IMenu {
  path: string
  // title: string
  meta: []
  // header: string
  // is_header: number
  children?: IMenu[]
}

export interface ILoginResponse {
  token: string
  expires_time: number
  menus: IMenu[]
  unique_auth: string[]
  user_info: IUserInfo
  logo: string
  logo_square: string
  version: string
  newOrderAudioLink: string
}
