<!--
 * @FilePath: \shop-admin\src\components\BackTop\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-17 14:55:01
 * @LastEditTime: 2022-09-08 08:12:07
-->
<template>
  <el-backtop
    target=".el-scrollbar__wrap"
    :bottom="100"
  >
    <div
      style="
        height: 100%;
        width: 100%;
        background-color: var(--el-color-primary);
        box-shadow: var(--el-box-shadow-lighter);
        text-align: center;
        line-height: 40px;
        color: var(--el-color-white);
      "
    >
      <!-- <app-icon
              class="iconfont iconcollection_fill"
              size="6"
            /> -->
      UP
    </div>
  </el-backtop>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
