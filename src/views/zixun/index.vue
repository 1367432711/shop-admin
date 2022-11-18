<!--
 * @FilePath: \shop-admin\src\views\zixun\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditTime: 2022-11-17 17:46:16
-->
<template>
  <page-container>
    <div class="i-list">
      <section class="container">
        <div class="pd-20">
          <app-child-categories
            :datalist="Listsort"
            :tageslist="tageslist"
            @sort-change="hanleSortChange($event)"
          />
          <app-skeleton :loading="listLoading">
            <div class="articles">
              <app-work-card :workslist="list" />
            </div>
            <app-pagination
              v-model:page="listParams.page"
              v-model:limit="listParams.limit"
              :list-count="total"
              :load-list="loadList"
              :disabled="listLoading"
            />
          </app-skeleton>
        </div>
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import { ref, reactive, watch } from 'vue'
import { getArticles } from '@/api/article'

interface TitleItem {
  id: Number
  title: string
}
const Listsort = ref<TitleItem[]>([
  { id: 1, title: '综合作品' },
  { id: 2, title: '热门作品' },
  { id: 3, title: '最新作品' }
])

const tageslist = ref<TitleItem[]>([
  { id: 1, title: '全部' },
  { id: 2, title: '音乐' },
  { id: 3, title: '动画' }
])

const list = ref<any>([]) // 列表数据
const total = ref(0)
const listLoading = ref(true)
const listParams = reactive({ // 列表数据查询参数
  page: 1, // 当前页码
  limit: 16, // 每页大小
  tag: '',
  sort: ''
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

watch(() => [listParams.tag, listParams.sort], (newVal, oldVal) => {
  console.log('新的值----', newVal)
  console.log('旧的值----', oldVal)
  loadList()
})

const hanleSortChange = (payload: any) => {
  console.log(payload)
  listParams.tag = payload[0]
  listParams.sort = payload[1]
  listParams.page = 1
  // loadList()
}

</script>
<style lang="scss" scoped >
</style>
