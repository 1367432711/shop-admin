<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 00:47:52
-->
<template>
  <!-- <i
    :class="collapseIcon"
    @click="handleCollapse"
  /> -->
  <a
    href="/#/home"
    class="logo"
    title="头号玩家社区—UI设计免费素材资源UI教程分享平台"
  />
</template>

<script lang="ts" setup>
// import { useStore } from '@/store'
// import { computed } from 'vue'

// const store = useStore()

// const collapseIcon = computed(() => {
//   return !store.state.isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold'
// })

// const handleCollapse = () => {
//   store.commit('setIsCollapse', !store.state.isCollapse)
// }
</script>

<style lang="scss" scoped>
.logo:before {
  width: 120px;
  height: 42px;
  background-size: 120px 42px;
  background-image: url("@/assets/logo-title.png");
  content: ""
}
.logo:after {
  content: "社区";
  font-size: 22px;
  color: #1e1e1e;
  margin: 0 5px 0 20px;
  height: 40px;
  line-height: 40px
}
</style>
