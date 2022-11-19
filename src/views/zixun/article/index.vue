<!--
 * @FilePath: \shop-admin\src\views\zixun\article\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-16 20:38:27
 * @LastEditTime: 2022-11-18 11:28:02
-->
<template>
  <page-container>
    <section class="container">
      <AppBreadcrumb />
      <el-row class="article-main">
        <el-col
          class="entry-main"
          :span="24"
        >
          <div class="entry-head">
            <h1 class="entry-title">
              Quad Remesher 1.23自动重新拓扑工具
            </h1>
            <div class="entry-info">
              <el-link
                class="nickname"
                type="primary"
                :underline="false"
              >
                <el-avatar
                  src="https://steam.nosdn.127.net/kada_1658039173879_38.jpg?imageView&quality=100&thumbnail=40y40"
                />
                <span class="author-name">【神笔】陶少爷2010</span>
              </el-link>
              <el-divider direction="vertical" />
              <span class="entry-date">2022年9月21日 下午15:54</span>
              <el-divider direction="vertical" />
              <span class="count-visits">
                浏览 366
              </span>
            </div>
          </div>
          <div class="entry-content">
            www
          </div>
        </el-col>
        <el-col
          class="entry-page"
          :span="24"
        >
          2222
        </el-col>
      </el-row>
    </section>
  </page-container>
</template>

<script lang="ts" setup>
// import LeftSide from './leftside.vue'
// import RightSide from './rightside.vue'
defineProps({
  wordId: {
    type: Number,
    default: null
  }
})
</script>
<style lang="scss" scoped >
.article-main {
  background: var(--el-bg-color);
  width: 860px;
}
.article-main .entry-main, .article-main .entry-head, .article-main .entry-head .entry-title,.article-main .entry-page{
  margin-bottom: 20px;
}
.article-main .entry-main{
  padding: 20px;
}
.article-main .entry-head .entry-title{
  margin-top: 0;
  font-size: 24px;
  line-height: 1.4;
}
.article-main .entry-head .entry-info {
  padding-bottom: 10px;
  color: var(--el-text-color-secondary);
}
.article-main .entry-content{
  position: relative;
  margin-bottom: 30px;
  font-size: 16px;
  color: var(--el-text-color-primary);
  line-height: 1.8;
}
.article-main .entry-page{
  overflow: hidden;
}
</style>
