<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-23 17:11:38
-->
<template>
  <div class="items">
    <ul class="top-categories">
      <li
        class="c-jiaocheng show-childs"
        v-if="$store.state.user?.account"
      >
        <a style="display:flex;align-items:center;">
          <el-avatar src="https://joeschmoe.io/api/v1/random" />
          <span style="margin-left:10px;"> {{ $store.state.user?.account }} </span>
        </a>
        <span class="child-categories dsp"><a
          class="child-c-jiaocheng-adobe-xd"
          href=""
        >Adobe
          XD</a><a
          class="child-c-jiaocheng-sketch"
          href=""
        >Sketch</a><a
          class="child-c-jiaocheng-marklion"
          @click="handleLogou"
        >退出</a></span>
      </li>
      <li
        class="c-plugin "
        v-else
      >
        <el-button
          type="primary"
          @click="handlelogin"
        >
          登录
        </el-button><el-button
          type="primary"
          plain
        >
          注册
        </el-button>
      </li>
    </ul>
    <AppDialogForm
      @click="handlelogin"
    >
      <!-- <child-slot> -->
      <LoginDialogForm />
      <!-- </child-slot> -->
    </AppDialogForm>
  </div>
</template>

<script lang="ts" setup>
import LoginDialogForm from '@/views/login/index.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { logout } from '@/api/common'
import { useRouter } from 'vue-router'
import { useStore } from '@/store'

const router = useRouter()
const store = useStore()

const handlelogin = () => {
  store.commit('setIsdialog', !store.state.isDialog)
}
const handleLogou = () => {
  // 退出提示
  ElMessageBox.confirm('确认退出吗？', '退出提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    // 确认发出退出请求
    await logout()

    // 清除用户登录信息
    store.commit('setUser', null)

    ElMessage({
      type: 'success',
      message: '退出成功!'
    })

    // 跳转到首页
    router.push({
      name: 'index'
    })
  }).catch(() => {
    ElMessage({
      type: 'info',
      message: '已取消退出'
    })
  })
}
</script>

<style lang="scss" scoped>
</style>
