<!--
 * @FilePath: \shop-admin\src\components\CardComment\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-23 16:49:24
 * @LastEditTime: 2022-07-24 15:18:21
-->
<script setup lang='ts'>
import { computed, PropType } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: '#5c6b77'
  },
  size: {
    type: Number,
    default: 16
  },
  padding: {
    type: Number,
    default: 20
  },
  datalist: {
    type: Array as PropType<any[]>,
    default: () => []
  }
})

const styles = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color,
    paddingLeft: `${props.padding}px`
  }
})

const Datas = computed(() => {
  return {
    DataList: props.datalist
  }
})
console.log(styles)
</script>
<template>
  <el-card
    v-for="(item,k) in Datas.DataList"
    :key="k"
    shadow="hover"
    class="box-card"
    :body-style="styles"
  >
    <template #header>
      <div class="card-header">
        <span>
          <el-avatar :src="item.smallFaceUrl" />
        </span>
        <span style="padding-left: 8px; font-size: 14px;">
          {{ item.nickName }}
        </span>
      </div>
    </template>
    <div
      class="text item"
    >
      {{ item.content }}
    </div>
    <div style="text-align:end;font-size:12px;">
      <span>发表时间：{{ item.createTime }}</span>
    </div>
  </el-card>
</template>
<style lang='scss' scoped>
.el-card{
  margin-bottom: 6px;
  border: 0;
}
.card-header {
  display: flex;
  align-items: center;
}
.text {
  font-size: 14px;
}
.item {
  margin-bottom: 6px;
}

</style>
