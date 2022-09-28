<!--
 * @FilePath: \shop-admin\src\components\Like\index.vue
 * @Filename: ''
 * @Author: 小豆
 * @Date: 2022-07-19 09:18:28
 * @LastEditTime: 2022-07-19 09:32:21
-->
<script setup lang='ts'>
</script>
<template>
  <label
    for="checkbox"
    style="display: flex;
    justify-content: center;
    align-items: center;"
  >
    <input
      type="checkbox"
      id="checkbox"
      hidden
    >
    <svg
      t="1639041971928"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="3128"
    ><path
      d="M512 896a42.666667 42.666667 0 0 1-30.293333-12.373333l-331.52-331.946667a224.426667 224.426667 0 0 1 0-315.733333 223.573333 223.573333 0 0 1 315.733333 0L512 282.026667l46.08-46.08a223.573333 223.573333 0 0 1 315.733333 0 224.426667 224.426667 0 0 1 0 315.733333l-331.52 331.946667A42.666667 42.666667 0 0 1 512 896z"
      p-id="3129"
      id="heart"
    /></svg>
    <span />
  </label>
</template>
<style lang='scss' scoped>
svg{
    width: 32px;
    /* 相对定位 */
    position: relative;
    /* z-index: 10; */
}
#heart{
    /* 填充颜色 */
    fill: #eee;
    /* stroke属性可应用于任何种类的线条，文字和元素，就像一个圆的轮廓 */
    stroke: #ff6b81;
    /* 线条宽度 */
    stroke-width: 40px;
    /* 设置线条为虚线，虚线的长度 */
    stroke-dasharray: 2600;
    /* 线条的位移 */
    stroke-dashoffset: 2600;
    /* 端点为圆头 */
    stroke-linecap: round;
}
span{
    display: block;
    width: 4px;
    height: 4px;
    background-color: transparent;
    border-radius: 50%;
    /* 绝对定位 居中 */
    position: absolute;
    transform: translate(-50%,-50%) scale(0);
    /* 设置各个方向的阴影 */
    /* 通过var函数调用自定义属性--c,设置阴影颜色 */
    box-shadow: 0 -20px 0 #ff6b81,
    0 20px 0 #ff6b81,
    -20px 0 0 #ff6b81,
    20px 0 0 #ff6b81,
    -16px -16px 0 #ff6b81,
    16px -16px 0 #ff6b81,
    16px 16px 0 #ff6b81,
    -16px 16px 0 #ff6b81;
}
/* 勾选复选框执行各个动画 */
#checkbox:checked + svg #heart{
    /* 执行动画: 动画名 时长 线性的 停留在最后一帧 */
    animation: drawHeart 1s linear forwards;
}
#checkbox:checked ~ span{
    /* 执行动画: 动画名 时长 加速后减速 停留在最后一帧 */
    animation: blink 0.5s ease-in-out forwards;
    /* 动画延迟时间 */
    animation-delay: 0.85s;
}
#checkbox:checked + svg{
    /* 执行动画: 动画名 时长 线性的 停留在最后一帧 */
    animation: beat 1s linear forwards;
}
label{
    /* 鼠标移入,光标变小手 */
    cursor: pointer;
}

/* 定义动画 */
/* 画心的动画 */
@keyframes drawHeart {
    0%{
        stroke-dashoffset: 2600;
    }
    80%{
        fill: #eee;
        stroke-dashoffset: 0;
    }
    100%{
        fill: #ff6b81;
        stroke-dashoffset: 0;
    }
}
/* 小圆点闪出的动画 */
@keyframes blink {
    0%{
        transform: translate(-50%,-50%) scale(0.5);
        opacity: 0.8;
    }
    50%{
        transform: translate(-50%,-50%) scale(1);
        opacity: 1;
    }
    100%{
        transform: translate(-50%,-50%) scale(1.1);
        opacity: 0;
    }
}
/* 心跳动的动画 */
@keyframes beat {
    0%{
        transform: scale(1);
    }
    70%{
        transform: scale(1);
    }
    80%{
        transform: scale(1.2);
    }
    100%{
        transform: scale(1);
    }
}
</style>
