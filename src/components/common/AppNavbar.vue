<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import SettingsDialog from './SettingsDialog.vue'

const router = useRouter()

// 處理選單點擊跳轉
const handleSelect = (key) => {
  if (key === 'OPEN_SETTINGS') {
    openSettings();
    return; // 這裡用 return 是為了中斷後續的 router.push
  }
  
  if (key) {
    router.push(key).catch(() => {});
  }
}

// 2. 建立一個對應組件實例的 ref
const settingsControl = ref(null)
// 3. 建立觸發函式
const openSettings = () => {
  if (settingsControl.value) {
    settingsControl.value.open() // 呼叫子組件暴露出來的 open 方法
  }
}

</script>

<template>
  <!-- 點擊el-menu-item時觸發select將網址路徑改為所點選的項目
       default-active綁定所選路徑的值，讓被選項目為高亮狀。
  -->
  <el-menu :default-active="router.currentRoute.value.path" class="navbar-menu" mode="horizontal" :ellipsis="false"
    background-color="var(--bg-color)" text-color="var(--text-primary)" active-text-color="var(--primary-color)"
    @select="handleSelect">
    <div class="logo-container" @click="router.push('/')">
      <span class="logo-text">Sapling<span class="dot">.</span></span>
    </div>

    <div class="flex-grow"></div>

    <el-menu-item index="/">首頁</el-menu-item>
    <el-menu-item index="/projects">作品集</el-menu-item>
    <el-menu-item index="/about">關於我</el-menu-item>

    <el-menu-item index="OPEN_SETTINGS" class="setting-trigger">
      <el-icon style="font-size: 1.2rem; cursor: pointer; margin: 0px; ">
        <Setting />
      </el-icon>
    </el-menu-item>

  </el-menu>
  <SettingsDialog ref="settingsControl" />


</template>

<style scoped>
.navbar-menu {
  padding: 0 2rem;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  /* 使用變數控制底部邊框顏色 */
  border-bottom: 1px solid var(--border-color);
}

.logo-container {
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: -1px;
  /* Logo 文字顏色 */
  color: var(--text-primary);
}

.dot {
  color: var(--primary-color);
}

.flex-grow {
  flex-grow: 1;
}

.el-menu-item:focus {
  background-color: none;
}

/* 確保選中狀態的底線顏色正確 */
:deep(.el-menu-item.is-active) {
  border-bottom-color: var(--primary-color) !important;
  background-color: transparent !important;
}

/* 移除滑過時的預設背景色，保持乾淨 */
:deep(.el-menu-item:hover) {
  background-color: var(--card-bg) !important;
}
</style>