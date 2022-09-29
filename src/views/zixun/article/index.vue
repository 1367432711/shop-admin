<!--
 * @FilePath: \shop-admin\src\views\zixun\article\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-16 20:38:27
 * @LastEditTime: 2022-09-29 07:40:27
-->
<template>
  <page-container>
    <div class="i-article">
      <section class="container">
        <LeftSide />
        <RightSide />
        <!-- <AppPagination /> -->
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import LeftSide from './leftside.vue'
import RightSide from './rightside.vue'
const znList = [
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '@public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' }
]
console.log(znList)
</script>
<style lang="scss" scoped > </style>
