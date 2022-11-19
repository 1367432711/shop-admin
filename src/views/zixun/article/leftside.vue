<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import { ElNotification } from 'element-plus'
import { getReply } from '@/api/article'
import DividerHorizontal from '@/components/LeaveMessage/DividerHorizontal.vue'
import CommentItem from '@/components/LeaveMessage/CommentItem.vue'
import ReplyContainer from '@/components/LeaveMessage/ReplyContainer.vue'
import ReplyBox from '@/components/LeaveMessage/ReplyBox.vue'
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

const replydata = ref(
  [
    {
      uid: 1,
      nickName: '梦落青训',
      content: '@莉莉小希染 我发现有人盗图！',
      avatar: 'https://joeschmoe.io/api/v1/random',
      createTime: '2小时前',
      replies: [
        { uid: 5, nickName: '天山怡家', content: '@莉莉小希染 我发现有人盗图！', avatar: 'https://joeschmoe.io/api/v1/random', createTime: '2小时前' },
        { uid: 6, nickName: '欢乐七天', content: '@莉莉小希染 我发现有人盗图！', avatar: 'https://joeschmoe.io/api/v1/random', createTime: '2小时前' }
      ]
    },
    { uid: 2, nickName: '笑哭在家', content: '@莉莉小希染 我发现有人盗图！', avatar: 'https://joeschmoe.io/api/v1/random', createTime: '2小时前' },
    { uid: 3, nickName: '金福堂', content: '@莉莉小希染 我发现有人盗图！', avatar: 'https://joeschmoe.io/api/v1/random', createTime: '2小时前' },
    { uid: 4, nickName: '真武库', content: '@莉莉小希染 我发现有人盗图！', avatar: 'https://joeschmoe.io/api/v1/random', createTime: '2小时前' }
  ]
)
// 作品编号
const params = reactive({
  projectId: 1
})

const getAllComments = async () => {
  const res = await getReply(params).finally()
  replydata.value = await res.Data.list
}

onMounted(() => {
  getAllComments()
})

const id = ref(6)
const constructNewComment = (messageForm: any) => {
  console.log(messageForm)
  return {
    uid: id.value++,
    nickName: '卢小豆',
    content: messageForm,
    avatar: 'https://joeschmoe.io/api/v1/random',
    createTime: '2小时前'
  }
}

const addNewComment = async (messageForm: String, replyTo: any) => {
  const newComment = constructNewComment(messageForm)
  replydata.value.unshift(newComment)
  // const res = await getReply(params).finally()
  // console.log(res)
  // 新增完评论后，自动获取新的评论列表
  // Notion API 有延迟，在添加完 page 之后，需要过一会才能获取到新的评论列表
  // setTimeout(async () => {
  //   await getAllComments()
  // }, 1000)
}

const addReply = (messageForm: String, uid: Number) => {
  const newreply = constructNewComment(messageForm)
  const comment = replydata.value.find((comment) => comment.uid === uid)
  if (comment.replies) {
    comment.replies.push(constructNewComment(messageForm))
  } else {
    comment.replies = [newreply]
  }
}

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
    <div class="entry-main">
      11111
    </div>
    <nav style="display: flex;">
      <span>当前位置：</span>
      <AppBreadcrumb />
      <span>5</span>
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
            class="slide"
          >
            <iframe
              src="../../../../public/scratch3/player.html?workUrl=https://open.qn.teaching.vip/project3/fff2d0a0-948c-4c58-ab2d-229994818a3f.sb3"
              width="100%"
              height="100%"
              allowtransparency="true"
              frameborder="0"
              scrolling="no"
              allowfullscreen
            />
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
        留言：
      </div>
      <div class="comment-add-box">
        <!-- 留言输入框 -->
        <app-leave-message @submit="addNewComment" />
        <!-- <AppEmoji /> -->
      </div>
    </div>
    <div class="p-article-reply-card-list">
      <!-- 分割线 -->
      <divider-horizontal />
      <div
        class="card-list"
        v-for="item in replydata"
        :key="item.uid"
      >
        <!-- 留言 -->
        <comment-item
          :nick-name="item.nickName"
          :avatar="item.avatar"
          :content="item.content"
          :create-time="item.createTime"
        />
        <!-- 留言列表 -->
        <reply-container v-if="item.replies">
          <comment-item
            v-for="reply in item.replies"
            :key="reply.uid"
            :nick-name="reply.nickName"
            :avatar="reply.avatar"
            :create-time="reply.createTime"
            :content="reply.content"
          />
        </reply-container>
        <!-- 回复 -->
        <reply-box @submit="addReply($event, item.uid)" />
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
  margin-top: 20px;
}
.leftside .entry-main{
  background: var(--el-bg-color);
  padding: 20px;
  margin-bottom: 20px;
}
</style>
