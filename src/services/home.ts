// api/home.ts
import type { BannerItem } from '@/types/home'
import { http } from '@/utils/http'

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
