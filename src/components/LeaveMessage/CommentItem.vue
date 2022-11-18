<!--
 * @FilePath: \shop-admin\src\components\LeaveMessage\CommentItem.vue
 * @Filename: '单个留言'
 * @Author: 小豆
 * @Date: 2022-10-31 15:56:25
 * @LastEditTime: 2022-10-31 22:46:36
-->
<template>
  <div class="CommentItem">
    <!-- 即使在 public 文件夹下，也需要使用 / 绝对路径引用它下面的文件，省略 Public -->
    <el-avatar
      :src="props.avatar"
      alt=""
    />
    <div>
      <p class="nick">
        {{ props.nickName }}
      </p>
      <p
        style="font-size: 0.875rem;
        line-height: 1.8rem;
        color: var(--el-text-color-regular);"
      >
        {{ props.createTime }}
      </p>
    </div>

    <!-- 菜单考右对齐 -->
    <span class="mu">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"
        />
      </svg>
    </span>
  </div>
  <p class="Commenttext">
    {{ props.content }}
  </p>
</template>

<script lang="ts" setup>
const props = defineProps({
  uid: {
    type: Number,
    default: null
  },
  nickName: { // 加载状态
    type: String,
    default: null
  },
  avatar: { // 加载状态
    type: String,
    default: 'https://joeschmoe.io/api/v1/random'
  },
  createTime: { // 加载状态
    type: String,
    default: null
  },
  content: { // 加载状态
    type: String,
    default: null
  },
  replies: { // 加载状态
    type: Object,
    default: null
  }
})
</script>

<style lang="scss">
.Commenttext{
  padding-top: 1rem;
  padding-bottom: 1rem;
  color:#000000b5;
  font-size: var(--el-font-size-base);
}
.CommentItem{
  display: flex;
  font-size: var(--el-font-size-medium);
}
.CommentItem .nick{
  color: #000;
  line-height: 2rem;
  font-size: var(--el-font-size-base);
}
.CommentItem .el-avatar{
  margin-right: 1rem;
}
.CommentItem .mu{
  margin-left: auto;
}
.CommentItem .mu svg{
  height: 1.25rem;
  width: 1.25rem;
  color:var(--el-text-color-primary);
}
</style>
