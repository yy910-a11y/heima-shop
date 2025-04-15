<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import { onLoad } from '@dcloudio/uni-app'
import CustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
const bannerList = ref([])
const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  console.log(res)
  bannerList.value = res.result
}

onLoad(() => {
  getHomeBannerData()
})
</script>
<template>
  <!-- 自定义导航栏 -->
  <CustomNavbar />
  //下面这个为什么不用导入呢,是因为在package.json中配置了
  <!-- 自定义轮播图 -->
  <XtxSwiper />
  <view class="index">index</view>
</template>

<style lang="scss">
//
</style>
