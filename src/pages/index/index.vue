<script setup lang="ts">
import { getHomeBannerAPI, getHomeCatagoryAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem, CategoryItem } from '@/types/home'
import CatagoryPanel from './components/CatagoryPanel.vue'

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

//页面加载
onLoad(() => {
  getHomeBannerData()
  getHomeCatagoryData()
})
</script>
<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CatagoryPanel :list="catagoryList" />
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
