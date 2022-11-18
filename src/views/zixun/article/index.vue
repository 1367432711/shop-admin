<!--
 * @FilePath: \shop-admin\src\views\zixun\article\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-16 20:38:27
 * @LastEditTime: 2022-11-18 11:28:02
-->
<template>
  <page-container>
    <div class="i-article">
      <section class="container">
        {{ wordId }}
        <LeftSide />
        <RightSide />
        <!-- <AppPagination /> -->
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import LeftSide from './leftside.vue'
import RightSide from './rightside.vue'
defineProps({
  wordId: {
    type: Number,
    default: null
  }
})
</script>
<style lang="scss" scoped > </style>
