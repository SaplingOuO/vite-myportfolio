# 🚀 My Portfolio 2026

這是一個基於 **Vue 3 (Composition API)** 開發的個人作品集網站。本專案不僅展示了我的前端開發技術，也實踐了動態視覺與模組化開發的思維。

## 🛠️ 技術棧 (Tech Stack)

* **核心框架**: [Vue 3](https://vuejs.org/) (Vite)
* **狀態管理**: [Pinia](https://pinia.vuejs.org/) - 負責全域狀態與資料存取。
* **路由管理**: [Vue Router](https://router.vuejs.org/) - 實現單頁應用 (SPA) 流暢導航。
* **動態特效**: [GSAP](https://greensock.com/gsap/) - 處理高品質的進場動畫與交錯視覺效果。
* **UI 組件庫**: [Element Plus](https://element-plus.org/) - 提供標準化且美觀的基礎組件。
* **樣式系統**: CSS Variables - 實現全域黑魂風格主題維護。

---

## ✨ 專案亮點

* **模組化架構**：採用清晰的資料夾結構，將邏輯 (Logic)、視圖 (View) 與資料 (Data) 徹底分離。
* **GSAP 深度整合**：實作 Stagger 交錯動畫，並解決動畫與 CSS 轉場 (Transition) 之間的樣式衝突。
* **響應式設計**：完美配適桌機與行動端裝置。
* **優化導航體驗**：實作路由切換自動置頂 (Scroll Behavior)，優化瀏覽流程。

---

## 📂 專案目錄結構 (Project Structure)

```text
src/ 
├── api/        # 🛠️ 外部對接：專案 fetch 或 axios 的請求邏輯封裝
├── assets/     # 🎨 靜態資源：存放圖片、SVG 以及全域 CSS 樣式表 (variables.css)
├── components/ # 🧩 零件庫：存放「可重複使用」的小組件
│   ├── common/ # 通用組件 (如：AppNavbar, AppFooter) 
│   └── ui/     # 基礎 UI 組件 (如：自定義 Card, Button)
├── views/      # 🖼️ 頁面主體：存放路由對應的大頁面 (HomeView, ProjectsView, AboutView)
├── router/     # 🛣️ 導航地圖：存放 index.js 路由設定
├── stores/     # 🗃️ 資料倉庫：存放 Pinia 的狀態管理模組
├── utils/      # 🧰 工具箱：存放純 JavaScript 工具函式 (如：日期處理)
├── App.vue     # 🏠 根組件：所有頁面的入口
└── main.js     # 🚀 啟動點：初始化 Vue、引入外掛與樣式
```

#  🚀 快速開始
## 安裝依賴
'Bash'
'npm install'
## 本地開發環境
'Bash'
'npm run dev'
## 編譯並壓縮生產版本
'Bash'
'npm run build'