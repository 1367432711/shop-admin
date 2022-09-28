<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-13 16:42:03
 * @LastEditors: 小豆
 * @LastEditTime: 2022-07-16 12:11:21
-->
<template>
  <div
    class="login-qcode-panel"
    v-if="$store.state.isshowQrcode"
  >
    <div
      class="panel-title"
    >
      微信扫码登录
    </div>
    <div class="qrcode-wrap">
      <el-image
        style="width: 184px; height: 184px"
        src="src/assets/qcode.png"
        fit="fill"
      />
    </div>
    <p style="color: rgb(77, 77, 77);">
      扫码关注公众号完成登录
    </p>
    <div
      class="iphone-wrap"
      @click="handleshowQrcode"
    >
      <img
        src="@/assets/phone.svg"
        alt=""
      > <span>手机登录</span>
    </div>
  </div>
  <div>
    <el-tabs
      v-model="activeName"
      class="login-tabs"
      v-if="!$store.state.isshowQrcode"
      @tab-click="handleClick"
    >
      <el-tab-pane
        label="密码登录"
        name="first"
      >
        <div class="login-container">
          <UserForm />
        </div>
      </el-tab-pane>
      <el-tab-pane
        label="短信登录"
        name="second"
      >
        <div class="login-container">
          <IphoneForm />
        </div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import UserForm from '@/components/LoginForm/UserForm.vue'
import IphoneForm from '@/components/LoginForm/IphoneForm.vue'
import { ref } from 'vue'
import type { TabsPaneContext } from '@/types/element-plus'
import { store } from '@/store'
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}

const handleshowQrcode = () => {
  store.commit('setIsshowQrcode', !store.state.isshowQrcode)
}

</script>

<style lang="scss" scoped>
.login-container {
  // min-width: 400px;
  // height: 100vh;
  // display: flex;
  justify-content: center;
  align-items: center;
  // background-color: #2d3a4b;
}

</style>
