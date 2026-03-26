<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router' // 引入路由鉤子
import gsap from 'gsap'

const router = useRouter() // 宣告路由實例

// 技術棧資料
const techStack = [
  { name: 'Vue 3', type: 'success' },
  { name: 'GSAP', type: 'warning' },
  { name: 'Element Plus', type: 'primary' },
  { name: 'Python Crawler', type: 'info' },
  { name: 'Git / Sourcetree', type: 'danger' }
]

// 核心優勢資料
const highlights = [
  {
    title: '實戰獲獎背景',
    desc: '具備 Java Android 開發基礎，曾獲經濟部搶鮮大賽佳作及全國青年創意競賽銀牌。'
  },
  {
    title: '扎實技術進修',
    desc: '完成 400 小時網頁設計專業訓練，掌握從 HTML/CSS 到 PHP/MySQL 的全棧基礎。'
  },
  {
    title: '熱衷拆解研究',
    desc: '熱愛鑽研底層原理，能將 Python 爬蟲與 GSAP 動態特效整合至 Vue 專案中。'
  }
]

onMounted(() => {
  const tl = gsap.timeline({ defaults: { ease: 'back.out(1.7)', duration: 0.4 } })
  tl.from('.hero-title', { y: -50, opacity: 0 })
      .from('.hero-subtitle', { y: 20, opacity: 0 }, '-=0.4')
      // 使用 .to() 或確保 .from() 的透明度正確
      .from('.cta-btn', { scale: 0, opacity: 0, stagger: 0.2, clearProps: "all" }, '-=0.4')
      .from('.skill-tag', { x: -20, opacity: 0, stagger: 0.1, clearProps: "all" }, '-=0.2')
      .from('.feature-card', { y: 30, opacity: 0, stagger: 0.2, clearProps: "all" })
})
</script>

<template>
  <div class="home-container">
    <el-row justify="center" align="middle" class="hero-row">
      <el-col :xs="22" :sm="18" :md="14" :lg="12">
        <div class="hero-content">
          <h1 class="hero-title">你好，我是 <span class="text-vue">Sapling</span></h1>
          <p class="hero-subtitle">
            從 Android 到 Web 前端 — <el-text type="primary" size="large">熱愛拆解與實作</el-text> 的互動開發者
          </p>

          <div class="cta-group">
            <el-button type="primary" size="large" round class="cta-btn" @click="router.push('/projects')">
              瀏覽開發作品
            </el-button>
            <el-button size="large" round class="cta-btn" @click="router.push('/about')">
              關於我的歷程
            </el-button>
          </div>

          <div class="tech-box">
            <p style="margin-bottom: 15px; color: var(--text-secondary);">技術工具箱：</p>
            <el-space wrap>
              <el-tag 
                v-for="item in techStack" 
                :key="item.name" 
                :type="item.type"
                effect="dark"
                class="skill-tag"
                round
              >
                {{ item.name }}
              </el-tag>
            </el-space>
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="features-row">
      <el-col :span="8" :xs="24" v-for="item in highlights" :key="item.title" style="padding: 10px;">
        <el-card shadow="hover" class="feature-card">
          <template #header>
            <div class="card-header">
              <span>{{ item.title }}</span>
            </div>
          </template>
          <p class="feature-desc">{{ item.desc }}</p>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.home-container {
  padding: 40px 20px;
  background-color: var(--bg-color);
  width: 100%;
  box-sizing: border-box;
}

.hero-row {
  min-height: 50vh;
  text-align: center;
}

.hero-title {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  margin-bottom: 20px;
  color: var(--text-primary); 
}

.text-vue {
  color: var(--primary-color); 
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-secondary); 
  margin-bottom: 40px;
}

.cta-group {
  margin-bottom: 50px;
}

.tech-box {
  background: var(--card-bg); 
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--border-color); 
}

.features-row {
  margin-top: 60px;
  width: 100%;
  margin-left: 0 !important;
  margin-right: 0 !important;
}

.feature-card {
  height: 100%;
  background-color: var(--card-bg) !important;
  border: 1px solid var(--border-color) !important;
}

.feature-desc {
  color: var(--text-secondary);
  line-height: 1.6;
}

.feature-card :deep(.el-card__header) {
  border-bottom: 1px solid var(--border-color);
  color: var(--primary-color);
  font-weight: bold;
}

@media (max-width: 768px) {
  .cta-btn {
    margin: 10px 5px;
  }
}
</style>