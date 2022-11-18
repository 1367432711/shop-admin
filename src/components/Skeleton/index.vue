<!--
 * @FilePath: \shop-admin\src\components\Skeleton\index.vue
 * @Filename: '骨架屏组件'
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:31
 * @LastEditTime: 2022-11-17 13:11:06
-->
<template>
  <el-skeleton
    style="display: flex;flex-wrap: wrap;justify-content: space-around;"
    :loading="props.loading"
    animated
    :count="8"
  >
    <template #template>
      <div>
        <el-skeleton-item
          variant="image"
          style="width: 270px; height: 300px"
        />
        <div style="padding: 14px">
          <el-skeleton-item
            variant="h3"
            style="width: 50%"
          />
          <div
            style="
            display: flex;
            align-items: center;
            justify-items: space-between;
            margin-top: 16px;
            height: 16px;
          "
          >
            <el-skeleton-item
              variant="text"
              style="margin-right: 16px"
            />
            <el-skeleton-item
              variant="text"
              style="width: 30%"
            />
          </div>
        </div>
      </div>
    </template>
    <template #default>
      <slot />
    </template>
  </el-skeleton>
</template>

<script lang="ts" setup>
const props = defineProps({
  loading: { // 加载状态
    type: Boolean,
    default: true
  }
})
</script>
