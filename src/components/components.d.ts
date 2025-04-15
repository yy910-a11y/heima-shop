// src/types/components.d.ts
//因为我们在package.json中配置了Xtx,那么导入到类型为unknow,所以需要指定
import XtxSwiper from './XtxSwiper.vue'
declare module 'vue' {
  export interface GlobalComponents {
    //typedef可以拿到组件类型
    XtxSwiper: typeof XtxSwiper
  }
}
