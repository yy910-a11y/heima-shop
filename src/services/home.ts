// api/home.ts
import type { BannerItem, CategoryItem, GuessItem, HotItem } from '@/types/home'
import { http } from '@/utils/http'
import type { PageResult, PageParams } from '@/types/global'
export const getHomeBannerAPI = (distributionSite = 1) => {
  // 明确传递泛型参数，并改用 params 传递 GET 参数
  return http<BannerItem[]>({
    method: 'GET',
    url: '/home/banner',
    params: {
      // GET 请求使用 params，而非 data
      distributionSite,
    },
  })
}
// /home/category/mutli
// 首页-前台分类 小程序
//GET
export const getHomeCatagoryAPI = () => {
  return http<CategoryItem[]>({
    method: 'GET',
    url: '/home/category/mutli',
  })
}
// services/home.ts
/**
 * 首页-热门推荐-小程序
 */
export const getHomeHotAPI = () => {
  return http<HotItem[]>({
    method: 'GET',
    url: '/home/hot/mutli',
  })
}
///home/goods/guessLike
export const getHomeGoodsGuessLikeAPI = (data?: PageParams) => {
  return http<PageResult<GuessItem>>({
    method: 'GET',
    url: '/home/goods/guessLike',
    data,
  })
}
