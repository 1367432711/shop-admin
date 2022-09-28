<!--
 * @FilePath: \shop-admin\src\components\Breadcrumb\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-17 14:55:01
 * @LastEditTime: 2022-07-20 16:31:03
-->
<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">
      头号玩家社区
    </el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="item in routes"
      :key="item.path"
      :to="{ path: item.path }"
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
</script>

<style lang="scss" scoped></style>
