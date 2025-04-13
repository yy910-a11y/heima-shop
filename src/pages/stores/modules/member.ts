import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useMemberStore = defineStore(
  'member',
  () => {
    //会员信息
    const profile = ref()
    //保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = undefined
    }
    //清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined
    }
    //记得return
    return {
      profile,
      setProfile,
      clearProfile,
    }
  },
  //TODO:初始化
  {
    //下面这个是之前学的，网页端用的，现在不适用
    //persist: true,
    //小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
