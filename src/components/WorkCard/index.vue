<!--
 * @FilePath: \shop-admin\src\components\WorkCard\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-11-16 16:57:58
 * @LastEditTime: 2022-11-18 11:16:57
-->
<script setup lang='ts'>
import { computed, PropType } from 'vue'
import { useRouter } from 'vue-router'
import { Picture as IconPicture } from '@element-plus/icons-vue'

const router = useRouter()

const props = defineProps({
  workslist: {
    type: Object as PropType<any[]>,
    default: () => {}
  }
})

const workDatas = computed(() => {
  return {
    DataList: props.workslist
  }
})

// 跳转到课程详情页
const goDetail = (id: any) => {
  router.push({
    name: 'Detail',
    params: { wordId: id }
  })
}

</script>
<template>
  <div class="work">
    <el-row :gutter="20">
      <el-col
        :span="6"
        v-for="(item, index) in workDatas.DataList"
        :key="index"
        style="padding: 10px;"
      >
        <el-card
          shadow="hover"
          :body-style="{ padding: '0px' }"
        >
          <div class="item-img">
            <el-link
              :underline="false"
              class="item-thumb"
              @click="goDetail(item.id)"
            >
              <el-image
                src="https://www.abc.design/wp-content/uploads/2022/09/image-15-480x300.png"
                fit="contain"
              >
                <template #error>
                  <div class="image-slot">
                    <el-icon>
                      <icon-picture />
                    </el-icon>
                  </div>
                </template>
              </el-image>
            </el-link>
            <el-link
              :underline="false"
              class="item-category"
            >
              {{ item.tag }}
            </el-link>
          </div>
          <h2 class="item-title">
            <el-link
              :underline="false"
              @click="goDetail(item.id)"
            >
              {{ item.title }}
            </el-link>
          </h2>
          <div class="item-meta-items">
            <span
              class="item-meta-items-li views"
              title="阅读数"
            >
              <el-icon :size="18"><View /></el-icon>
              <span class="count-visits">
                366
              </span>
            </span>
            <span
              class="item-meta-items-li views"
              title="评论数"
            >
              <el-icon :size="18"><ChatDotSquare /></el-icon>
              <span class="count-visits">
                366
              </span>
            </span>
            <span
              class="item-meta-items-li views"
              title="点赞数"
            >
              <app-icon
                class="iconfont iconpraise "
                :size="20"
              />
              <span class="count-visits">
                366
              </span>
            </span>
            <span
              class="item-meta-items-li views"
              title="收藏数"
            >
              <el-icon :size="18"><Star /></el-icon>
              <span class="count-visits">
                366
              </span>
            </span>
          </div>
          <el-divider />
          <div class="item-meta-author">
            <el-link
              :underline="false"
              class="avatar j-user-card"
            >
              <el-avatar src="https://joeschmoe.io/api/v1/random" />
              <span style="margin-left:10px;"> {{ item.name }} </span>
            </el-link>
            <div class="item-meta-right">
              {{ item.time }}
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<style lang='scss' scoped>
.el-link{
  --el-link-text-color: var(--el-text-color-primary);
}
.work .el-card {
  border-radius: 4px !important;
}
.el-card.is-hover-shadow:focus,
.el-card.is-hover-shadow:hover {
  box-shadow: 0 2px 10px 3px rgb(0 0 0 / 15%);
  transform: translateY(-3px);
  transition: all .2s ease-in 0s;
}
.work .item-img {
  position: relative;
  overflow: hidden;
}
.work .image-slot {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--el-fill-color-light);
  color: var(--el-text-color-secondary);
  font-size: 30px;
}
.work .image-slot .el-icon {
  font-size: 30px;
}
.work .item-img .el-image {
  height: 100%;
  display: block;
}
.work .item-img .item-category {  position: absolute;
  left: 10px;
  top: 15px;
  padding: 4px 8px;
  font-size: 12px;
  line-height: 14px;
  color: var(--el-fill-color-blank);
  background: var(--el-color-black);
  border-radius: 3px;
}
.work .item-img .item-category:hover {
  background: var(--el-color-primary);
}
.work .item-title {
  margin: 0;
  padding: 15px;
}
.work .item-title .el-link{
  height: 48px;
  line-height: 1.6;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  --el-link-text-color: var(--el-text-color-primary);
  font-size: 16px;
  font-weight: 500;
  -webkit-line-clamp: 2;
  text-decoration: none;
}
.work .item-meta-items{
  display: flex;
  padding: 0 15px;
  margin-bottom: 15px;
  font-size: 13px;
  line-height: 18px;
}
.work .item-meta-items .item-meta-items-li{
  display: flex;
  margin-right: 20px;
}
.work .el-divider--horizontal{
  margin: 14px 0;
}
.work .item-meta-author {
  display: flex;
  justify-content: space-between;
  padding: 15px;
  padding-top: 0;
  font-size: 13px;
  align-items: center;
}
.work .item-meta-author .el-link{
  font-size: 13px;
  font-weight: 100;
}
.work .item-meta-author .avatar{
  display:flex;
  align-items:center;
  max-width: 50%;
  overflow: hidden;
}
.work .item-meta-author .avatar .el-avatar{
  width: 30px;
  height: 30px;
}
</style>
