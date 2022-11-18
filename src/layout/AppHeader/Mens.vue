<!--
 * @FilePath: \shop-admin\src\layout\AppHeader\Mens.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-15 19:26:51
 * @LastEditTime: 2022-11-15 23:17:22
-->
<template>
  <el-menu
    :unique-opened="false"
    :default-active="$route.path"
    class="el-menu-navs"
    mode="horizontal"
    :ellipsis="false"
    router
  >
    <menu-item
      v-for="menu in menus"
      :key="menu.path"
      :menu="menu"
    />
  </el-menu>
</template>

<script lang="ts" setup>
import MenuItem from './MenuItem.vue'
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menus = ref()
const menusQuery = () => {
  const a = router.getRoutes().filter(v => v.meta.menushow)[0].children
  menus.value = a.filter(item => item.meta?.IsHidden !== true)
}

// const menus:any = ref([])
// const handleQuery = async () => {
//   aa.value = router.getRoutes().filter(v => v.meta.menushow)[0].children
//   for (const a of aa.value) {
//     if (!a.children && !a.meta.IsHidden) {
//       menus.value.push(JSON.parse(JSON.stringify(a)) as never)
//     } else {
//       a.children = JSON.parse(JSON.stringify(a.children.filter((v: { meta: { IsHidden: any } }) => !v.meta.IsHidden)))
//       menus.value.push(JSON.parse(JSON.stringify(a)) as never)
//     }
//   }
// }

onMounted(() => {
  menusQuery()
})

</script>

<style lang="scss" scoped>
.el-menu--horizontal{
  border-bottom:none;
}
::-webkit-scrollbar {
  display: none;
}

</style>
