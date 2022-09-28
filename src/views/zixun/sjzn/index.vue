<!--
 * @Filename: 1111
 * @Author: 小豆
 * @Date: 2022-07-12 11:23:13
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-23 15:24:46
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
                  :to="`/zixun/zixun_shejizhinan_project/${key}`"
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
        <el-pagination
          class="pages"
          :page-size="20"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
        />
        <!-- <ul>
          <li class="on">
            1
          </li>
          <li> <a href="https://ui.marklion.cn/c/zixun-shejizhinan/index_2.shtml">2</a> </li>
          <li> <a href="https://ui.marklion.cn/c/zixun-shejizhinan/index_3.shtml">3</a> </li>
          <li class="last">
            <a href="https://ui.marklion.cn/c/zixun-shejizhinan/index_3.shtml" />
          </li>
        </ul> -->
      </section>
    </div>
  </page-container>
</template>

<script lang="ts" setup>
const znList = [
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_7cca8fdb80ad4af082e05568d810c6c5.png' },
  { title: '3D很简单用Adobeillustrator 2022 3D功能做3D美食', image: '../../../../public/images/608_418_534d8a85c515428f9fbbd4cbba93d234.jpg' }
]
</script>
<style lang="scss" scoped > </style>
