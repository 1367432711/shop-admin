<!--
 * @FilePath: \shop-admin\src\layout\AppHeader\MenuItem.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-15 19:40:38
 * @LastEditTime: 2022-10-29 15:52:04
-->
<template>
  <el-sub-menu
    v-if="menu.children && menu.children.length"
    :index="menu.path"
    :popper-offset="-10"
    style="min-width: 80px"
  >
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
    <MenuItem
      v-for="subMenu in menu.children"
      :key="subMenu.path"
      :menu="subMenu"
    />
  </el-sub-menu>
  <el-menu-item
    v-else
    :index="menu.path"
  >
    <template #title>
      <span>{{ menu.meta.title }}</span>
    </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import { ref } from '@vue/runtime-core'
import type { PropType } from '@vue/runtime-core'
import type { IMenu } from '@/api/types/common'

const props = defineProps({
  menu: {
    type: Object as PropType<IMenu>,
    required: true
  }
})

const menu = ref(props.menu)
</script>

<style lang="scss" scoped>
.el-menu-item {
  justify-content: center;
}
.el-menu--horizontal,.el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-menu-item.is-active{
  border-bottom: none;
}

// i.Ionicons {
//   margin-right: 12px;
// }

// .el-submenu .el-menu-item, .el-submenu :deep(.el-submenu) .el-submenu__title {
//   background-color: #1f2d3d !important;
// }
span{
  font-size: 17px;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background-color: var(--el-menu-bg-color) !important;
}
</style>
