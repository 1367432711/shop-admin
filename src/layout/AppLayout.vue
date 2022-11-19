<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 17:28:35
-->
<template>
  <el-container style="height:100vh;">
    <el-container>
      <el-header>
        <AppHeader />
      </el-header>
      <el-main>
        <el-scrollbar ref="scrollbarRef">
          <router-view v-slot="{ Component, route }">
            <transition
              name="el-fade-in"
              mode="out-in"
            >
              <component
                :is="Component"
                :key="route.path"
              />
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
import { ref } from 'vue'
import { ElScrollbar } from 'element-plus'
import { useRouter } from 'vue-router'
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const router = useRouter()
router.beforeEach((to, from) => {
  scrollbarRef.value!.setScrollTop(0)
})

</script>

<style lang="scss" scoped>
.el-main {
  color: var(--el-color-black);
  --el-main-padding: 0;
}
.el-header{
  padding: 0;
}
</style>
