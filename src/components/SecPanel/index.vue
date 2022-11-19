<!--
 * @FilePath: \shop-admin\src\components\SecPanel\index.vue
 * @Filename: '列表页模板'
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:31
 * @LastEditTime: 2022-11-17 16:02:12
-->
<template>
  <div class="sec-panel">
    <div
      class="sec-panel-head"
      v-if="$slots.SecPanelHead"
    >
      <slot name="SecPanelHead"></slot>
    </div>
    <div
      class="sec-panel-head-sort"
      v-if="$slots.SecPanelHeadSort"
    >
      <slot name="SecPanelHeadSort"></slot>
    </div>
    <div class="sec-panel-body">
      <slot name="SecPanelBody"></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
</script>

<style lang="scss" scoped>
.sec-panel{
  background: var(--el-bg-color);
}
.sec-panel .sec-panel-head{
  padding: 20px 20px 0;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  color: #000000;
  font-size: 22px;
  overflow: hidden;
}
.sec-panel .sec-panel-head-sort{
  padding: 20px 20px 0;
}
.sec-panel .sec-panel-body {
    padding: 20px;
}
</style>
