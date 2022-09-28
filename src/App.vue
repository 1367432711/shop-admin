<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:09
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-09-16 15:08:05
-->
<template>
  <!-- 路由的渲染出口 -->
  <el-config-provider :locale="locale">
    <router-view />
  </el-config-provider>
</template>

<script lang="ts" setup>
import locale from 'element-plus/lib/locale/lang/zh-cn'
</script>
