<!--
 * @FilePath: \shop-admin\src\layout\AppHeader\Breadcrumb.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:31
 * @LastEditTime: 2022-11-16 00:37:49
-->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
    >
      {{ item.meta.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script lang="ts" setup>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)
})
console.log(111111111111111111n)
</script>

<style lang="scss" scoped></style>
