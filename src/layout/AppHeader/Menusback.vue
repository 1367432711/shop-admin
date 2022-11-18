<!--
 * @FilePath: \shop-admin\src\layout\AppHeader\Menusback.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-11-07 23:00:19
 * @LastEditTime: 2022-11-18 11:07:22
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
    <el-menu-item index="/index">
      <template #title>
        <span>首页</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/courses">
      <template #title>
        <span>课程</span>
      </template>
    </el-menu-item>
    <el-menu-item index="/works">
      <template #title>
        <span>作品</span>
      </template>
    </el-menu-item>
    <!-- <el-sub-menu
      index="/sucai"
      :popper-offset="-10"
      style="min-width: 80px"
    >
      <template #title>
        <span>素材</span>
      </template>
      <el-menu-item index="/sucai/sucai_chahua">
        <template #title>
          插画
        </template>
      </el-menu-item>
      <el-menu-item index="/sucai/sucai_jiemianziyuan">
        <template #title>
          界面素材
        </template>
      </el-menu-item>
    </el-sub-menu> -->
  </el-menu>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
.el-menu--horizontal{
  border-bottom:none;
}
::-webkit-scrollbar {
  display: none;
}
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
