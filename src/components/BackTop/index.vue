<!--
 * @FilePath: \shop-admin\src\components\BackTop\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-17 14:55:01
 * @LastEditTime: 2022-10-03 12:52:32
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
        line-height: 60px;
        color: var(--el-color-white);
        font-size: 12px;
      "
    >
      <!-- <app-icon
        class="iconfont iconcollection_fill"
        size="6"
      /> -->
      <el-icon :size="30">
        <Top />
      </el-icon>
    </div>
  </el-backtop>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped></style>
