<script setup lang='ts'>
import { computed, ref } from 'vue'
import { ElNotification } from 'element-plus'

const StarNum = ref()
const StarText = ref(['啥也不是', '一般情况', '还不错', '纳爱斯', '力挺'])
const Starcolors = ref(['#409eff', '#67c23a', '#FF9900'])
const Scorevalue = ref(4)
const Scorepeople = ref('卡搭评分是将用户的评价数据加权平均计算后的结果，通过算法的调校，使得海量用户主观喜好的评分能够更客观准确地反映作品本身的价值。')
const Like = ref(false)
const Likenum = ref(125)
const Collect = ref(false)
const loveFn = () => {
  Like.value ? Like.value = false : Like.value = true
  if (Like.value) {
    Likenum.value += 1
  } else {
    Likenum.value -= 1
  }
}

const replydata = computed(() => {
  return [
    { nickName: '111', content: '@莉莉小希染 我发现有人盗图！', smallFaceUrl: 'https://joeschmoe.io/api/v1/random', createTime: '2022/07/24' },
    { nickName: '222', content: '@莉莉小希染 我发现有人盗图！', smallFaceUrl: 'https://joeschmoe.io/api/v1/random', createTime: '2022/06/24' },
    { nickName: '333', content: '@莉莉小希染 我发现有人盗图！', smallFaceUrl: 'https://joeschmoe.io/api/v1/random', createTime: '2022/05/24' },
    { nickName: '444', content: '@莉莉小希染 我发现有人盗图！', smallFaceUrl: 'https://joeschmoe.io/api/v1/random', createTime: '2022/04/24' }
  ]
})

const CollectFn = () => {
  Collect.value ? Collect.value = false : Collect.value = true
}

const GetStar = async (e:number) => {
  console.log(e)
}

const copy = () => {
  navigator.clipboard.writeText(window.location.href)
  ElNotification.success({
    title: '成功！',
    showClose: false,
    duration: 2000,
    message: '分享链接已复制'
  })
}
</script>
<template>
  <div class="leftside">
    <nav style="display: flex;">
      <span>当前位置：</span>
      <AppBreadcrumb />
      <span>{{ $route.params.id }}</span>
    </nav>
    <h1 class="p-article-title">
      免费本地SVG图标管理器Icon Shelf
    </h1>
    <!-- 作品 头像 作者 更新时间  浏览 -->
    <div class="p-article-info">
      <div class="project-info-base">
        <el-link :underline="false">
          <el-avatar
            src="https://steam.nosdn.127.net/kada_1658039173879_38.jpg?imageView&quality=100&thumbnail=40y40"
          />
          <span class="author-name">【神笔】陶少爷2010</span>
        </el-link>
        <span style="margin-right: 8px;">发表于 2021-12-27</span>
        <app-icon
          class="iconfont iconbrowse "
          size="22"
        />
        <span class="count-visits">
          366
        </span>
      </div>
      <div class="project-info-score">
        <div class="score-txt">
          8.0
        </div>
        <div>
          <div class="score-stars">
            <el-rate
              v-model="Scorevalue"
              disabled
              disabled-void-color="#c9c9c9"
              size="small"
            />
          </div>
          <div class="score-people">
            24人评价
            <el-popover
              placement="top-start"
              :width="200"
              trigger="hover"
              :content="Scorepeople"
            >
              <template #reference>
                <el-icon :size="16">
                  <Warning />
                </el-icon>
              </template>
            </el-popover>
          </div>
        </div>
      </div>
    </div>
    <div class="p-article-slides slide-len1">
      <div class="slides">
        <div class="box slide-left">
          <div
            class="slide on"
          >
            <img
              src="@public/images/1400_902_8be26809677c4e649d162ce1df474803.jpg"
            >
          </div>
          <img
            class="scratch3-tag"
            src="@/assets/scratch3.png"
            alt="3.0"
          >
        </div>
      </div>
      <div class="control">
        <div class="project-info-ext-left">
          <div
            class="project-ext-item project-ext-thumbup"
          >
            <app-icon
              class="iconfont iconpraise_fill "
              :class="Like ? 'on' : ' '"
              size="30"
              @click="loveFn"
            />
            <span>{{ Likenum }}</span>
          </div>
          <div
            class="project-ext-item project-ext-collect"
          >
            <app-icon
              class="iconfont iconcollection_fill"
              size="30"
              :class="Collect ? 'on' : ' '"
              @click="CollectFn"
            />
            <span>收藏</span>
          </div>
          <div
            class="project-ext-item project-ext-phone"
          >
            <el-popover
              placement="top"
              popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;"
            >
              <template #reference>
                <app-icon
                  class="iconfont iconshouji"
                  size="28"
                />
              </template>
              <template #default>
                <div
                  class="demo-rich-conent"
                  style="display: flex; gap: 16px;"
                >
                  <el-image
                    src="src/assets/qcode.png"
                  />
                </div>
              </template>
            </el-popover>
            <span>手机玩</span>
          </div>
          <div
            class="project-ext-item project-ext-phone"
          >
            <app-icon
              class="iconfont iconflashlight_fill"
              :size="30"
            />
            <span>更多</span>
          </div>
          <el-divider
            direction="vertical"
            style="height: 2em;"
          />
          <el-rate
            v-model="StarNum"
            :texts="StarText"
            :colors="Starcolors"
            show-text
            size="large"
            @change="GetStar"
          />
        </div>
        <div
          class="project-ext-share"
        >
          <span>分享：</span>
          <el-popover
            placement="top"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px;"
          >
            <template #reference>
              <app-icon
                class="iconfont iconweixin-copy"
                size="30"
              />
            </template>
            <template #default>
              <div
                class="demo-rich-conent"
                style="display: flex; gap: 16px;"
              >
                <el-image
                  src="src/assets/qcode.png"
                />
              </div>
            </template>
          </el-popover>
          <app-icon
            class="iconfont iconqq-copy-copy"
            size="30"
          />
          <app-icon
            class="iconfont iconshare"
            size="30"
            @click="copy"
          />
        </div>
      </div>
    </div>
    <div
      class="p-article-detail"
    >
      <div class="tips-box">
        <div class="tips-text">
          作品介绍：
        </div>
        <div class="tips-content">
          太空狼人杀
        </div>
        <div class="tips-text">
          操作说明：
        </div>
        <div class="tips-content">
          左右键，懂得都懂<br>
          抄袭者网站：<a href="https://kada.163.com/project/8167938-4626099.htm"><br>
            更可恶的是：连赞都不点
          </a>
        </div>
      </div>
    </div>
    <div class="p-article-message">
      <div class="comment-head">
        留言：<span style="font-size: 12px;color: #666666;">(100)</span>
      </div>
      <div class="comment-add-box">
        <AppEmoji />
      </div>
    </div>
    <div class="p-article-reply-card-list">
      <div
        class="reply-head"
        style="padding: 0 30%;"
      >
        <el-divider
          content-position="center"
          border-style="dashed"
        >
          实时评论
        </el-divider>
      </div>
      <div class="card-list">
        <AppCardComment
          :padding="60"
          :datalist="replydata"
        />
      </div>
    </div>
    <div class="recommend">
      <div class="links">
        <dl data-v-29e5e944="">
          <dt data-v-29e5e944="">
            相关推荐
          </dt>
          <!---->
          <dd data-v-29e5e944="">
            <div class="img img-loaded">
              <a
                href="https://ui.marklion.cn/article/7e6/07/article-2851e626d52de91a.shtml"
                title="使用emoji表情符号来管理Sketch页面"
                target="_blank"
                rel=""
              ><img
                lazy__=""
                src="@public/images/608_418_4f3b460a913548449e3e2c12c305a299.jpg"
              ></a>
            </div>
            <div class="text">
              <div class="name">
                <a
                  href="https://ui.marklion.cn/article/7e6/07/article-2851e626d52de91a.shtml"
                  title="使用emoji表情符号来管理Sketch页面"
                  target="_blank"
                  rel=""
                >使用emoji表情符号来管理Sketch页面</a>
              </div>
              <div class="info">
                阅读数：143
              </div>
            </div>
          </dd>
          <dd data-v-29e5e944="">
            <div class="img img-loaded">
              <a
                href="https://ui.marklion.cn/article/7e6/05/article-a5574defc24aba41.shtml"
                title="UI城市矢量风景插画素材包"
                target="_blank"
                rel=""
              ><img
                lazy__=""
                src="@public/images/608_418_6e66fa414faa4542af3f84ea689f16b5.jpg"
              ></a>
            </div>
            <div class="text">
              <div class="name">
                <a
                  href="https://ui.marklion.cn/article/7e6/05/article-a5574defc24aba41.shtml"
                  title="UI城市矢量风景插画素材包"
                  target="_blank"
                  rel=""
                >UI城市矢量风景插画素材包</a>
              </div>
              <div class="info">
                阅读数：209
              </div>
            </div>
          </dd>
          <dd data-v-29e5e944="">
            <div class="img img-loaded">
              <a
                href="https://ui.marklion.cn/article/7e6/04/article-80640b116aded53b.shtml"
                title="软件APP产品演示动态PPT素材"
                target="_blank"
                rel=""
              ><img
                lazy__=""
                src="@public/images/608_418_300146ab35e2410183f6bf19dc2fef52.jpg"
              ></a>
            </div>
            <div class="text">
              <div class="name">
                <a
                  href="https://ui.marklion.cn/article/7e6/04/article-80640b116aded53b.shtml"
                  title="软件APP产品演示动态PPT素材"
                  target="_blank"
                  rel=""
                >软件APP产品演示动态PPT素材</a>
              </div>
              <div class="info">
                阅读数：179
              </div>
            </div>
          </dd>
          <dd data-v-29e5e944="">
            <div class="img img-loaded">
              <a
                href="https://ui.marklion.cn/article/7e6/07/article-72be5a304d7db866.shtml"
                title="夏日度假露营3D图标素材包含源文件"
                target="_blank"
                rel=""
              ><img
                lazy__=""
                src="@public/images/608_418_c44bb086ac0b4152a52398d624f6858b.jpg"
              ></a>
            </div>
            <div class="text">
              <div class="name">
                <a
                  href="https://ui.marklion.cn/article/7e6/07/article-72be5a304d7db866.shtml"
                  title="夏日度假露营3D图标素材包含源文件"
                  target="_blank"
                  rel=""
                >夏日度假露营3D图标素材包含源文件</a>
              </div>
              <div class="info">
                阅读数：153
              </div>
            </div>
          </dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<style lang='scss' scoped>
.card-list{
  margin-top: 60px;
}
</style>
