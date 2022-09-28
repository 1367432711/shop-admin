<!--
 * @Filename: 页面小组件
 * @Author: 小豆
 * @Date: 2022-07-12 15:05:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-20 22:16:43
-->
<script setup lang='ts'>
import { useRoute } from 'vue-router'
const route = useRoute()

</script>
<template>
  <div class="child-categories">
    <div class="name">
      {{ route.matched[2].meta.title }}
    </div>
    <ul>
      <li
        v-for="(item,k) in route.matched[1].children"
        :key="k"
        v-show="!item.meta?.IsHidden"
      >
        <a
          class="c-zixun"
          :class="route.matched[2].name === item.name ? 'on' : ' '"
        >
          {{ item.meta?.title }}
        </a>
      </li>
    </ul>
  </div>
</template>
<style lang='scss' scoped>
</style>
