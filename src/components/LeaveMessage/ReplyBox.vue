<!--
 * @FilePath: \shop-admin\src\components\LeaveMessage\ReplyBox.vue
 * @Filename: '回复列表'
 * @Author: 小豆
 * @Date: 2022-10-31 16:02:45
 * @LastEditTime: 2022-10-31 23:46:44
-->
<template>
  <el-button
    text
    type="primary"
    size="small"
    class="but"
    :style="[showCommentBox ? 'margin-bottom: 0.5rem;' : 'margin-bottom: 2.5rem;']"
    @click="showCommentBox = !showCommentBox"
  >
    回复
  </el-button>
  <CommentBox
    v-if="showCommentBox"
    class="mb-4"
    @submit="
      emit('submit', $event);
      showCommentBox = false;
    "
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import CommentBox from './CommentBox.vue'

const showCommentBox = ref(false)

const emit = defineEmits(['submit'])

console.log(emit)
</script>

<style lang="scss">
.but{
  margin-top: 1rem;
}
</style>
