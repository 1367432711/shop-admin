<!--
 * @FilePath: \shop-admin\src\components\Icon\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-09-29 07:33:30
 * @LastEditTime: 2022-10-03 12:40:42
-->
<template>
  <i
    :class="[
      'Ionicons',
      `ion-${props.name}`
    ]"
    :style="styles"
  />
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#5c6b77'
  },
  size: {
    type: Number,
    default: 16
  }
})

const styles = computed(() => {
  return {
    fontSize: `${props.size}px`,
    color: props.color
  }
})
</script>

<style lang="scss">

</style>
