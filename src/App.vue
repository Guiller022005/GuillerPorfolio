<template>
  <div class="portfolio-app" :class="{ 'qa-mode-enabled': isQaMode }">
    <!-- Ambient Background Lighting -->
    <div class="ambient-bg" aria-hidden="true">
      <div class="ambient-grid"></div>
      <div class="ambient-orb ambient-orb-1"></div>
      <div class="ambient-orb ambient-orb-2"></div>
      <div class="ambient-orb ambient-orb-3"></div>
    </div>

    <!-- QA Mode Floating Banner (When Active) -->
    <transition name="slide-banner">
      <div v-if="isQaMode" class="qa-active-banner" data-testid="qa-active-banner">
        <div class="banner-inner">
          <div class="banner-left">
            <span class="banner-badge">QA INSPECTOR MODE</span>
            <span class="banner-text">
              Mostrando etiquetas <code>[data-testid]</code>, contratos de componentes y aserciones activas.
            </span>
          </div>
          <div class="banner-actions">
            <a href="#test-runner" class="banner-link">Ver Test Suite</a>
            <button @click="toggleQaMode" class="banner-close-btn" aria-label="Desactivar modo QA">
              ✕ Desactivar
            </button>
          </div>
        </div>
      </div>
    </transition>

    <!-- Top Navigation Bar -->
    <NavBar />

    <!-- Main Content Stream -->
    <main>
      <!-- Hero Profile Section -->
      <Profile />

      <!-- The Hybrid Advantage (Frontend + QA) -->
      <QaAdvantage />

      <!-- Skills & Testing Arsenal -->
      <Skills />

      <!-- Featured Projects -->
      <Projects />

      <!-- Live Test Runner Console -->
      <TestRunnerWidget />

      <!-- Contact Portal -->
      <Contact />
    </main>

    <!-- Footer -->
    <footer>
      <div class="footer-content">
        <div class="footer-tags">
          <span class="footer-tag">
            <span class="dot"></span>
            Vue 3 Composition API + TypeScript
          </span>
          <span class="footer-tag">
            <span class="dot"></span>
            Cypress & Vitest Certified
          </span>
          <span class="footer-tag">
            <span class="dot"></span>
            WCAG 2.1 AA A11y Compliant
          </span>
        </div>

        <p class="footer-copy">
          &copy; {{ currentYear }} <strong>José Guillermo Paúl Díaz</strong>. Diseñado y construido con precisión Frontend & Calidad de Software.
        </p>

        <a href="#profile" class="back-to-top" title="Volver al inicio">
          ↑ Volver arriba
        </a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import NavBar from './components/NavBar.vue';
import Profile from './components/Profile.vue';
import QaAdvantage from './components/QaAdvantage.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import TestRunnerWidget from './components/TestRunnerWidget.vue';
import Contact from './components/Contact.vue';
import { useQaMode } from './composables/useQaMode';

const { isQaMode, toggleQaMode } = useQaMode();

const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.qa-active-banner {
  position: fixed;
  top: 66px;
  left: 0;
  right: 0;
  background: rgba(16, 185, 129, 0.95);
  backdrop-filter: blur(12px);
  color: #040810;
  z-index: 999;
  padding: 0.55rem 1.5rem;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.35);
  font-family: var(--font-mono);
  font-size: 0.8rem;
}

.banner-inner {
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.banner-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}

.banner-badge {
  background: #040810;
  color: var(--accent-qa-light);
  font-weight: 800;
  padding: 0.2rem 0.6rem;
  border-radius: 4px;
  font-size: 0.72rem;
  letter-spacing: 0.05em;
}

.banner-text code {
  background: rgba(4, 8, 16, 0.15);
  padding: 1px 5px;
  border-radius: 4px;
  font-weight: 700;
}

.banner-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.banner-link {
  color: #040810;
  font-weight: 800;
  text-decoration: underline;
  cursor: pointer;
}

.banner-close-btn {
  background: rgba(4, 8, 16, 0.2);
  border: 1px solid rgba(4, 8, 16, 0.3);
  color: #040810;
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-pill);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  cursor: pointer;
}

.banner-close-btn:hover {
  background: #040810;
  color: #FFFFFF;
}

.slide-banner-enter-active,
.slide-banner-leave-active {
  transition: all 0.3s ease;
}

.slide-banner-enter-from,
.slide-banner-leave-to {
  opacity: 0;
  transform: translateY(-100%);
}

.back-to-top {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.84rem;
  font-family: var(--font-mono);
  transition: color var(--transition-fast);
}

.back-to-top:hover {
  color: var(--primary-light);
  text-decoration: underline;
}
</style>
