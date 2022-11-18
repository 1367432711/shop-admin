<!--
 * @FilePath: \shop-admin\src\components\Pagination\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:31
 * @LastEditTime: 2022-11-17 16:02:12
-->
<template>
  <el-pagination
    :current-page="props.page"
    :page-size="props.limit"
    layout="prev, pager, next"
    :total="props.listCount"
    :page-sizes="20"
    @current-change="handleCurrentChange"
    @size-change="handleSizeChange"
  />
</template>

<script lang="ts" setup>
import type { PropType } from '@vue/runtime-core'

const props = defineProps({
  page: { // 页码
    type: Number,
    default: 1
  },
  limit: { // 每页大小
    type: Number,
    default: 8
  },
  listCount: {
    type: Number,
    default: 0
  },
  loadList: {
    type: Function as PropType<(...args: any[]) => void>,
    default: () => {}
  }
})

interface EmitsType {
  (e: 'update:page', page: number, a: string): void
  (e: 'update:limit', limit: number): void
}

const emit = defineEmits<EmitsType>()

const handleCurrentChange = (page: number) => {
  emit('update:page', page, 'dsadsa')
  props.loadList()
}

const handleSizeChange = (size: number) => {
  emit('update:page', 1, 'dsanjdnsa')
  emit('update:limit', size)
  props.loadList()
}
</script>

<style lang="scss" scoped>
.el-pagination {
  display: flex;
  justify-content: center;
}
</style>
