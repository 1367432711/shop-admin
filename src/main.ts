/*
 * @FilePath: \shop-admin\src\main.ts
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditTime: 2022-07-19 16:50:22
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import './mock'
import elementPlus from './plugins/element-plus'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 加载全局样式
import './styles/index.scss'

const app = createApp(App)

app.use(router)
app.use(store, key)
app.use(elementPlus)
app.use(VXETable)

// 自动注册全局组件
const modules = import.meta.globEager('./components/**/index.ts')
for (const path in modules) {
  app.use(modules[path].default)
}

app.mount('#app')
