<!--
 * @FilePath: \shop-admin\src\views\zixun\hydt\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-11 09:58:10
 * @LastEditTime: 2022-10-27 22:30:42
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
        <app-pagination
          v-model:page="listParams.page"
          v-model:limit="listParams.limit"
          :list-count="listCount"
          :load-list="loadList"
          :disabled="listLoading"
        />
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const listCount = ref(0)

const listLoading = ref(true)
const listParams = reactive({ // 列表数据查询参数
  page: 1, // 当前页码
  limit: 10, // 每页大小
  pid: 0
})

const routes = computed(() => {
  return router.currentRoute.value.matched.filter(item => item.meta.title)[0].path
})

onMounted(() => {
  loadList()
})

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

const loadList = async () => {
  listLoading.value = true
  listLoading.value = false
  listCount.value = 5
}

// const GotoArticle = (key:Number) => {
//   router.push()
// }
</script>
<style lang="scss" scoped >

</style>
