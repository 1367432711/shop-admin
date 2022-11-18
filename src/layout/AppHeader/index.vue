<!-- eslint-disable vue/no-template-shadow -->
<!--
 * @Filename: 头部导航栏
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-16 00:42:52
-->
<template>
  <el-container class="container">
    <div class="navs">
      <div class="navs-mun">
        <ToggleSidebar />
        <Mens />
      </div>
      <form action="https://ui.marklion.cn/search.ashx">
        <MenuSearch />
      </form>
      <UserInfo />
    </div>
  </el-container>
</template>

<script lang="ts" setup>
import ToggleSidebar from './ToggleSidebar.vue'
// import Breadcrumb from './Breadcrumb.vue'
import Mens from './Menusback.vue'
import MenuSearch from './MenuSearch.vue'
// import FullScreen from './FullScreen.vue'
// import Notification from './Notification.vue'
import UserInfo from './UserInfo.vue'
</script>

<style lang="scss" scoped>
i {
  font-size: 19px;
  cursor: pointer;
}
.navs .navs-mun{
  display: flex;
  align-items: center;
}

</style>
