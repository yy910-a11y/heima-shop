<script setup lang="ts">
import { getHomeBannerAPI, getHomeCatagoryAPI, getHomeHotAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CatagoryPanel from './components/CatagoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'
import PageSkeleton from './components/PageSkeleton.vue'
//获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
//获取前台分类数据
const catagoryList = ref<CategoryItem[]>([])
const getHomeCatagoryData = async () => {
  const res = await getHomeCatagoryAPI()
  catagoryList.value = res.result
}
//获取热门推荐数据
const hotList = ref<HotItem[]>([])
const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}
// 是否加载中标记
const isLoading = ref(false)
//页面加载
onLoad(async () => {
  isLoading.value = true
  await Promise.all([getHomeBannerData(), getHomeCatagoryData(), getHomeHotData()])
  isLoading.value = false
})
//获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()
//滚动触底
const onScrolltolower = () => {
  console.log('滚动触底啦')
  guessRef.value?.getMore()
}
//当前下拉刷新的状态
const isTriggered = ref(false)
//自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  //开始动画
  isTriggered.value = true
  //加载数据
  //下面这个太耗时
  // await getHomeBannerData()
  // await getHomeCatagoryAPI()
  // await getHomeHotAPI()
  //重置猜你喜欢组件数据
  guessRef.value?.resetData()
  await Promise.all([
    getHomeBannerData(),
    getHomeCatagoryAPI(),
    getHomeHotAPI(),
    guessRef.value?.getMore(),
  ])
  //关闭动画
  isTriggered.value = false
}
</script>
<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 滚动容器 -->
  <scroll-view
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
    @scrolltolower="onScrolltolower"
    class="scroll-view"
    scroll-y
  >
    <PageSkeleton v-if="isLoading" />
    <template v-else>
      <!-- 自定义轮播图 -->
      <XtxSwiper :list="bannerList" />
      <!-- 分类面板 -->
      <CatagoryPanel :list="catagoryList" />
      <!-- 热门推荐 -->
      <HotPanel :list="hotList" />
      <!-- 猜你喜欢 -->
      <XtxGuess ref="guessRef" />
    </template>
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.scroll-view {
  flex: 1;
}
</style>
