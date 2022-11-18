<!--
 * @FilePath: \shop-admin\src\components\LeaveMessage\CommentBox.vue
 * @Filename: '留言板'
 * @Author: 小豆
 * @Date: 2022-10-31 14:09:48
 * @LastEditTime: 2022-10-31 23:42:16
-->
<template>
  <el-form
    ref="messageFormRef"
    :model="messageForm"
  >
    <el-form-item prop="content">
      <el-input
        v-model="messageForm.content"
        maxlength="100"
        :autosize="{ minRows: 3, maxRows: 5 }"
        placeholder="请输入你的评论"
        show-word-limit
        type="textarea"
      />
    </el-form-item>

    <div class="comment-add-foot">
      <el-button
        type="primary"
        :disabled="messageForm.content.length>0? false:true"
        @click="submitForm(messageFormRef)"
      >
        提交
      </el-button>
      <el-button
        @click="resetForm(messageFormRef)"
      >
        取消
      </el-button>
    </div>
  </el-form>
</template>

<script lang="ts" setup>

import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'

const messageFormRef = ref<FormInstance>()
const messageForm = reactive({
  content: ''
})

const emit = defineEmits(['submit'])

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      emit('submit', messageForm.content)
      // console.log('submit!', messageForm.content)
      formEl.resetFields()
    } else {
      console.log('error submit!', fields)
    }
  })
}
const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss">

</style>
