<!--
 * @FilePath: \shop-admin\src\views\home\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:31
 * @LastEditTime: 2022-11-17 18:12:21
-->
<template>
  <page-container>
    <TopCarousel />
    <div class="list4">
      <section class="container">
        <div class="pd-20">
          <div class="categoriy-title">
            <span>素材</span>
            <el-link :underline="false">
              查看更多&gt;
            </el-link>
          </div>
          <app-skeleton :loading="listLoading">
            <div class="articles">
              <app-work-card :workslist="list" />
            </div>
          </app-skeleton>
        </div>
      </section>
    </div>
    <div class="c-banner">
      <section class="container">
        <div class="name">
          头号玩家私有云部署
        </div>
        <div class="summary">
          一键部署头号玩家至私有服务器，构建快速，安全，高效，私密的UI设计团队云协作
        </div>
        <div>
          <a
            href="https://www.marklion.cn/cloud.shtml"
            class="btn"
            target="_blank"
          >了解更多</a>
        </div>
      </section>
    </div>
    <div class="list4">
      <section class="container">
        <div class="pd-20">
          <div class="categoriy-title">
            <span>素材</span>
            <el-link :underline="false">
              查看更多&gt;
            </el-link>
          </div>
          <app-skeleton :loading="listLoading">
            <div class="articles">
              <app-work-card :workslist="list" />
            </div>
          </app-skeleton>
        </div>
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import TopCarousel from './carousel.vue'
import { getArticles } from '@/api/article'
const list = ref<any>([]) // 列表数据
const total = ref(0)
const listLoading = ref(true)
const listParams = reactive({ // 列表数据查询参数
  page: 1, // 当前页码
  limit: 8, // 每页大小
  tag: '',
  sort: ''
})

onMounted(() => {
  loadList()
})

const loadList = async () => {
  listLoading.value = true
  const data = await getArticles(listParams).finally(() => {
    listLoading.value = false
  })
  data.list.forEach((item: { statusLoading: boolean; }) => {
    item.statusLoading = false // 控制切换状态的 loading 效果
  })
  list.value = data.list
  total.value = data.total
}

</script>
<style lang="scss" scoped >
</style>
