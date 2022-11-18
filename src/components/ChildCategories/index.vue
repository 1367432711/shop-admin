<!--
 * @Filename: 页面小组件
 * @Author: 小豆
 * @Date: 2022-07-12 15:05:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-11-17 17:43:41
-->
<script setup lang='ts'>

import { computed, PropType } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: '综合作品'
  },
  datalist: {
    type: Object as PropType<any[]>,
    default: () => {}
  },
  tagetitle: {
    type: String,
    default: '全部'
  },
  tageslist: {
    type: Object as PropType<any[]>,
    default: () => {}
  }
})

const tageDatas = computed(() => {
  return {
    DataList: props.tageslist
  }
})

const emits = defineEmits(['sort-change'])

const Currentnamea = computed(() => {
  emits('sort-change', [props.tagetitle, props.title])
  return {
    title: props.title,
    tagetitle: props.tagetitle
  }
})

const Datas = computed(() => {
  return {
    DataList: props.datalist
  }
})
</script>
<template>
  <el-row class="tagscommon">
    <el-col :span="24">
      <div class="category">
        <div class="item">
          <div class="label">
            标签:
          </div>
          <div class="tag-box">
            <el-radio-group
              v-model="tagetitle"
              size="large"
              v-for="(item, index) in tageDatas.DataList"
              :key="index"
            >
              <el-radio-button :label="item.title" />
            </el-radio-group>
          </div>
        </div>
        <div class="tag-panel" />
      </div>
    </el-col>
  </el-row>
  <div class="child-categories">
    <div class="name">
      {{ Currentnamea.title }}
    </div>
    <div class="type">
      <el-radio-group
        v-model="title"
        size="large"
        v-for="item in Datas.DataList"
        :key="item.id"
      >
        <el-radio-button :label="item.title" />
      </el-radio-group>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.category {
  padding: 20px 0px 20px 0;
}
.category .item{
    display: flex;
    align-items: center;
}
.category .item .label{
  font-size: 16px;
  font-weight: 500;
  color: #000;
  line-height: 16px;
}
.category .item .tag-box{
  flex: 1;
}
.category .item .tag-box .el-radio-button{
  margin: 0 0 0 8px;
}
.child-categories{
  height: 60px;
  background: var(--el-bg-color);
}
.child-categories .name{
  margin-left: 0 !important;
}
</style>
