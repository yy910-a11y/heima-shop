<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'
import CatagoryPanel from './components/CatagoryPanel.vue'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>
<template>
  <!-- 自定义导航栏 -->9
  <CustomNavbar />
  <!-- 自定义轮播图 -->
  <XtxSwiper :list="bannerList" />
  <!-- 分类面板 -->
  <CatagoryPanel />
  <view class="index">index</view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
}
</style>
