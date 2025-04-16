import { useMemberStore } from '@/stores'
/*
添加拦截器
  拦截request请求
  拦截uploadFile文件上传

TODO:
  1.非http开头需拼接地址
  2.请求超时
  3.添加小程序端请求头标识
  4.添加token请求头标识
*/
const baseURL = 'https://pcapi-xiaotuxian-front-devtest.itheima.net'

//添加拦截器
const httpInterceptor = {
  invoke(options: UniApp.RequestOptions) {
    //1.非http开头需拼接地址
    if (!options.url.startsWith('http')) {
      options.url = baseURL + options.url
    }
    //2.请求超时
    options.timeout = 10000
    //3.添加小程序端请求头标识
    options.header = {
      ...options.header,
      'source-client': 'miniapp',
    }
    //添加token请求头标识
    const memberStore = useMemberStore()
    const token = memberStore.profile?.token
    if (token) {
      options.header.Authorization = token
    }
  },
}
uni.addInterceptor('request', httpInterceptor)
uni.addInterceptor('uploadFile', httpInterceptor)
/*
请求函数
@param UniApp RequestOptions
@returns Promise
1.返回Promise对象
2.请求成功
  2.1提取核心数据 res.data
  2.2添加类型 支持泛型
3.请求失败
  3.1网络错误
  3.2 401错误
  3.3其它错误
*/
type Data<T> = {
  code: string
  msg: string
  result: T
}
//2.2添加类型 支持泛型
export const http = <T>(options: UniApp.RequestOptions) => {
  //返回Promise对象
  return new Promise<Data<T>>((resolve, reject) => {
    uni.request({
      ...options,
      //请求成功
      success(res) {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          //提取核心数据
          resolve(res.data as Data<T>)
        } else if (res.statusCode === 401) {
          const memberStore = useMemberStore()
          memberStore.clearProfile()
          uni.navigateTo({ url: '/pages/login/login' })
          reject(res)
        } else {
          //3.3其它错误
          uni.showToast({
            icon: 'none',
            title: (res.data as Data<T>).msg || '请求错误',
          })
          reject(res)
        }
      },
      //响应失败
      fail(err) {
        uni.showToast({
          title: '网络错误，换个网络试试',
          icon: 'none',
        })
        reject(err)
      },
    })
  })
}
