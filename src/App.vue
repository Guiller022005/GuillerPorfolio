<template>
  <div class="portfolio-app" :class="{ 'qa-mode-enabled': isQaMode }">
    <!-- Ambient Background Lighting -->
    <div class="ambient-bg" aria-hidden="true">
      <div class="ambient-grid"></div>
      <div class="ambient-orb ambient-orb-1"></div>
      <div class="ambient-orb ambient-orb-2"></div>
      <div class="ambient-orb ambient-orb-3"></div>
    </div>

    <!-- QA Mode Floating DevTools Dock (When Active) -->
    <transition name="dock-fade">
      <div v-if="isQaMode" class="qa-floating-dock" data-testid="qa-active-banner">
        <div class="dock-indicator">
          <span class="dock-pulse"></span>
          <span class="dock-badge">QA INSPECTOR</span>
        </div>
        
        <span class="dock-hint">
          Modo inspección activo: inspecciona <code>[data-testid]</code>
        </span>

        <div class="dock-actions">
          <a href="#test-runner" class="dock-btn-secondary" title="Ir a la suite de tests">
            <span>Test Suite</span>
          </a>
          <button @click="toggleQaMode" class="dock-btn-close" aria-label="Desactivar modo QA" title="Cerrar modo QA">
            ✕
          </button>
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
/* QA Inspector Floating Dock (Floating Pill / DevTools Widget) */
.qa-floating-dock {
  position: fixed;
  bottom: 24px;
  right: 24px;
  background: rgba(10, 16, 30, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(16, 185, 129, 0.4);
  box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.7), 0 0 20px rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-pill);
  padding: 0.5rem 0.65rem 0.5rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  z-index: 9999;
  font-family: var(--font-sans);
  color: var(--text-main);
  transition: all var(--transition-smooth);
}

.qa-floating-dock:hover {
  border-color: var(--accent-qa);
  box-shadow: 0 12px 35px -5px rgba(0, 0, 0, 0.8), 0 0 25px rgba(16, 185, 129, 0.35);
}

.dock-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dock-pulse {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-qa);
  box-shadow: 0 0 8px var(--accent-qa);
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

.dock-badge {
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent-qa-light);
  border: 1px solid rgba(16, 185, 129, 0.3);
  font-family: var(--font-mono);
  font-size: 0.68rem;
  font-weight: 700;
  padding: 0.2rem 0.5rem;
  border-radius: var(--radius-pill);
  letter-spacing: 0.04em;
}

.dock-hint {
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.dock-hint code {
  color: var(--accent-qa-light);
  background: rgba(16, 185, 129, 0.1);
  padding: 1px 5px;
  border-radius: 4px;
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

.dock-actions {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  margin-left: 0.25rem;
}

.dock-btn-secondary {
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  text-decoration: none;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0.35rem 0.75rem;
  border-radius: var(--radius-pill);
  transition: all var(--transition-fast);
}

.dock-btn-secondary:hover {
  background: rgba(56, 189, 248, 0.2);
  border-color: var(--primary);
  color: var(--primary-light);
}

.dock-btn-close {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid var(--border-subtle);
  color: var(--text-muted);
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.dock-btn-close:hover {
  background: rgba(239, 68, 68, 0.2);
  border-color: rgba(239, 68, 68, 0.5);
  color: #FCA5A5;
}

/* Dock Animations */
.dock-fade-enter-active,
.dock-fade-leave-active {
  transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
}

.dock-fade-enter-from,
.dock-fade-leave-to {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

@media (max-width: 768px) {
  .qa-floating-dock {
    bottom: 16px;
    right: 16px;
    left: 16px;
    justify-content: space-between;
    padding: 0.45rem 0.6rem 0.45rem 0.8rem;
  }
  
  .dock-hint {
    display: none;
  }
}

.back-to-top {
  color: var(--primary);
  text-decoration: none;
  font-size: 0.84rem;
  font-family: var(--font-sans);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.back-to-top:hover {
  color: var(--primary-light);
  text-decoration: underline;
}
</style>
