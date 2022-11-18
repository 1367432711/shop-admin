<!--
 * @FilePath: \shop-admin\src\components\LeaveMessage\ReplyContainer.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-10-31 16:03:26
 * @LastEditTime: 2022-10-31 22:12:46
-->
<template>
  <div class="replyc">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss">
.replyc{
  padding-left: 2rem;
  border-left: 2px solid var(--el-border-color-darker);
}
</style>
