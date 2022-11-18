/*
 * @FilePath: \shop-admin\src\utils\common.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-10-28 16:53:36
 * @LastEditTime: 2022-10-28 16:53:55
 */
/**
 * 解析 url 中的参数
 * @param url
 * @returns {Object}
 */
export const parseUrlParams = (url: string) => {
  const params = {}
  if (!url || url === '' || typeof url !== 'string') {
    return params
  }
  const paramsStr = url.split('?')[1]
  if (!paramsStr) {
    return params
  }
  const paramsArr = paramsStr.replace(/&|=/g, ' ').split(' ')
  for (let i = 0; i < paramsArr.length / 2; i++) {
    const value = paramsArr[i * 2 + 1]
    params[paramsArr[i * 2]] = value === 'true' ? true : (value === 'false' ? false : value)
  }
  return params
}
