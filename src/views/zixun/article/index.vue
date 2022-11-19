<!--
 * @FilePath: \shop-admin\src\views\zixun\article\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-16 20:38:27
 * @LastEditTime: 2022-11-19 23:10:30
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
          <div class="entry-tag">
            <el-link :underline="false">
              Tag 1
            </el-link>
            <el-link :underline="false">
              Tag 2
            </el-link>
          </div>
          <div class="entry-action">
            <el-button
              type="primary"
              plain
              size="large"
            >
              <app-icon
                class="iconfont iconpraise_fill"
                color="var(--el-color-primary)"
                size="18"
              />
              赞 ( 0 )
            </el-button>
            <el-button
              type="primary"
              plain
              size="large"
              icon="Ticket"
            >
              打赏
            </el-button>
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
.article-main .entry-main, .article-main .entry-main .entry-head, .article-main .entry-main .entry-head .entry-title,.article-main .entry-page{
  margin-bottom: 20px;
}
.article-main .entry-main{
  padding: 20px;
}
.entry-main .entry-head .entry-title{
  margin-top: 0;
  font-size: 24px;
  line-height: 1.4;
}
.entry-main .entry-head .entry-info {
  padding-bottom: 10px;
  color: var(--el-text-color-secondary);
}
.entry-main .entry-content{
  position: relative;
  margin-bottom: 30px;
  font-size: 16px;
  color: var(--el-text-color-primary);
  line-height: 1.8;
}
.entry-main .entry-tag .el-link{
  margin: 0 10px 5px 0;
  padding: 5px 10px 4px 0;
  line-height: 14px;
  border-radius: 20px;
  color: var(--el-text-color-primary);
  background: var(--el-color-info-light-8);
}
.entry-main .entry-tag .el-link:hover{
  color: #fff;
  background: var(--el-color-primary);
}
.entry-main .entry-tag .el-link:before {
    margin: -4px 6px -4px 0;
    padding: 4px 7px;
    line-height: inherit;
    color: #fff;
    background: var(--el-color-primary);
    content: "#";
    vertical-align: top;
    font-size: 14px;
    border-radius: 20px;
}
.entry-main .entry-action{
  margin-top: 30px;
  margin-bottom: 30px;
  text-align: center;
}
.entry-main .entry-action .el-button .Ionicons{
  margin: 0 8px 0 0;
}
.entry-main .entry-action .el-button:hover .Ionicons{
  color: #fff !important;
}
.el-button--primary.is-plain {
  font-size: 18px;
  line-height: 22px;
}
.article-main .entry-page{
  overflow: hidden;
}
</style>
