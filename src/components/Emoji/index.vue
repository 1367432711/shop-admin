<!--
 * @FilePath: \shop-admin\src\components\Emoji\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-23 11:00:26
 * @LastEditTime: 2022-07-24 15:20:13
-->
<script setup lang='ts'>
import { ref } from 'vue'
import V3Emoji from 'vue3-emoji'
import 'vue3-emoji/dist/style.css'
const textarea = ref('')
const disableGroup = ['食物&饮料', '旅行&地点', '人物&身体', '符号', '活动', '旗帜']
const optionsName = {
  'Smileys & Emotion': '笑脸&表情',
  'Food & Drink': '食物&饮料',
  'Animals & Nature': '动物&自然',
  'Travel & Places': '旅行&地点',
  'People & Body': '人物&身体',
  Objects: '物品',
  Symbols: '符号',
  Flags: '旗帜',
  Activities: '活动'
}
const clickEmoji = (val: any) => {
  textarea.value += val
}
</script>
<template>
  <el-input
    v-model="textarea"
    maxlength="120"
    :autosize="{ minRows: 6, maxRows: 8 }"
    placeholder="作品有哪些值得鼓励或可以改进的地方呢？记得保持友善和礼貌，互相鼓励，互相学习哦~"
    show-word-limit
    type="textarea"
  />
  <div class="comment-add-foot">
    <V3Emoji
      size="small"
      :disable-group="disableGroup"
      :options-name="optionsName"
      @click-emoji="clickEmoji"
      v-model="textarea"
    />
    <el-button
      type="primary"
      round
      :disabled="textarea.length>0? false:true"
    >
      提交
    </el-button>
  </div>
</template>
<style lang='scss' scoped>
</style>
