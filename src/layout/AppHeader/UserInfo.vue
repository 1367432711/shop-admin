<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-06 08:51:01
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
        <div class="child-categories dsp">
          <el-row class="card-top">
            <el-avatar
              class="user-big-img-nop"
              src="https://joeschmoe.io/api/v1/random"
            />
            <div class="f-l">
              <div>
                <p class="card-nickname textover">
                  {{ $store.state.user?.account }}
                </p>
                <div class="user-level-meta">
                  <div
                    class="user-level-exp"
                    title="专业等级(SExp:200)"
                  >
                    <i class="admlevel s1">S1·C</i><span>初级工程师</span>
                  </div>
                  <el-row class="mt-5">
                    <div
                      class="f-l mr-5"
                      style="margin-top:-1px"
                      title="中社会员"
                    /><div
                      class="user-level-exp f-l"
                      style="margin-right:7px"
                      title="账号等级(65Exp)"
                    >
                      <i>Lv.</i><span>2</span>
                    </div><div
                      class="user-level-exp f-l"
                      title="专业等级经验值"
                    >
                      <i>SExp</i><span class="sexpNum">200</span>
                    </div>
                  </el-row>
                </div>
              </div>
            </div>
          </el-row>
          <div class="user-popper-fans">
            <div class="user-popper-fans-item">
              <div class="numtext">
                关注
              </div><div class="numcount">
                <span class="ufollow-num">0</span>
              </div>
            </div><div class="user-popper-fans-item">
              <div class="numtext">
                粉丝
              </div><div class="numcount">
                <span class="ufans-num">0</span>
              </div>
            </div><div class="user-popper-fans-item">
              <div class="numtext">
                工作室
              </div><div class="numcount">
                <span
                  href="/userstuff/studios"
                  class="ustudio-num"
                >0</span>
              </div>
            </div>
          </div>
          <a
            class="child-c-jiaocheng-adobe-xd"
            href=""
          >我的仓库</a>
          <a
            class="child-c-jiaocheng-sketch"
            href=""
          >我的主页</a>
          <a
            class="child-c-jiaocheng-sketch"
            href=""
          >个人中心</a>
          <a
            class="child-c-jiaocheng-marklion"
            @click="handleLogou"
          >退出</a>
        </div>
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

.user-popper-fans-item>.numtext {
    font-size: 12px;
    color: #999;
}
.user-popper-fans-item>.numcount {
    font-size: 15px;
    color: #444;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: center;
    justify-content: center;
    font-weight: 600;
    height: 20px;
}
.user-popper-fans-item {
    text-align: center;
    -ms-flex: 1;
    flex: 1;
}
.user-popper-fans {
    height: 58px;
    width: 100%;
    border-bottom: 1px solid #f4f4f4;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.user-level-exp {
    font-size: 12px;
    margin: 2px 0;
    padding-left: 2px;
    color: #333;
}
.mt-5 {
    margin-top: 5px;
}
.user-level-exp span {
    margin-left: 2px;
}
.admlevel.s1 {
    -webkit-text-stroke: 1px #00bcd4;
}
.user-level-exp {
    font-size: 12px;
    margin: 2px 0;
    padding-left: 2px;
    color: #333;
}
.user-level-meta{
  display: inline-block;
    font-size: 13px;
    color: #666;
}
.child-categories.dsp{
  width: 275px;
    padding: 0;
    top: 99%;
    right: 0;
    border-radius: 6px;
}
.card-top{
  padding: 16px 0 0 25px;
}
.row:before, .row:after {
    content: " ";
    display: table;
}
.user-big-img-nop{
  display: block;
    float: left;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 1px solid #ddd;
    margin-right: 17px;
    overflow: hidden;
}
.f-l {
    float: left !important;
}

.card-nickname {
    display: block;
    font-size: 14px;
    color: #07111b;
    width: 135px;
}

.textover {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
