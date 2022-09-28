<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { iphonelogin } from '@/api/common'
import type { IElForm, IFormRule } from '@/types/element-plus'
import { store } from '@/store'
import { ElMessage } from 'element-plus'

const router = useRouter()
const route = useRoute()
const iphoneform = ref<IElForm | null>(null)
const loadCode = ref('')
const disabled = ref(true)
const user = reactive({
  iphone: '',
  msgcode: ''
})
const loading = ref(false)

const checkMobile = (rule: any, value: string, callback:any) => {
  // 手机号正则表达式
  const regMobile = /^(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/
  if (regMobile.test(value)) {
    // 合法的手机号
    disabled.value = false
    return callback
  }
  callback(new Error('请输入合法的手机号'))
  disabled.value = true
}

const iphoneformrules = ref<IFormRule>({
  iphone: [
    { required: true, message: '请输入手机号', trigger: 'change' },
    { validator: checkMobile, trigger: 'change' }
  ],
  msgcode: [
    { required: true, message: '请输入验证码', trigger: 'change' }
  ]
})

onMounted(() => {
  loadCaptcha()
})

const loadCaptcha = async () => {
  // const data = await getCaptcha()
  // console.log(data)
  loadCode.value = 'data:image/png;base64,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'
  // console.log(loadCode)
  // captchaSrc.value = data.value
}

const handleSubmit = async () => {
  // 表单验证
  const valid = await iphoneform.value?.validate()
  if (!valid) {
    return false
  }

  // 验证通过，展示 loading
  loading.value = true

  // 请求提交
  const data = await iphonelogin(user).catch(() => {
    loadCaptcha() // 刷新验证码
  }).finally(() => {
    loading.value = false
  })

  if (!data) return

  ElMessage.success('登录成功')

  // 存储登录用户信息
  store.commit('setUser', {
    ...data.user_info,
    token: data.token
  })

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
    :rules="iphoneformrules"
    ref="iphoneform"
    :model="user"
    @submit.prevent="handleSubmit"
  >
    <el-form-item prop="iphone">
      <el-input
        v-model.number="user.iphone"
        size="large"
        placeholder="请输入手机号"
        prefix-icon="User"
      />
    </el-form-item>
    <el-form-item prop="msgcode">
      <div class="imgcode-wrap">
        <el-input
          v-model="user.msgcode"
          placeholder="请输入六位验证码"
          style="margin-right: 20px;"
          prefix-icon="Key"
        />
        <el-button
          size="large"
          click="loadCode"
          :disabled="disabled"
        >
          获取验证码
        </el-button>
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
  // padding: 30px;
  // border-radius: 6px;
  // background: #fff;
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
