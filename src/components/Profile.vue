<template>
  <section id="profile" class="hero-section" data-testid="hero-profile-section">
    <div class="hero-grid">
      <!-- Left Column: Copy, Value Prop & CTAs -->
      <div class="hero-content">
        <!-- Status / Role Pill -->
        <div class="status-badge" data-testid="hero-status-badge">
          <span class="pulse-indicator"></span>
          <span>Disponible para contratación • Frontend & QA</span>
        </div>

        <!-- Main Heading -->
        <h1 class="hero-title" data-testid="hero-heading">
          Ingeniero <span class="gradient-text">Frontend</span> con ADN de <span class="gradient-text-qa">QA Automation</span>.
        </h1>

        <!-- Subtitle & Pitch -->
        <p class="hero-description" data-testid="hero-description">
          Construyo experiencias web de alto impacto en <strong>Vue 3</strong> y <strong>TypeScript</strong>, 
          respaldadas por una cultura rigurosa de <strong>Calidad de Software</strong>. 
          Desarrollo interfaces visualmente impecables, accesibles y optimizadas, 
          con suites de pruebas automatizadas (<strong>Cypress, Vitest, Playwright</strong>) 
          que garantizan <strong>cero regresiones en producción</strong>.
        </p>

        <!-- Proof Points / Stat Pills -->
        <div class="hero-stats" data-testid="hero-stats-row">
          <div class="stat-card">
            <span class="stat-number">100%</span>
            <span class="stat-label">Cultura de Calidad & QA</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Vue 3 + TS</span>
            <span class="stat-label">Stack Moderno Reactivo</span>
          </div>
          <div class="stat-card">
            <span class="stat-number">Zero-Defect</span>
            <span class="stat-label">Filosofía de Arquitectura</span>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="hero-actions" data-testid="hero-actions-group">
          <a href="#projects" class="btn-primary" data-testid="hero-cta-projects">
            <span>Ver Proyectos</span>
            <ArrowRight :size="18" />
          </a>
          <a href="#test-runner" class="btn-qa" data-testid="hero-cta-tests">
            <Terminal :size="18" />
            <span>Ejecutar Test Suite Live</span>
          </a>
          <a href="#contact" class="btn-secondary" data-testid="hero-cta-contact">
            <Mail :size="18" />
            <span>Contacto</span>
          </a>
        </div>
      </div>

      <!-- Right Column: Interactive Profile Portrait Card -->
      <div class="hero-visual" data-testid="hero-visual-container">
        <div class="avatar-card-wrapper">
          <!-- Ambient Glow Backdrop -->
          <div class="avatar-aura"></div>

          <!-- Main Portrait Container -->
          <div class="avatar-glass-card">
            <div class="image-frame">
              <img 
                src="../assets/foto.jpg" 
                alt="José Guillermo Paúl Díaz - Frontend & QA Engineer" 
                class="avatar-photo"
                data-testid="hero-avatar-image"
              />
            </div>
            
            <div class="avatar-footer">
              <h2 class="avatar-name">José Guillermo Paúl</h2>
              <p class="avatar-title">Frontend Developer • QA Specialist</p>
            </div>
          </div>

          <!-- Floating Badge 1: QA Tests Passing -->
          <div class="floating-chip chip-top-right" data-testid="hero-chip-qa">
            <div class="chip-icon-box chip-emerald">
              <CheckCircle2 :size="16" />
            </div>
            <div class="chip-text">
              <span class="chip-main">42/42 Tests Passing</span>
              <span class="chip-sub">Cypress & Vitest Suites</span>
            </div>
          </div>

          <!-- Floating Badge 2: Tech Stack -->
          <div class="floating-chip chip-bottom-left" data-testid="hero-chip-tech">
            <div class="chip-icon-box chip-cyan">
              <Code2 :size="16" />
            </div>
            <div class="chip-text">
              <span class="chip-main">Vue 3 • TypeScript</span>
              <span class="chip-sub">Componentes Testables</span>
            </div>
          </div>

          <!-- Floating Badge 3: Lighthouse Score -->
          <div class="floating-chip chip-bottom-right" data-testid="hero-chip-score">
            <div class="chip-icon-box chip-purple">
              <Sparkles :size="16" />
            </div>
            <div class="chip-text">
              <span class="chip-main">100% Accesible</span>
              <span class="chip-sub">Core Web Vitals A+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, Terminal, Mail, CheckCircle2, Code2, Sparkles } from 'lucide-vue-next';
</script>

<style scoped>
.hero-section {
  padding: 3rem 0 5rem;
  position: relative;
  overflow-x: clip;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 3.5rem;
}

/* Left Column */
.hero-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.status-badge {
  align-self: flex-start;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1.1rem;
  border-radius: var(--radius-pill);
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
  color: var(--accent-qa-light);
  font-size: 0.82rem;
  font-weight: 600;
  font-family: var(--font-mono);
}

.pulse-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent-qa);
  box-shadow: 0 0 10px var(--accent-qa);
  animation: pulse 1.8s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7); }
  70% { transform: scale(1); box-shadow: 0 0 0 8px rgba(16, 185, 129, 0); }
  100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
}

.hero-title {
  font-size: clamp(2.3rem, 4.2vw, 3.4rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.03em;
}

.hero-description {
  font-size: 1.12rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.hero-description strong {
  color: var(--text-main);
  font-weight: 600;
}

/* Stats Row */
.hero-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
}

.stat-card {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 0.85rem 1rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-smooth);
}

.stat-card:hover {
  border-color: var(--primary);
  background: rgba(15, 23, 42, 0.8);
  transform: translateY(-2px);
}

.stat-number {
  font-family: var(--font-mono);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--primary);
  line-height: 1.2;
}

.stat-label {
  font-size: 0.76rem;
  color: var(--text-muted);
  margin-top: 0.25rem;
}

/* Actions */
.hero-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

/* Right Column: Visual Portrait */
.hero-visual {
  display: flex;
  justify-content: center;
  position: relative;
}

.avatar-card-wrapper {
  position: relative;
  width: 100%;
  max-width: 380px;
}

.avatar-aura {
  position: absolute;
  inset: -15px;
  background: conic-gradient(from 180deg at 50% 50%, #38BDF8 0deg, #10B981 120deg, #818CF8 240deg, #38BDF8 360deg);
  border-radius: var(--radius-xl);
  filter: blur(28px);
  opacity: 0.45;
  z-index: 1;
  animation: rotateAura 18s linear infinite;
}

@keyframes rotateAura {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.avatar-glass-card {
  position: relative;
  z-index: 2;
  background: rgba(15, 23, 42, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.6);
  transition: transform var(--transition-smooth);
}

.avatar-glass-card:hover {
  transform: translateY(-4px);
}

.image-frame {
  width: 100%;
  height: 380px;
  background: #080C16;
  position: relative;
  overflow: hidden;
}

.image-frame::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: linear-gradient(to top, rgba(8, 12, 22, 0.95) 0%, transparent 100%);
  pointer-events: none;
  z-index: 2;
}

.avatar-photo {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 15%;
  transition: transform var(--transition-smooth);
}

.avatar-glass-card:hover .avatar-photo {
  transform: scale(1.04);
}

.avatar-footer {
  padding: 1.1rem 1.4rem;
  background: rgba(8, 12, 22, 0.92);
  border-top: 1px solid var(--border-subtle);
  text-align: center;
}

.avatar-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-main);
}

.avatar-title {
  font-size: 0.82rem;
  color: var(--primary);
  font-family: var(--font-mono);
  margin-top: 0.2rem;
}

/* Floating Badges */
.floating-chip {
  position: absolute;
  z-index: 4;
  background: rgba(10, 16, 30, 0.9);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-md);
  padding: 0.55rem 0.85rem;
  display: flex;
  align-items: center;
  gap: 0.65rem;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);
  animation: floatChip 5s infinite ease-in-out alternate;
}

.chip-top-right {
  top: 20px;
  right: -25px;
  animation-delay: 0s;
}

.chip-bottom-left {
  bottom: 70px;
  left: -35px;
  animation-delay: -2s;
}

.chip-bottom-right {
  bottom: -15px;
  right: -15px;
  animation-delay: -3.5s;
}

@keyframes floatChip {
  0% { transform: translateY(0); }
  100% { transform: translateY(-8px); }
}

.chip-icon-box {
  width: 30px;
  height: 30px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.chip-emerald {
  background: rgba(16, 185, 129, 0.2);
  color: var(--accent-qa-light);
  border: 1px solid rgba(16, 185, 129, 0.4);
}

.chip-cyan {
  background: rgba(56, 189, 248, 0.2);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.4);
}

.chip-purple {
  background: rgba(129, 140, 248, 0.2);
  color: var(--accent-purple);
  border: 1px solid rgba(129, 140, 248, 0.4);
}

.chip-text {
  display: flex;
  flex-direction: column;
}

.chip-main {
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--text-main);
  line-height: 1.2;
}

.chip-sub {
  font-size: 0.68rem;
  color: var(--text-muted);
  font-family: var(--font-mono);
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .hero-content {
    text-align: center;
    align-items: center;
  }

  .status-badge {
    align-self: center;
  }

  .hero-actions {
    justify-content: center;
  }

  .hero-stats {
    width: 100%;
    max-width: 500px;
  }

  .avatar-card-wrapper {
    max-width: 320px;
  }

  .image-frame {
    height: 320px;
  }

  .chip-top-right {
    right: -10px;
  }

  .chip-bottom-left {
    left: -10px;
  }
}

@media (max-width: 640px) {
  .hero-stats {
    grid-template-columns: 1fr;
  }

  .hero-actions {
    flex-direction: column;
    width: 100%;
  }

  .hero-actions a {
    width: 100%;
  }

  .chip-top-right,
  .chip-bottom-left,
  .chip-bottom-right {
    position: static;
    margin-top: 0.5rem;
    animation: none;
    width: 100%;
  }

  .avatar-card-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
