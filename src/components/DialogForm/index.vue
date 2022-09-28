<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: 小豆
 * @LastEditTime: 2022-07-14 14:47:26
-->
<template>
  <el-dialog
    ref="dialog"
    custom-class="login_Dialog"
    v-model="$store.state.isDialog"
    width="400px"
    :close-on-click-modal="false"
    :close-on-press-escape="false"
  >
    <slot />
    <template #footer>
      <span class="dialog-footer">
        <!-- <el-button @click="handleCancel">取 消</el-button> -->
        <!-- <el-button
          type="primary"
          :loading="confirmLoading"
          @click="handleConfirm"
        >确 定</el-button> -->
        <div
          class="other-options"
          v-show="!$store.state.isshowQrcode"
        >
          <div class="cursor-pointer">
            <img
              width="26"
              height="26"
              src="https://passport.lanqiao.cn/_nuxt/img/icon-circle-wechat.6391458.svg"
              alt="微信"
            >
            <span
              class="align-wx"
              @click="handleshowQrcode"
            >微信快速登录</span>
          </div>
          <span class="cursor-pointer">去注册</span>
        </div>
        <a
          class="sign-prompt"
        ><img
          class="sign-question"
          src="https://passport.lanqiao.cn/_nuxt/img/icon-question.45d1d17.svg"
          alt="question"
        > <span
          class="align-middle"
        >登录遇到问题</span></a>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// import type { PropType } from 'vue'
import type { IElDialog } from '@/types/element-plus'
import { useStore } from '@/store'
const store = useStore()
// const props = defineProps({
//   confirm: {
//     type: Function as PropType<() => Promise<void>>,
//     default: () => Promise.resolve()
//   }
// })

const dialog = ref<IElDialog | null>(null)
// const confirmLoading = ref(false)

// const handleCancel = () => {
//   if (dialog.value) {
//     dialog.value.visible = false
//   }
// }

// const handleConfirm = async () => {
//   confirmLoading.value = true
//   // emit('confirm')
//   await props.confirm().finally(() => {
//     confirmLoading.value = false
//   })
// }

const handleshowQrcode = () => {
  store.commit('setIsshowQrcode', !store.state.isshowQrcode)
}
</script>

<style lang="scss" scoped>

</style>
