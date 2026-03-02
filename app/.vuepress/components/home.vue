<template>
  <div class="jshook-home">
    <!-- 动态网格背景 -->
    <div class="hero-bg">
      <div class="grid-lines"></div>
      <div class="glow-orb glow-orb-1"></div>
      <div class="glow-orb glow-orb-2"></div>
      <div class="glow-orb glow-orb-3"></div>
      <div class="breath-glow"></div>
    </div>

    <VPNavbar />

    <main class="home-main">
      <!-- Hero 区域 -->
      <section class="hero">
        <div class="hero-content">
          <div class="logo-wrap">
            <img :src="frontmatter.heroImage || '/logo.png'" alt="JsHook" class="hero-logo" />
          </div>
          <h1 class="hero-title">
            <span class="title-line">JsHook</span>
          </h1>
          <p class="hero-desc">Android 上用 Js 实现 Hook · 基于 Frida 的移动端注入框架</p>
          <div class="hero-actions">
            <a
              v-for="(action, i) in frontmatter.actions"
              :key="i"
              :href="action.link"
              target="_blank"
              rel="noopener noreferrer"
              class="btn"
              :class="action.type === 'primary' ? 'btn-primary' : 'btn-secondary'"
            >
              <span class="btn-text">{{ action.text }}</span>
              <span class="btn-glow"></span>
            </a>
          </div>
        </div>
        <div class="hero-decoration">
          <div class="floating-card card-1"></div>
          <div class="floating-card card-2"></div>
          <div class="floating-card card-3"></div>
        </div>
      </section>

      <!-- Features 区域 -->
      <section class="features">
        <h2 class="section-title">
          <span class="title-icon">◆</span>
          核心能力
        </h2>
        <div class="features-grid">
          <article
            v-for="(feature, i) in frontmatter.features"
            :key="feature.title"
            class="feature-card"
            :style="{ animationDelay: `${i * 0.15}s` }"
          >
            <div class="card-glow"></div>
            <h3 class="feature-title">{{ feature.title }}</h3>
            <p class="feature-details">{{ feature.details }}</p>
            <div class="card-border"></div>
          </article>
        </div>
      </section>

      <!-- 截图展示 -->
      <section class="screenshots">
        <h2 class="section-title">
          <span class="title-icon">◇</span>
          应用截图
        </h2>
        <div class="screenshots-grid">
          <!-- <div class="screenshot-item" style="animation-delay: 0s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_100.png" alt="截图 1" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div> -->
          <div class="screenshot-item" style="animation-delay: 0.08s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_101.png" alt="截图 2" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div>
          <div class="screenshot-item" style="animation-delay: 0.16s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_102.png" alt="截图 3" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div>
          <div class="screenshot-item" style="animation-delay: 0.24s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_103.png" alt="截图 4" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div>
          <div class="screenshot-item" style="animation-delay: 0.32s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_104.png" alt="截图 5" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div>
          <div class="screenshot-item" style="animation-delay: 0.4s">
            <div class="screenshot-frame">
              <img src="../assets/img/img_105.png" alt="截图 6" loading="lazy" />
              <div class="frame-glow"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="home-footer">
        <div class="footer-inner">
          <p>在 GPL3 许可证下发布</p>
          <p class="copyright">Copyright © 2022-{{ new Date().getFullYear() }} JsHook 开发者</p>
        </div>
        <div class="footer-line"></div>
      </footer>
    </main>
  </div>
</template>

<script setup>
import { usePageFrontmatter } from 'vuepress/client'
import VPNavbar from '@vuepress/theme-default/lib/client/components/VPNavbar.vue'

const frontmatter = usePageFrontmatter()

if (typeof window !== 'undefined') {
  const lang = navigator.language
  if (!lang.startsWith('zh') && location.pathname === '/') {
    location.href = '/en/'
  }
}
</script>

<style scoped>
.jshook-home {
  min-height: 100vh;
  background: #0a0e17;
  color: #e2e8f0;
  position: relative;
  overflow-x: hidden;
}

/* ========== 背景 ========== */
.hero-bg {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

.grid-lines {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(6, 182, 212, 0.12) 1px, transparent 1px),
    linear-gradient(90deg, rgba(6, 182, 212, 0.12) 1px, transparent 1px);
  background-size: 50px 50px;
  animation: gridMove 12s linear infinite;
}

@keyframes gridMove {
  0% { transform: perspective(400px) rotateX(55deg) translateY(0); }
  100% { transform: perspective(400px) rotateX(55deg) translateY(50px); }
}

.glow-orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.7;
  animation: orbFloat 12s ease-in-out infinite;
}

.glow-orb-1 {
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, rgba(6, 182, 212, 0.7) 0%, rgba(6, 182, 212, 0.2) 40%, transparent 70%);
  top: -120px;
  right: -100px;
  animation-delay: 0s;
}

.glow-orb-2 {
  width: 320px;
  height: 320px;
  background: radial-gradient(circle, rgba(99, 102, 241, 0.6) 0%, rgba(99, 102, 241, 0.15) 40%, transparent 70%);
  bottom: 15%;
  left: -100px;
  animation-delay: -4s;
}

.glow-orb-3 {
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, rgba(34, 211, 238, 0.5) 0%, rgba(34, 211, 238, 0.15) 40%, transparent 70%);
  bottom: -80px;
  right: 15%;
  animation-delay: -8s;
}

@keyframes orbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(40px, -30px) scale(1.15); }
  66% { transform: translate(-20px, 25px) scale(0.95); }
}

/* 中心呼吸光晕 - 肉眼可见 */
.breath-glow {
  position: absolute;
  left: 50%;
  top: 42%;
  width: 140%;
  height: 100%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    ellipse at center,
    rgba(6, 182, 212, 0.25) 0%,
    rgba(99, 102, 241, 0.15) 35%,
    rgba(6, 182, 212, 0.06) 55%,
    transparent 75%
  );
  animation: breath 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes breath {
  0%, 100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1); }
  50% { opacity: 1; transform: translate(-50%, -50%) scale(1.25); }
}

/* ========== 主内容 ========== */
.home-main {
  position: relative;
  z-index: 1;
  padding-top: 60px;
}

/* ========== Hero ========== */
.hero {
  min-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  position: relative;
}

.hero-content {
  text-align: center;
  max-width: 720px;
}

.logo-wrap {
  margin-bottom: 1rem;
  animation: fadeInDown 0.8s ease-out;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 18px;
  filter: drop-shadow(0 0 20px rgba(6, 182, 212, 0.5));
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: 0.02em;
  margin: 0 0 0.5rem;
  background: linear-gradient(135deg, #fff 0%, #06b6d4 50%, #6366f1 100%);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: fadeInUp 0.8s ease-out 0.2s both, gradientShift 6s ease infinite;
}

@keyframes gradientShift {
  0%, 100% { background-position: 0% center; }
  50% { background-position: 100% center; }
}

.hero-desc {
  font-size: 1.1rem;
  color: #94a3b8;
  margin: 0 0 2rem;
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
  animation: fadeInUp 0.8s ease-out 0.6s both;
}

.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn-primary {
  background: linear-gradient(135deg, #06b6d4, #0891b2);
  color: #fff;
  border: 1px solid rgba(6, 182, 212, 0.5);
  box-shadow: 0 4px 20px rgba(6, 182, 212, 0.3);
}

.btn-primary:hover {
  box-shadow: 0 6px 28px rgba(6, 182, 212, 0.5);
}

.btn-secondary {
  background: rgba(30, 41, 59, 0.8);
  color: #e2e8f0;
  border: 1px solid rgba(71, 85, 105, 0.6);
  backdrop-filter: blur(8px);
}

.btn-secondary:hover {
  border-color: rgba(6, 182, 212, 0.5);
  box-shadow: 0 0 20px rgba(6, 182, 212, 0.2);
}

.btn-glow {
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
  transform: translateX(-100%);
  transition: transform 0.5s;
}

.btn:hover .btn-glow {
  transform: translateX(100%);
}

.btn-text {
  position: relative;
  z-index: 1;
}

/* 浮动装饰 */
.hero-decoration {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-card {
  position: absolute;
  width: 8px;
  height: 8px;
  background: rgba(6, 182, 212, 0.5);
  border-radius: 2px;
  animation: float 6s ease-in-out infinite;
}

.card-1 { top: 20%; left: 15%; animation-delay: 0s; }
.card-2 { top: 60%; right: 20%; animation-delay: -2s; }
.card-3 { bottom: 25%; left: 25%; animation-delay: -4s; }

@keyframes float {
  0%, 100% { transform: translate(0, 0) rotate(0deg); }
  50% { transform: translate(10px, -15px) rotate(180deg); }
}

@keyframes fadeInDown {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ========== Features ========== */
.features {
  padding: 4rem 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #f1f5f9;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.title-icon {
  color: #06b6d4;
  font-size: 0.9em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}

.feature-card {
  position: relative;
  padding: 1.75rem;
  background: rgba(15, 23, 42, 0.6);
  border: 1px solid rgba(71, 85, 105, 0.4);
  border-radius: 12px;
  backdrop-filter: blur(12px);
  animation: cardReveal 0.6s ease-out both;
  overflow: hidden;
}

.feature-card:hover {
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 0 30px rgba(6, 182, 212, 0.15);
}

.card-glow {
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.08) 0%, transparent 50%);
  opacity: 0;
  transition: opacity 0.3s;
}

.feature-card:hover .card-glow {
  opacity: 1;
}

.feature-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #06b6d4;
  margin: 0 0 0.5rem;
  position: relative;
}

.feature-details {
  font-size: 0.9rem;
  color: #94a3b8;
  line-height: 1.7;
  margin: 0;
  position: relative;
}

.card-border {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, transparent, #06b6d4, transparent);
  transform: scaleX(0);
  transition: transform 0.3s;
}

.feature-card:hover .card-border {
  transform: scaleX(1);
}

@keyframes cardReveal {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* ========== 截图 ========== */
.screenshots {
  padding: 4rem 1.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 1.25rem;
}

.screenshot-item {
  animation: screenshotReveal 0.5s ease-out both;
}

.screenshot-frame {
  position: relative;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid rgba(71, 85, 105, 0.4);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s, box-shadow 0.3s;
}

.screenshot-frame:hover {
  transform: translateY(-4px) scale(1.02);
  border-color: rgba(6, 182, 212, 0.4);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(6, 182, 212, 0.2);
}

.screenshot-frame img {
  display: block;
  width: 100%;
  height: auto;
  pointer-events: auto;
}

.frame-glow {
  position: absolute;
  inset: 0;
  box-shadow: inset 0 0 30px rgba(6, 182, 212, 0.1);
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
}

.screenshot-frame:hover .frame-glow {
  opacity: 1;
}

@keyframes screenshotReveal {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

/* ========== Footer ========== */
.home-footer {
  padding: 3rem 1.5rem;
  text-align: center;
  position: relative;
}

.footer-inner {
  color: #64748b;
  font-size: 0.9rem;
}

.footer-inner p {
  margin: 0.25rem 0;
}

.copyright {
  font-size: 0.85rem;
  color: #475569;
}

.footer-line {
  margin-top: 2rem;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(71, 85, 105, 0.6), transparent);
}
</style>
