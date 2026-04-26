import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // 1. 定義彈窗顯示狀態
  const isSettingsOpen = ref(false)

  // 2. 提供切換方法
  const toggleSettings = (state) => {
    isSettingsOpen.value = state
  }

  return { isSettingsOpen, toggleSettings }
})