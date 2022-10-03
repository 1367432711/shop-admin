<!--
 * @FilePath: \shop-admin\src\views\zixun\hydt\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditTime: 2022-10-03 10:01:10
-->
<template>
  <page-container>
    <div class="i-list">
      <section class="container">
        <AppChildCategories />
        <div class="articles">
          <ul>
            <li
              v-for="(item, key) in znList"
              :key="key"
            >
              <div class="img img-loaded">
                <router-link
                  :to="`${routes}/project/${key}`"
                  :title="item.title"
                >
                  <img
                    :alt="item.title"
                    lazy__=""
                    :src="item.image"
                  >
                </router-link>
              </div>
              <div class="category">
                <a href="https://ui.marklion.cn/c/zixun-shejizhinan/index.shtml">设计指南
                </a>
              </div>
              <div class="text">
                <a
                  href="https://ui.marklion.cn/link.ashx?id=PRMmibYxl7fEvftaoDFShQ%3D%3D"
                  :title="item.title"
                  target="_blank"
                  rel="noopener nofollow"
                >{{ item.title }}</a>
              </div>
            </li>
          </ul>
        </div>
        <AppPagination />
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'

const router = useRouter()

const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)[0].path
})
console.log(routes)
const znList = [
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/1280_880_b126d683236049b7a75b22787202d738.jpg' }
]
// const GotoArticle = (key:Number) => {
//   router.push()
// }
</script>
<style lang="scss" scoped > </style>
