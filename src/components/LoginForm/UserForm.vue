<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { login, getCaptcha } from '@/api/common'
import type { IElForm, IFormRule } from '@/types/element-plus'
import { store } from '@/store'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()
const loginform = ref<IElForm | null>(null)
const captchaSrc = ref()
const user = reactive({
  account: '',
  pwd: '',
  imgcode: ''
})
const loading = ref(false)
const loginformrules = ref<IFormRule>({
  account: [
    { required: true, message: '请输入账号', trigger: 'change' }
  ],
  pwd: [
    { required: true, message: '请输入密码', trigger: 'change' }
  ],
  imgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  loadCaptcha()
})

const loadCaptcha = async () => {
  const data = await getCaptcha()
  captchaSrc.value = data
}

// 重置
const submitReset = () => {
  loginform.value?.resetFields()
}

const handleSubmit = async () => {
  // 表单验证
  const valid = await loginform.value?.validate()
  if (!valid) {
    return false
  }

  // 验证通过，展示 loading
  loading.value = true

  // 请求提交
  const data = await login(user).catch(() => {
    loadCaptcha() // 刷新验证码
  }).finally(() => {
    loading.value = false
  })

  if (!data) return

  ElMessage.success('登录成功')
  // 存储登录用户信息
  submitReset()
  store.commit('setUser', {
    ...data.user_info,
    token: data.token
  })
  store.commit('setIsdialog', !store.state.isDialog)
  store.commit('setMenus', data.menus)

  // 跳转回原来页面
  let redirect = route.query.redirect
  if (typeof redirect !== 'string') {
    redirect = '/'
  }
  router.replace(redirect)
}
</script>
<template>
  <el-form
    class="login-form"
    :rules="loginformrules"
    ref="loginform"
    :model="user"
    @submit.prevent="handleSubmit"
  >
    <el-form-item prop="account">
      <el-input
        v-model="user.account"
        size="large"
        placeholder="请输入用户名"
        prefix-icon="User"
      />
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input
        v-model="user.pwd"
        type="password"
        size="large"
        placeholder="请输入密码"
        prefix-icon="Lock"
      />
    </el-form-item>
    <el-form-item prop="imgcode">
      <div class="imgcode-wrap">
        <el-input
          v-model="user.imgcode"
          placeholder="请输入验证码"
          style="margin-right: 20px;"
          prefix-icon="Key"
        />
        <img
          class="imgcode"
          alt="验证码"
          :src="captchaSrc"
          @click="loadCaptcha"
        >
      </div>
    </el-form-item>
    <el-form-item>
      <el-button
        class="submit-button"
        type="primary"
        :loading="loading"
        native-type="submit"
        size="large"
      >
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>
<style lang='scss' scoped>
.login-form {
  min-width: 350px;
  .login-form__header {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .submit-button {
    width: 100%;
  }
  .imgcode-wrap {
    display: flex;
    align-items: center;
    .imgcode {
      height: 37px;
    }
  }
}
</style>
