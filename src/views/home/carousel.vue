<!--
 * @FilePath: \shop-admin\src\views\home\carousel.vue
 * @Filename: '首页 顶部 第一部分 跑马灯'
 * @Author: 小豆
 * @Date: 2022-09-16 15:35:14
 * @LastEditTime: 2022-11-17 17:49:58
-->
<script lang="ts" setup>
const znList = [
  { title: '使用Adobe XD低版本打开高版本文件的方法', url: '', image: '../../../../public/images/banana1_1200x400.jpg' },
  { title: '使用Adobe XD低版本打开高版本文件的方法', url: '', image: '../../../../public/images/banana2_1200x400.jpg' }
]
</script>
<template>
  <section class="container">
    <div class="img-loaded">
      <el-carousel
        :interval="50000"
        height="400px"
        trigger="click"
      >
        <el-carousel-item
          v-for="item in znList"
          :key="item.title"
        >
          <el-image :src="item.image" />
          <!-- <h3>122222</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container{
  background: none !important;
}
.img-loaded{
  border-radius: 10px;
  overflow: hidden;
}

.el-image:hover{
    transform: scale(1.02);
    transition: all .3s ease-out 0s;
}

.el-image {
    width: 100%;
    height: 100%;
    position: initial;
    transition: all .3s ease-out 0s;
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
