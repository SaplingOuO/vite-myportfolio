<script setup>
// 資訊連結平台資料
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/SaplingOuO' },
  { name: 'Email', url: 'mailto:SaplingWork@gmail.com' }
]
</script>

<template>
  <footer class="app-footer">
    <el-divider class="footer-divider" />
    
    <div class="footer-content">
      <el-row justify="space-between" align="middle">
        <el-col :span="12" :xs="24" class="copyright">
          <p>© 2026 <strong>Sapling</strong>. Built with Vue 3 & Element Plus</p>
        </el-col>
        
        <!-- 資訊連結 -->
        <el-col :span="12" :xs="24" class="links">
          <el-space spacer="|">
            <el-link 
              v-for="link in socialLinks" 
              :key="link.name" 
              :href="link.url" 
              target="_blank"
              class="footer-link"
            >
              {{ link.name }}
            </el-link>
          </el-space>
        </el-col>
      </el-row>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  padding: 2rem 0;
  /* 使用深灰色背景與主背景做區隔 */
  background-color: var(--bg-color); 
  margin-top: auto;
}

.footer-divider {
  margin-top: 0;
  border-top: 1px solid var(--border-color);
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.copyright {
  /* 使用次要文字顏色 */
  color: var(--text-secondary); 
  font-size: 0.9rem;
}

.copyright strong {
  color: var(--text-primary);
}

.links {
  text-align: right;
}

.footer-link {
  color: var(--text-secondary);
}

@media (max-width: 768px) {
  .copyright, .links {
    text-align: center;
    margin-bottom: 1rem;
  }
}

/* 連結滑過特效 */
.el-link:hover {
  color: var(--primary-color) !important;
}
</style>