<template>
  <header class="navbar-header" data-testid="navbar">
    <nav class="navbar-container">
      <!-- Brand Logo / Identity -->
      <a href="#profile" class="nav-brand" data-testid="nav-brand">
        <span class="brand-monogram">GP</span>
        <div class="brand-info">
          <span class="brand-name">José Guillermo Paúl</span>
          <span class="brand-role">
            <span class="status-dot"></span>
            Frontend & QA Engineer
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links -->
      <ul class="nav-links desktop-only" data-testid="nav-links-desktop">
        <li v-for="item in navItems" :key="item.href">
          <a 
            :href="item.href" 
            class="nav-link"
            :data-testid="`nav-link-${item.id}`"
            :class="{ active: activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </li>
      </ul>

      <!-- Action Area: QA Mode Toggle + Contact CTA -->
      <div class="nav-actions">
        <!-- QA Inspector Mode Toggle Button -->
        <button 
          @click="toggleQaMode" 
          class="qa-toggle-btn" 
          :class="{ 'qa-active': isQaMode }"
          data-testid="qa-mode-toggle"
          title="Alternar Modo QA Inspector para ver data-testids y métricas de calidad"
        >
          <span class="qa-icon-wrap">
            <ShieldCheck v-if="isQaMode" :size="15" />
            <Bug v-else :size="15" />
          </span>
          <span class="qa-btn-text">
            <span class="qa-label-desktop">QA Mode:</span>
            <span class="qa-label-mobile">QA:</span>
            <strong :class="isQaMode ? 'text-emerald' : 'text-cyan'">{{ isQaMode ? 'ON' : 'OFF' }}</strong>
          </span>
        </button>

        <!-- CTA Contact Button -->
        <a href="#contact" class="btn-primary nav-cta desktop-only" data-testid="nav-cta-contact">
          Hablemos
        </a>

        <!-- Mobile Hamburger Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="mobile-menu-btn mobile-only" 
          aria-label="Abrir menú de navegación"
          data-testid="mobile-menu-btn"
        >
          <X v-if="isMobileMenuOpen" :size="24" />
          <Menu v-else :size="24" />
        </button>
      </div>
    </nav>

    <!-- Mobile Drawer Menu -->
    <transition name="drawer">
      <div v-if="isMobileMenuOpen" class="mobile-drawer" data-testid="mobile-drawer">
        <!-- Mobile Drawer QA Mode Switch Card -->
        <div class="mobile-drawer-qa-box">
          <button 
            @click="toggleQaMode"
            class="mobile-drawer-qa-btn"
            :class="{ 'qa-active': isQaMode }"
            data-testid="mobile-drawer-qa-toggle"
          >
            <div class="mobile-qa-left">
              <ShieldCheck v-if="isQaMode" :size="20" class="text-emerald" />
              <Bug v-else :size="20" class="text-cyan" />
              <div class="mobile-qa-text">
                <span class="mobile-qa-title">Modo QA Inspector</span>
                <span class="mobile-qa-sub">Ver data-testid y métricas</span>
              </div>
            </div>
            <div class="mobile-qa-switch" :class="{ active: isQaMode }">
              <span class="switch-handle"></span>
            </div>
          </button>
        </div>

        <ul class="mobile-nav-links">
          <li v-for="item in navItems" :key="item.href">
            <a 
              :href="item.href" 
              class="mobile-nav-link"
              @click="isMobileMenuOpen = false"
            >
              {{ item.label }}
            </a>
          </li>
          <li class="mobile-action-item">
            <a 
              href="#contact" 
              class="btn-primary mobile-cta" 
              @click="isMobileMenuOpen = false"
            >
              Contáctame
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { ShieldCheck, Bug, Menu, X } from 'lucide-vue-next';
import { useQaMode } from '../composables/useQaMode';

const { isQaMode, toggleQaMode } = useQaMode();
const isMobileMenuOpen = ref(false);
const activeSection = ref('profile');

const navItems = [
  { id: 'profile', label: 'Sobre mí', href: '#profile' },
  { id: 'qa-advantage', label: 'Ventaja QA', href: '#qa-advantage' },
  { id: 'skills', label: 'Habilidades', href: '#skills' },
  { id: 'projects', label: 'Proyectos', href: '#projects' },
  { id: 'test-runner', label: 'Test Suite', href: '#test-runner' },
  { id: 'contact', label: 'Contacto', href: '#contact' },
];

const handleScroll = () => {
  const sections = ['profile', 'qa-advantage', 'skills', 'projects', 'test-runner', 'contact'];
  const scrollPosition = window.scrollY + 140;

  for (const sectionId of sections) {
    const el = document.getElementById(sectionId);
    if (el) {
      const top = el.offsetTop;
      const height = el.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        activeSection.value = sectionId;
        break;
      }
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.navbar-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1000;
  background: rgba(7, 11, 20, 0.78);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--border-subtle);
  transition: all var(--transition-smooth);
}

.navbar-container {
  max-width: 1240px;
  margin: 0 auto;
  padding: 0.9rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
}

/* Brand Logo */
.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.85rem;
  text-decoration: none;
  color: var(--text-main);
}

.brand-monogram {
  width: 38px;
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-sm);
  background: linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(16, 185, 129, 0.2));
  border: 1px solid rgba(56, 189, 248, 0.35);
  font-family: var(--font-mono);
  font-weight: 800;
  font-size: 0.95rem;
  color: var(--primary);
  box-shadow: 0 0 14px rgba(56, 189, 248, 0.2);
}

.brand-info {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  font-size: 1rem;
  color: var(--text-main);
  line-height: 1.2;
}

.brand-role {
  display: flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.76rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-qa);
  box-shadow: 0 0 8px var(--accent-qa);
  animation: pulseDot 2s infinite ease-in-out;
}

@keyframes pulseDot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.85); }
}

/* Nav Links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 1.6rem;
  list-style: none;
}

.nav-link {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.92rem;
  font-weight: 500;
  transition: color var(--transition-fast);
  position: relative;
  padding: 0.3rem 0;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent-qa));
  transition: width var(--transition-smooth);
  border-radius: 2px;
}

.nav-link:hover,
.nav-link.active {
  color: var(--text-main);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

/* Nav Actions */
.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.qa-toggle-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.85rem;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.82rem;
  font-family: var(--font-mono);
  cursor: pointer;
  transition: all var(--transition-smooth);
  white-space: nowrap;
  flex-shrink: 0;
}

.qa-btn-text {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  white-space: nowrap;
}

.qa-label-desktop {
  display: inline;
}

.qa-label-mobile {
  display: none;
}

.qa-toggle-btn:hover {
  border-color: var(--primary);
  transform: translateY(-1px);
}

.qa-toggle-btn.qa-active {
  background: rgba(16, 185, 129, 0.15);
  border-color: var(--accent-qa);
  color: #F8FAFC;
  box-shadow: 0 0 16px var(--accent-qa-glow);
}

.qa-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-emerald {
  color: var(--accent-qa-light);
}

.text-cyan {
  color: var(--text-muted);
}

.nav-cta {
  padding: 0.55rem 1.3rem;
  font-size: 0.88rem;
}

.mobile-menu-btn {
  display: none;
  background: transparent;
  border: none;
  color: var(--text-main);
  cursor: pointer;
  padding: 0.4rem;
  flex-shrink: 0;
}

/* Mobile Drawer */
.mobile-drawer {
  background: rgba(7, 11, 20, 0.97);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border-subtle);
  padding: 1.25rem 1.5rem 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

/* Mobile Drawer Dedicated QA Switch Box */
.mobile-drawer-qa-box {
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--border-subtle);
}

.mobile-drawer-qa-btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-md);
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.mobile-drawer-qa-btn.qa-active {
  background: rgba(16, 185, 129, 0.12);
  border-color: var(--accent-qa);
}

.mobile-qa-left {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  text-align: left;
}

.mobile-qa-text {
  display: flex;
  flex-direction: column;
}

.mobile-qa-title {
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--text-main);
}

.mobile-qa-sub {
  font-size: 0.74rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.mobile-qa-switch {
  width: 44px;
  height: 24px;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.15);
  position: relative;
  transition: background var(--transition-fast);
}

.mobile-qa-switch.active {
  background: var(--accent-qa);
}

.switch-handle {
  position: absolute;
  top: 3px;
  left: 3px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  background: #FFFFFF;
  transition: transform var(--transition-fast);
}

.mobile-qa-switch.active .switch-handle {
  transform: translateX(20px);
}

.mobile-nav-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
}

.mobile-nav-link {
  color: var(--text-main);
  font-size: 1.05rem;
  text-decoration: none;
  font-weight: 600;
  display: block;
}

.mobile-action-item {
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid var(--border-subtle);
}

.mobile-cta {
  width: 100%;
}

/* Drawer Transition */
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease-out;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Media Queries */
@media (max-width: 900px) {
  .desktop-only {
    display: none !important;
  }

  .mobile-only {
    display: flex !important;
  }

  .brand-role {
    display: none !important;
  }

  .qa-label-desktop {
    display: none !important;
  }

  .qa-label-mobile {
    display: inline !important;
  }
}

@media (max-width: 640px) {
  .navbar-container {
    padding: 0.65rem 0.85rem;
    gap: 0.5rem;
  }

  .nav-brand {
    gap: 0.5rem;
  }

  .brand-monogram {
    width: 34px;
    height: 34px;
    font-size: 0.85rem;
  }

  .brand-name {
    font-size: 0.92rem;
  }

  .nav-actions {
    gap: 0.45rem;
  }

  .qa-toggle-btn {
    padding: 0.35rem 0.65rem;
    font-size: 0.74rem;
    gap: 0.35rem;
  }
}

@media (max-width: 480px) {
  .brand-name {
    font-size: 0.86rem;
  }

  .qa-label-mobile {
    display: none !important;
  }

  .qa-toggle-btn {
    padding: 0.32rem 0.55rem;
    font-size: 0.72rem;
  }
}
</style>
