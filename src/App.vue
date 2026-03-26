<script setup>
import { RouterView } from 'vue-router'
// 引入拆分出去的組件
import AppNavbar from '@/components/common/AppNavbar.vue'
import AppFooter from '@/components/common/AppFooter.vue'
</script>

<template>
  <AppNavbar />
  <div class="app-layout">

    <main class="content">
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 確保 Footer 至少會在頁面底部 */
}
.content {
  flex: 1; /* 自動撐開中間區域 */
}
</style>