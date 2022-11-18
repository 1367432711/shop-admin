<template>
  <el-row
    :gutter="0"
    style="padding: 10px 0px;"
    justify="space-between"
  >
    <!-- 主页课程 -->
    <el-col
      :span="19"
      class="colcourses"
    >
      <el-card
        class="cardourses"
        v-for="(o, index) in props.fatherData.Courses"
        :key="index"
        :body-style="{ padding: '0px' }"
        shadow="hover"
      >
        <div class="coursebox">
          <el-link
            :underline="false"
            :href="'courses/'+o.course_id"
          >
            <div class="curtain" />
            <div class="picture-box">
              <img
                :src="o.course_img"
                class="picture"
              >
              <div
                class="label"
                data-v-1881fa75=""
              >
                赛前冲刺
              </div>
            </div>
            <div class="content">
              <div
                :title="o.course_title"
                class="name"
              >
                {{ o.course_title }}
              </div>
              <div
                :title="o.course_info"
                class="description multiple2"
              >
                {{ o.course_info }}
              </div>
              <div class="other-info">
                <span>
                  <span>初级 · </span>
                  9272人学过
                </span>
                <div class="type-bootcamp">
                  <div />
                </div>
              </div>
            </div>
          </el-link>
        </div>
      </el-card>
    </el-col>
    <!-- 本周最热 -->
    <el-col :span="5">
      <el-card
        :body-style="{ padding: '0px' }"
        shadow="hover"
      >
        <div class="cm-item">
          <!-- 本周最热 -->
          <div
            class="week-hot"
            v-if="props.fatherData.Hotweek"
          >
            <div class="head-box">
              <h2>本周最热</h2>
              <el-link
                class="all"
                :underline="false"
              >
                全部>>
              </el-link>
            </div>
            <div class="list-box">
              <div class="list-wh-item">
                <div
                  class="wh-item"
                  v-for="(item, index) in props.fatherData.Hotweek"
                  :key="index"
                >
                  <div
                    class="sort-number first"
                    v-if="item.rank==1"
                  >
                    0{{ item.rank }}
                  </div>
                  <div
                    class="sort-number second"
                    v-else-if="item.rank==2"
                  >
                    0{{ item.rank }}
                  </div>
                  <div
                    class="sort-number third"
                    v-else-if="item.rank==3"
                  >
                    0{{ item.rank }}
                  </div>
                  <div
                    class="sort-number"
                    v-else
                  >
                    0{{ item.rank }}
                  </div>
                  <div class="wh-inner">
                    <el-link
                      :underline="false"
                      class="name"
                    >
                      {{ item.name }}
                    </el-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 个人积分榜 -->
          <div
            class="week-hot"
            v-else-if="props.fatherData.Points"
          >
            <div class="head-box">
              <h2>个人积分榜</h2>
              <el-link
                class="all"
                :underline="false"
              >
                全部>>
              </el-link>
            </div>
            <div class="list-box">
              <el-link
                :underline="false"
                href="/contests/"
                target="_blank"
                class="list-item"
                v-for="(item, index) in props.fatherData.Points"
                :key="index"
              >
                <div class="badge">
                  <img
                    :src="item.rank<=3 ? MedalHot[item.rank] : item.avatar"
                    height="20"
                    alt=""
                    style="border-radius: 50%;"
                  >
                  <div
                    :title="item.name"
                    class="user-name"
                  >
                    {{ item.name }}
                  </div>
                </div>
                <div
                  :title="item.school_name"
                  class="school"
                >
                  {{ item.school_name }}
                </div>
              </el-link>
            </div>
          </div>
          <!-- 学员排行 -->
          <div
            class="week-hot"
            v-else-if="props.fatherData.StudentRank"
          >
            <div class="head-box">
              <h2>学员排行</h2>
              <el-link
                class="all"
                :underline="false"
              >
                全部>>
              </el-link>
            </div>
            <div class="list-box">
              <el-link
                :underline="false"
                href="/contests/"
                target="_blank"
                class="list-item"
                v-for="(item, index) in props.fatherData.StudentRank"
                :key="index"
              >
                <div class="badge">
                  <img
                    :src="item.rank<=3 ? MedalHot[item.rank] : item.avatar"
                    height="20"
                    alt=""
                    style="border-radius: 50%;"
                  >
                  <div
                    :title="item.name"
                    class="user-name"
                  >
                    {{ item.name }}
                  </div>
                </div>
                <div
                  :title="item.school_name"
                  class="school"
                >
                  {{ item.school_name }}
                </div>
              </el-link>
            </div>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
// 定义数据类型
const props = defineProps({
  fatherData: {
    Courses: Array,
    Hotweek: Array,
    Points: Array,
    StudentRank: Array,
    type: Object, // 类型对象
    // eslint-disable-next-line vue/require-valid-default-prop
    default: '当前Child.vue的默认值'// 如果没有传递msg参数,默认值是这个
  }
})
//
// console.log(props.fatherData)
const MedalHot = ref<any>({
  1: 'https://static.shiyanlou.com/lanqiao/frontend/dist/img/rank-1.1604a1e.png',
  2: 'https://static.shiyanlou.com/lanqiao/frontend/dist/img/rank-2.202c618.png',
  3: 'https://static.shiyanlou.com/lanqiao/frontend/dist/img/rank-3.73e7d97.png'
})

</script>

<style>
.colcourses{
  display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.cardourses{
  width:24%;
  margin-bottom: 14px;
}

.el-col-5 {
  max-width: 20% !important;
  width: 20% !important;
}
.cm-item {
  overflow: hidden;
  border-radius: 10px;
}

.cm-item .week-hot {
  position: relative;
  height: 288px;
  padding: 17px 17px;
  background: linear-gradient(180deg, rgba(0, 126, 246, .1), hsla(0, 0%, 100%, .1) 20%, #fff);
}

.cm-item .week-hot:before {
  position: absolute;
  display: inline-block;
  content: "";
  width: 87px;
  height: 87px;
  border-bottom-right-radius: 87px;
  border-top-left-radius: 10px;
  left: 0;
  top: 0;
  background: #2e7eee;
  opacity: .05;
}

.week-hot .head-box {
  margin-bottom: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.week-hot .head-box>h2 {
  margin: 0;
  font-size: 20px;
  font-weight: 500;
  color: #000;
}

.week-hot .head-box>.all {
  font-size: 14px;
  font-weight: 400;
}

.week-hot .list-box {
  margin-top: 17px;
  overflow-y: auto;
}

.week-hot .list-box .list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.week-hot .list-box .list-item .el-link__inner {
  display: contents;
}

/* 最热排行开始 */

.week-hot .list-box .list-wh-item .wh-item {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  margin-bottom: 12px;
}

.week-hot .list-box .list-wh-item .wh-item .el-link__inner {
  display: contents;
}

.week-hot .list-box .list-wh-item .wh-item .sort-number {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 10px;
  font-size: 12px;
  font-weight: 500;
  color: #fff;
  background-color: var(--el-color-info);
  border-radius: 50%;
}

.week-hot .list-box .list-wh-item .wh-item .wh-inner {
  width: calc(100% - 36px);
}

.week-hot .list-box .list-wh-item .wh-item .wh-inner .name {
  display: block;
  overflow: hidden;
  font-size: 14px;
  text-align: left;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.week-hot .list-box .list-wh-item .wh-item .sort-number.first {
  background-color: var(--el-color-primary);
}

.week-hot .list-box .list-wh-item .wh-item .sort-number.second {
  background-color: #ff5905;
}

.week-hot .list-box .list-wh-item .wh-item .sort-number.third {
  background-color: #ffb92e;
}

/* 最热排行结束 */
.week-hot .list-box .list-item .badge {
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  align-items: center;
}

.week-hot .list-box .list-item .badge .user-name {
  max-width: 86px;
  font-size: 14px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.week-hot .list-box .list-item .school {
  flex: 1;
  text-align: right;
  font-size: 12px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  max-width: 72px;
}

.coursebox .el-link {
  padding: 15px 15px;
  display: flex;
}

.coursebox .el-link__inner {
  display: block;
  width: 100%;
}

.el-card {
  border-radius: 10px !important;
}
.el-tabs__nav-wrap::after{
  background-color: #fff !important;
}
.multiple2,
.multiple3 {
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}

.coursebox .curtain {
  /* background: linear-gradient(318deg, #1a597f 0%, #bf3a4b 100%); */
  background: linear-gradient(1deg, #a8dda8 0%, #28abb9 100%);
  top: 0;
  left: 0;
  position: absolute;
  width: 100%;
  height: 100px;
}

.coursebox .picture-box {
  position: relative;
  width: 100%;
  height: 140px;
  margin-bottom: 12px;
  overflow: hidden;
  border-radius: 10px;
}

.coursebox .picture-box .picture {
  width: 100%;
  z-index: 4;
  height: 100%;
  display: block;
  transition: all .2s;
}

/* .picture-box img {
  position: relative;
  z-index: 2;
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
  -webkit-transition: -webkit-transform 160ms ease-in-out;
  transition: -webkit-transform 160ms ease-in-out;
  -o-transition: transform 160ms ease-in-out;
  transition: transform 160ms ease-in-out;
  transition: transform 160ms ease-in-out, -webkit-transform 160ms ease-in-out
}

.picture-box img:hover {
  opacity: 0.9;
  -webkit-transform: scale(1.06);
  -ms-transform: scale(1.06);
  transform: scale(1.06)
} */

.coursebox .picture-box .label {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 3px 10px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  background: linear-gradient(318deg, #2d58ff, #3c8dff);
  border-radius: 0 10px 0 8px;
}

.coursebox .content {
  display: flex;
  justify-content: space-between;
  min-height: 112px;
  flex-direction: column;
  align-items: flex-start;
}

.coursebox .content .description {
  height: 60px;
  padding: 10px;
  margin: 10px 0;
  font-size: 14px;
  line-height: 32px;
  text-align: initial;
  color: #999;
  background: #fafafa;
  border-radius: 5px;
}

.coursebox .content .other-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  color: #999;
}

.coursebox .content .other-info .type-bootcamp {
  height: 22px;
  font-size: 14px;
  text-align: center;
  background-size: 100% 100%;
  border-radius: 4px;
}

.coursebox .content .other-info .type-bootcamp div {
  width: 22px;
  height: 22px;
  background-image: url(https://static.shiyanlou.com/lanqiao/frontend/dist/img/plus-vip-mini.d77e5ab.png);
  background-size: 100% 100%;
}

.coursebox .content .other-info .type-bootcamp div::after {
  transition: all .3s;
  display: block;
  content: "";
  width: 0;
  height: 22px;
}

.coursebox .content .other-info .type-bootcamp div:hover {
  width: 96px;
  height: 22px;
  background-image: none;
  position: absolute;
  right: 14px;
  z-index: 1;
}

.coursebox .content .other-info .type-bootcamp div:hover:after {
  width: 96px;
  background-size: 100% 100%;
  background-image: url(https://static.shiyanlou.com/lanqiao/frontend/dist/img/plus-vip.5c848a9.png);
}
</style>
