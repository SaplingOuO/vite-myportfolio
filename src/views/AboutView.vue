<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

// 歷程資料：整合您的競賽、進修與自學經驗
const timelineEvents = [
  {
    timestamp: '2025 - 2026',
    title: '自學與專案實踐',
    content: '專注於 Vue 3 生態系，結合 GSAP 打造互動視覺。使用 Python 撰寫爬蟲獲取資料，並以 Git 進行版本控制，部署個人作品集。',
    color: 'var(--primary-color)'
  },
  {
    timestamp: '2017 - 2018',
    title: '網頁設計專業進修 (400hr)',
    content: '於巨匠電腦深入學習 HTML5, CSS3, JS, PHP 與 MySQL。期間建立個人首個網站，奠定網頁開發基石。',
    color: 'var(--text-primary)'
  },
  {
    timestamp: '2014 - 2016',
    title: '大學時期 - Android 系統開發',
    content: '主修 Java Android 開發。帶領團隊製作「移動定位交友 APP」與「超簡易記帳本」，於多項全國性競賽獲獎。',
    color: 'var(--text-primary)'
  }
]

// 獲獎清單
const awards = [
  { date: '2017', name: '校內手機攝影比賽 第二名' },
  { date: '2016', name: '全國青年創意應用競賽〈超簡易記帳本〉銀牌' },
  { date: '2015', name: '經濟部搶鮮大賽〈Let\'s Together〉入圍' },
  { date: '2014', name: '映象柴山生態故事創作競賽〈戀戀柴山〉佳作' }
]

onMounted(() => {
  // 建立基礎動作
  const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.8 } })

  // 套用至class，並細調各class入場畫面
  tl.from('.about-title', { y: -30, opacity: 0 })
    .from('.intro-text', { x: -30, opacity: 0 }, '-=0.4')
    .from('.timeline-item', { 
      x: 30, 
      opacity: 0, 
      stagger: 0.3 
    }, '-=0.2')
    .from('.award-row', { opacity: 0, y: 20, stagger: 0.1 }, '-=0.5')
})
</script>

<template>
  <div class="about-container">
    <el-row justify="center">
      <el-col :xs="22" :sm="20" :md="16" :lg="14">
        
        <section class="intro-section">
          <h2 class="about-title">關於我 <span class="text-vue">Sapling</span></h2>
          <div class="intro-text">
            <p>
              我是一個熱愛學習與動手實作的人。從學生時期開始，無論是電腦硬體、機車維修或程式開發，我都喜歡親自研究、拆解並了解其原理。
            </p>
            <p>
              這種「拆解者」的特質讓我在面對技術挑戰時，總能保持耐心與熱情，樂於嘗試不同的解決方法。
            </p>
          </div>
        </section>

        <section class="timeline-section">
          <h3 class="section-subtitle">發展歷程</h3>
          <el-timeline>
            <el-timeline-item
              v-for="(event, index) in timelineEvents"
              :key="index"
              :timestamp="event.timestamp"
              :color="event.color"
              placement="top"
              class="timeline-item"
            >
              <el-card class="timeline-card">
                <h4 class="event-title">{{ event.title }}</h4>
                <p class="event-content">{{ event.content }}</p>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </section>

        <section class="awards-section">
          <h3 class="section-subtitle">參展與競賽經驗</h3>
          <div class="award-list">
            <div v-for="award in awards" :key="award.name" class="award-row">
              <span class="award-date">{{ award.date }}</span>
              <span class="award-name">{{ award.name }}</span>
            </div>
          </div>
        </section>

      </el-col>
    </el-row>
  </div>
</template>

<style scoped>
.about-container {
  padding: 60px 0;
  color: var(--text-primary);
}

.about-title {
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.text-vue {
  color: var(--primary-color);
}

.intro-text p {
  line-height: 1.8;
  font-size: 1.1rem;
  color: var(--text-secondary);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.8rem;
  margin: 3rem 0 1.5rem;
  color: var(--primary-color);
  border-left: 5px solid var(--primary-color);
  padding-left: 15px;
}

/* 時間軸卡片樣式 */
.timeline-card {
  background-color: var(--card-bg) !important;
  border: 1px solid var(--border-color) !important;
  color: var(--text-primary) !important;
}

.event-title {
  margin-top: 10px;
  margin-bottom: 10px;
  color: var(--primary-color);
}

.event-content {
  color: var(--text-secondary);
  line-height: 1.6;
}

/* 競賽清單樣式 */
.award-list {
  background: var(--card-bg);
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
}

.award-row {
  display: flex;
  gap: 20px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border-color);
}

.award-row:last-child {
  border-bottom: none;
}

.award-date {
  color: var(--primary-color);
  font-weight: bold;
  min-width: 60px;
}

.award-name {
  color: var(--text-primary);
}


/* 覆蓋 Element Plus 時間軸文字顏色 */
:deep(.el-timeline-item__timestamp) {
  color: var(--text-secondary) !important;
  font-weight: bold;
}
</style>