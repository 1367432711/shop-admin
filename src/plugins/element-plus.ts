/*
 * @FilePath: \shop-admin\src\plugins\element-plus.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditTime: 2022-07-23 13:53:03
 */
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/dist/index.css'
import { App } from 'vue'

export default {
  install (app: App) {
    app.use(ElementPlus, { size: 'default', zIndex: 2000 })
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    }
  }
}
