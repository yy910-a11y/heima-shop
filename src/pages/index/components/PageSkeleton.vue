<template name="skeleton">
  <view is="components/XtxSwiper">
    <view class="carousel XtxSwiper--carousel">
      <swiper :circular="true" :interval="3000" :current="0" :autoplay="false">
        <swiper-item
          style="
            position: absolute;
            width: 100%;
            height: 100%;
            transform: translate(0%, 0px) translateZ(0px);
          "
        >
          <navigator class="navigator XtxSwiper--navigator" hover-class="none">
            <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
          </navigator>
        </swiper-item>
        <navigator class="navigator XtxSwiper--navigator" hover-class="none">
          <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
        </navigator>
      </swiper>
      <view class="indicator XtxSwiper--indicator">
        <text class="dot XtxSwiper--dot active XtxSwiper--active"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
        <text class="dot XtxSwiper--dot"></text>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CatagoryPanel">
    <view class="category CatagoryPanel--category">
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-488 sk-text"
          >居家</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-5 sk-text">锦鲤</text>
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-97 sk-text">服饰</text>
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-546 sk-text"
          >母婴</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-403 sk-text"
          >个护</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-985 sk-text"
          >严选</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-123 sk-text"
          >数码</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-964 sk-text"
          >运动</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-382 sk-text"
          >杂项</text
        >
      </navigator>
      <navigator class="category-item CatagoryPanel--category-item" hover-class="none">
        <image class="icon CatagoryPanel--icon sk-image"></image>
        <text class="text CatagoryPanel--text sk-transparent sk-text-14-2857-611 sk-text"
          >品牌</text
        >
      </navigator>
    </view>
  </view>
  <view is="pages/index/components/HotPanel">
    <view class="panel HotPanel--panel hot HotPanel--hot">
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-987 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-828 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-577 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-256 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-462 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-831 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPanel--item">
        <view class="title HotPanel--title">
          <text class="title-text HotPanel--title-text sk-transparent sk-text-14-2857-151 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPanel--title-desc sk-transparent sk-text-14-2857-772 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPanel--cards" hover-class="none">
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPanel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/XtxGuess" class="r r">
    <view class="caption XtxGuess--caption">
      <text
        class="text XtxGuess--text sk-transparent sk-text-0-0000-27 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}
.sk-text-3-3333-692 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 26.285rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.k-text-14-2857-586 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 36.7991rpx;
  position: relative !important;
}
.sk-text-14-2857-488 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-5 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-97 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-546 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-403 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-985 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-123 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-964 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-382 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-611 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.3458rpx;
  position: relative !important;
}
.sk-text-14-2857-987 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-828 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-577 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-256 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-462 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-831 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-14-2857-151 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 44.1589rpx;
  position: relative !important;
}
.sk-text-14-2857-772 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.8925rpx;
  position: relative !important;
}
.sk-text-0-0000-27 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 31.5421rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}
.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}
.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}
.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
