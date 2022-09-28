<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-09 16:34:29
-->
<template>
  <el-container style="height:100vh;">
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <el-scrollbar>
          <router-view v-slot="{ Component }">
            <transition
              name="slide"
              mode="out-in"
            >
              <keep-alive>
                <component :is="Component" />
              </keep-alive>
            </transition>
          </router-view>
          <el-footer>
            <AppFooter />
          </el-footer>
        </el-scrollbar>
        <BackTop />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
// import AppMenu from './AppMenu/index.vue'
import AppHeader from './AppHeader/index.vue'
import AppFooter from './AppFooter/index.vue'

</script>

<style lang="scss" scoped>
.el-main {
  color: #333;
  --el-main-padding:0;
}
</style>
