<script setup lang='ts'>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'
// 热门精选s
const activeHot = ref('Scratch基础')
const HotData = ref<object>(
  {
    Courses: [
      {
        course_id: '1',
        course_title: '小豆',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础1语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '2',
        course_title: '小豆2',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础2语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '3',
        course_title: 'Scratch基础3',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础3语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '4',
        course_title: 'Scratch基础4',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础4语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '4',
        course_title: 'Scratch基础4',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础4语言是面向过程的程序设计语言，而scratch语言'
      }
    ],
    Hotweek: [
      {
        rank: 1,
        id: 1435255,
        name: 'Boss第13届 Web 前端组省赛真题解析（大学组）'
      },
      {
        rank: 2,
        id: 1738041,
        name: 'Boss 11～13-python 届省赛真题解析（单片机）'
      },
      {
        rank: 3,
        id: 1780259,
        name: 'Boss 11～13 届年真题解析（Python 组）'
      },
      {
        rank: 4,
        id: 1780259,
        name: 'Boss 11～13 届年真题解析（Python 组）'
      },
      {
        rank: 5,
        id: 1780259,
        name: 'Boss 11～13 届年真题解析（Python 组）'
      },
      {
        rank: 6,
        id: 1780259,
        name: 'Boss 11～13 届年真题解析（Python 组）'
      }
    ]
  }
)
const handleClickHot = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab.props.label, event)
  activeHot.value = tab.props.label
}
// 热门精选e

// 竞赛考证s
const activeRace = ref('最新')
const RaceData = ref<object>(
  {
    Courses: [
      {
        course_id: '123',
        course_title: '最新1',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础1语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '124',
        course_title: '最新2',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础2语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '125',
        course_title: 'Scratch基础3',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础3语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '126',
        course_title: 'Scratch基础4',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础4语言是面向过程的程序设计语言，而scratch语言'
      }
    ],
    Points: [
      {
        rank: 1,
        id: 1435255,
        score: 169,
        name: 'LOU1481578842',
        avatar: 'https://static-qiniu.lanqiao.cn/main.lanqiao.cn/avatar/head.png',
        school_id: 1439,
        school_name: '湖州师范学院'
      },
      {
        rank: 2,
        id: 1738041,
        score: 169,
        name: '小恶魔的叹息',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid3143416-20221012-1665558597793'
      },
      {
        rank: 3,
        id: 1780259,
        score: 168,
        name: '工具人39号',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid2401700-20211022-1634890873319',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 4,
        id: 1780259,
        score: 168,
        name: '政管',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid3143416-20221012-1665558597793',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 5,
        id: 1780259,
        score: 168,
        name: '人39号',
        avatar: 'https://static-qiniu.lanqiao.cn/main.lanqiao.cn/avatar/head.png',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 6,
        id: 1780259,
        score: 168,
        name: '工具',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid2401700-20211022-1634890873319',
        school_id: 1510,
        school_name: '聊城大学'
      }
    ]
  }
)
const handleClickRace = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab.props.label, event)
  activeRace.value = tab.props.label
}
// 竞赛考证e

// 职场提升s
const activePaths = ref('c++工程师')
const PathsData = ref<object>(
  {
    Courses: [
      {
        course_id: '123',
        course_title: 'c++工程师1',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础1语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '124',
        course_title: 'c++工程师2',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础2语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '125',
        course_title: 'c++工程师3',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础3语言是面向过程的程序设计语言，而scratch语言'
      },
      {
        course_id: '126',
        course_title: 'c++工程师4',
        course_img: 'https://www.murphycode.com/cover/base-for-website.png',
        course_info: 'Scratch基础4语言是面向过程的程序设计语言，而scratch语言'
      }
    ],
    StudentRank: [
      {
        rank: 1,
        id: 1435255,
        score: 169,
        name: 'LOU1481578842',
        avatar: 'https://static-qiniu.lanqiao.cn/main.lanqiao.cn/avatar/head.png',
        school_id: 1439,
        school_name: '湖州师范学院'
      },
      {
        rank: 2,
        id: 1738041,
        score: 169,
        name: '小恶魔的叹息',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid3143416-20221012-1665558597793'
      },
      {
        rank: 3,
        id: 1780259,
        score: 168,
        name: '工具人39号',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid2401700-20211022-1634890873319',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 4,
        id: 1780259,
        score: 168,
        name: '政管',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid3143416-20221012-1665558597793',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 5,
        id: 1780259,
        score: 168,
        name: '人39号',
        avatar: 'https://static-qiniu.lanqiao.cn/main.lanqiao.cn/avatar/head.png',
        school_id: 1510,
        school_name: '聊城大学'
      },
      {
        rank: 6,
        id: 1780259,
        score: 168,
        name: '工具',
        avatar: 'https://static-qiniu.lanqiao.cn/avatar/uid2401700-20211022-1634890873319',
        school_id: 1510,
        school_name: '聊城大学'
      }
    ]
  }
)
const handleClickPaths = (tab: TabsPaneContext, event: Event) => {
  // console.log(tab.props.label, event)
  activePaths.value = tab.props.label
}
// 职场提升e

interface INavItem {
  id: string
  title: string
}
// 热门精选
const HotList = ref<INavItem[]>([
  { id: '1', title: 'Scratch基础' },
  { id: '2', title: 'Scratch进阶' },
  { id: '3', title: 'Python基础' },
  { id: '4', title: 'Python进阶' }
])
// 竞赛考证
const RaceList = ref<INavItem[]>([
  { id: '1', title: '最新' },
  { id: '2', title: 'Boss' },
  { id: '3', title: 'ACM-ICPC' }
])
// 职场提升
const PathsList = ref<INavItem[]>([
  { id: '1', title: 'c++工程师' },
  { id: '2', title: 'Python工程师' },
  { id: '3', title: 'php工程师' }
])
</script>
<template>
  <page-container>
    <section class="container">
      <div class="pd-20">
        <!-- 热门精选 -->
        <div class="components-hot">
          <el-row>
            <el-col :span="24">
              <div class="head">
                <div class="head-left">
                  <a
                    href="/courses/"
                    class="title"
                    style="background-image: url(&quot;https://static.shiyanlou.com/lanqiao/frontend/dist/img/hot.a4b2e2a.png&quot;);"
                  />
                  <div class="tabs">
                    <el-tabs
                      v-model="activeHot"
                      class="demo-tabs"
                      @tab-click="handleClickHot"
                    >
                      <el-tab-pane
                        v-for="(item, index) in HotList"
                        :key="index"
                        :label="item.title"
                        :name="item.title"
                        :lazy="true"
                      >
                        <app-cardtabs :father-data="HotData" />
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 竞赛考证 -->
        <div class="components-race">
          <el-row>
            <el-col :span="24">
              <div class="head">
                <div class="head-left">
                  <a
                    href="/courses/"
                    class="title"
                    style="background-image: url(&quot;https://static.shiyanlou.com/lanqiao/frontend/dist/img/race.0f24d77.png&quot;);"
                  />
                  <div class="tabs">
                    <el-tabs
                      v-model="activeRace"
                      class="demo-tabs"
                      @tab-click="handleClickRace"
                    >
                      <el-tab-pane
                        v-for="(item, index) in RaceList"
                        :key="index"
                        :label="item.title"
                        :name="item.title"
                        :lazy="true"
                      >
                        <app-cardtabs :father-data="RaceData" />
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
        <!-- 职场提升 -->
        <div
          class="components-paths"
          style="padding: 0;"
        >
          <el-row>
            <el-col :span="24">
              <div class="head">
                <div class="head-left">
                  <a
                    href="/courses/"
                    class="title"
                    style="background-image: url(&quot;https://static.shiyanlou.com/lanqiao/frontend/dist/img/pro.4ec48ff.png&quot;);"
                  />
                  <div class="tabs">
                    <el-tabs
                      v-model="activePaths"
                      class="demo-tabs"
                      @tab-click="handleClickPaths"
                    >
                      <el-tab-pane
                        v-for="(item, index) in PathsList"
                        :key="index"
                        :label="item.title"
                        :name="item.title"
                        :lazy="true"
                      >
                        <app-cardtabs :father-data="PathsData" />
                      </el-tab-pane>
                    </el-tabs>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </section>
  </page-container>
</template>
<style lang='scss' scoped>
.components-hot,.components-race,.components-paths {
  padding-bottom: 40px;
  width: 100%;
}

.head .head-left {
  display: flex;
  flex-wrap: wrap;
}

.head .head-left .title{
  height: 30px;
  width: 180px;
  background-size: 100% 100%;
}

.head .head-left .tabs{
  margin-top: 6px;
  width: 100%;
}
</style>
