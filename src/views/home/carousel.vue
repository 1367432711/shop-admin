<!--
 * @FilePath: \shop-admin\src\views\home\carousel.vue
 * @Filename: '首页 顶部 第一部分 跑马灯'
 * @Author: 小豆
 * @Date: 2022-09-16 15:35:14
 * @LastEditTime: 2022-11-17 17:49:58
-->
<script lang="ts" setup>
const znList = [
  { title: 'iPhone 14 Pro灵动岛详细UI笔记', url: '', type: '设计指南', image: '../../../../public/images/1280_880_ecd8f2482f6845e5a2c0d545c326196a.jpg' },
  { title: '使用emoji表情符号来管理Sketch页面', url: '', type: '设计指南', image: '../../../../public/images/608_418_666b8b3cf086406b8a5c78916ec9cef9.jpg' },
  { title: 'WWDC22丨 2022苹果设计大奖获奖名单', url: '', type: '行业动态', image: '../../../../public/images/1280_880_a84ed0bfb5c44a2d948758ae018e4482.jpg' },
  { title: '使用Adobe XD低版本打开高版本文件的方法', url: '', type: '行业动态', image: '../../../../public/images/608_418_3351dd22b7a341d893a1015c8f162f3b.jpg' }
]
</script>
<template>
  <div class="list1">
    <section class="container">
      <ul class="pd-20">
        <li>
          <div class="img img-loaded">
            <el-carousel
              :interval="5000"
              height="440px"
              trigger="click"
            >
              <el-carousel-item
                v-for="item in znList"
                :key="item.title"
              >
                <!-- <h3>{{ item }}</h3> -->
                <el-image :src="item.image" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="info">
            <div class="category">
              <a href="">最新动态</a>
            </div>
            <div class="text">
              <a
                href="https://ui.marklion.cn/article/7e6/06/article-b422f820147198ad.shtml"
                title="头号玩家3.0版本更新！新增私有云网盘与原型功能模块！"
                target="_self"
                rel=""
              >头号玩家3.0版本更新！新增私有云网盘与原型功能模块！</a>
            </div>
            <div class="summary">
              3.0版本可以上传画板交互原型,上传全格式文件,新增XD文件版本降级
            </div>
          </div>
        </li>
        <li
          v-for="item in znList"
          :key="item.title"
        >
          <div class="img img-loaded">
            <a
              href="https://ui.marklion.cn/link.ashx?id=PRMmibYxl7fEvftaoDFShQ%3D%3D"
              :title="item.title"
              target="_blank"
              rel="noopener nofollow"
            ><img
              :src="item.image"
              :alt="item.title"
            ></a>
          </div>
          <div class="info">
            <div class="category">
              <a :href="item.url">{{ item.type }}</a>
            </div>
            <div class="text">
              <a
                href="https://ui.marklion.cn/link.ashx?id=PRMmibYxl7fEvftaoDFShQ%3D%3D"
                :title="item.title"
                target="_blank"
                rel="noopener nofollow"
              >{{ item.title }}</a>
            </div>
            <div class="summary" />
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.el-image {
    width: 100%;
    height: 100%;
    position: initial;
}
  .el-carousel__item h3 {
    color: #475669;
    opacity: 0.75;
    line-height: 440px;
    margin: 0;
    text-align: center;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
  </style>
