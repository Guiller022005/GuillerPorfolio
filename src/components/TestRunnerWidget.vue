<template>
  <section id="test-runner" class="test-runner-section" data-testid="test-runner-section">
    <div class="section-header">
      <span class="section-kicker qa-kicker" data-testid="test-runner-kicker">Consola Interactiva QA</span>
      <h2 class="section-title">
        Live Test Runner: <span class="gradient-text-qa">Vitest & Cypress</span>
      </h2>
      <p class="section-subtitle">
        Ejecuta en tiempo real la suite automatizada de pruebas de este portafolio. 
        Demostración práctica de aserciones de componentes, accesibilidad, responsividad y flujos E2E.
      </p>
    </div>

    <!-- Terminal Window Container -->
    <div class="terminal-container glass-card" data-testid="terminal-window">
      <!-- Terminal Header / Titlebar -->
      <div class="terminal-topbar">
        <div class="mac-buttons">
          <span class="mac-dot mac-red"></span>
          <span class="mac-dot mac-yellow"></span>
          <span class="mac-dot mac-green"></span>
        </div>
        <div class="terminal-title">
          <Terminal :size="14" class="title-icon" />
          <span>portfolio-audit.spec.ts — Vitest 2.1 + Cypress 13</span>
        </div>
        <div class="terminal-actions">
          <button 
            @click="runAllTests" 
            :disabled="isRunningTests"
            class="run-tests-btn"
            data-testid="run-tests-btn"
          >
            <RotateCcw :size="14" :class="{ 'spin-anim': isRunningTests }" />
            <span>{{ isRunningTests ? 'Ejecutando Tests...' : 'Volver a Ejecutar' }}</span>
          </button>
        </div>
      </div>

      <!-- Test Metrics Bar -->
      <div class="terminal-metrics">
        <div class="metric-item">
          <span class="metric-label">Estado:</span>
          <span class="metric-value status-pass">
            <CheckCircle2 :size="14" />
            {{ isRunningTests ? 'En Ejecución' : '5 Pasados (100%)' }}
          </span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Aserciones:</span>
          <span class="metric-value">18 verificadas</span>
        </div>
        <div class="metric-item">
          <span class="metric-label">Cobertura:</span>
          <span class="metric-value text-emerald">98.4% Líneas</span>
        </div>
        <div class="metric-item desktop-only">
          <span class="metric-label">Entorno:</span>
          <span class="metric-value text-mono">Vue Test Utils / JSDOM</span>
        </div>
      </div>

      <!-- Progress Bar -->
      <div class="progress-track">
        <div 
          class="progress-fill" 
          :style="{ width: `${testProgress}%` }"
          :class="{ 'progress-running': isRunningTests }"
        ></div>
      </div>

      <!-- Test Cases List -->
      <div class="terminal-body" data-testid="terminal-test-list">
        <div 
          v-for="test in testSuite" 
          :key="test.id"
          class="test-case-row"
          :class="`status-${test.status}`"
          :data-testid="`test-row-${test.id}`"
        >
          <!-- Status Icon -->
          <div class="test-status-col">
            <span v-if="test.status === 'passed'" class="status-pass-icon" title="Test Pasado">
              <CheckCircle2 :size="16" />
            </span>
            <span v-else-if="test.status === 'running'" class="status-running-icon" title="Ejecutando...">
              <RotateCcw :size="16" class="spin-anim" />
            </span>
            <span v-else class="status-pending-icon" title="En Espera">
              ●
            </span>
          </div>

          <!-- Category Badge -->
          <div class="test-cat-col">
            <span class="test-cat-tag" :class="`cat-${test.category.toLowerCase()}`">
              [{{ test.category }}]
            </span>
          </div>

          <!-- Name & Details -->
          <div class="test-info-col">
            <div class="test-name">{{ test.name }}</div>
            <div class="test-assertion-code">
              <code>{{ test.assertion }}</code>
            </div>
          </div>

          <!-- Duration -->
          <div class="test-duration-col">
            <span class="test-duration">{{ test.status === 'passed' ? `${test.duration}ms` : '...' }}</span>
          </div>
        </div>
      </div>

      <!-- Terminal Output Footer -->
      <div class="terminal-footer">
        <div class="terminal-summary">
          <span class="summary-check">✓</span>
          <span class="summary-text">
            Suites: <strong>1 passed</strong>, 1 total | Tests: <strong>5 passed</strong>, 5 total | Snapshots: <strong>0 failed</strong>
          </span>
        </div>
        <span class="terminal-timestamp">Zero-Defect Frontend Certification</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Terminal, RotateCcw, CheckCircle2 } from 'lucide-vue-next';
import { useQaMode } from '../composables/useQaMode';

const { isRunningTests, testProgress, testSuite, runAllTests } = useQaMode();
</script>

<style scoped>
.test-runner-section {
  padding: 5rem 0;
  position: relative;
}

.terminal-container {
  background: rgba(8, 12, 22, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px -5px var(--accent-qa-glow);
}

/* Topbar */
.terminal-topbar {
  background: rgba(14, 21, 38, 0.95);
  border-bottom: 1px solid var(--border-subtle);
  padding: 0.85rem 1.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.mac-buttons {
  display: flex;
  gap: 7px;
}

.mac-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.mac-red { background: #FF5F56; }
.mac-yellow { background: #FFBD2E; }
.mac-green { background: #27C93F; }

.terminal-title {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.title-icon {
  color: var(--primary);
}

.run-tests-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.4rem 0.95rem;
  border-radius: var(--radius-pill);
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.3);
  color: var(--accent-qa-light);
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.run-tests-btn:hover:not(:disabled) {
  background: var(--accent-qa);
  color: #040810;
  box-shadow: 0 0 12px var(--accent-qa-glow);
}

.run-tests-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.spin-anim {
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Metrics Bar */
.terminal-metrics {
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 0.75rem 1.4rem;
  background: rgba(10, 16, 30, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  font-family: var(--font-sans);
  font-size: 0.82rem;
  flex-wrap: wrap;
}

.metric-item {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.metric-label {
  color: var(--text-muted);
}

.metric-value {
  color: var(--text-main);
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.35rem;
}

.status-pass {
  color: var(--accent-qa-light);
}

.text-emerald {
  color: var(--accent-qa-light);
}

.text-mono {
  font-family: var(--font-mono);
  color: var(--primary-light);
}

/* Progress Bar */
.progress-track {
  width: 100%;
  height: 3px;
  background: rgba(255, 255, 255, 0.05);
  position: relative;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary), var(--accent-qa));
  transition: width 0.3s ease;
}

.progress-running {
  background: linear-gradient(90deg, var(--primary), var(--accent-qa), var(--accent-purple));
  background-size: 200% 100%;
  animation: progressShine 1.5s infinite linear;
}

@keyframes progressShine {
  0% { background-position: 100% 0; }
  100% { background-position: -100% 0; }
}

/* Terminal Body */
.terminal-body {
  padding: 1rem 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.test-case-row {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 0.8rem 1rem;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  transition: all var(--transition-fast);
}

.test-case-row:hover {
  background: rgba(255, 255, 255, 0.04);
  border-color: rgba(255, 255, 255, 0.08);
}

.test-status-col {
  padding-top: 2px;
}

.status-pass-icon {
  color: var(--accent-qa-light);
}

.status-running-icon {
  color: var(--primary);
}

.status-pending-icon {
  color: var(--text-muted);
  font-size: 0.8rem;
}

.test-cat-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  display: inline-block;
  min-width: 95px;
}

.cat-component { color: var(--primary); }
.cat-responsive { color: #FBBF24; }
.cat-a11y { color: var(--accent-qa-light); }
.cat-e2e { color: var(--accent-purple); }
.cat-performance { color: #34D399; }

.test-info-col {
  flex-grow: 1;
}

.test-name {
  font-size: 0.88rem;
  color: var(--text-main);
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.test-assertion-code code {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  color: var(--text-muted);
  background: rgba(0, 0, 0, 0.3);
  padding: 2px 6px;
  border-radius: 4px;
  word-break: break-all;
}

.test-duration-col {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-muted);
  white-space: nowrap;
  padding-top: 2px;
}

/* Footer */
.terminal-footer {
  padding: 0.85rem 1.4rem;
  background: rgba(10, 16, 30, 0.95);
  border-top: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-mono);
  font-size: 0.78rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.terminal-summary {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--text-secondary);
}

.summary-check {
  color: var(--accent-qa-light);
  font-weight: 800;
}

.terminal-timestamp {
  color: var(--text-muted);
  font-size: 0.72rem;
}

@media (max-width: 768px) {
  .terminal-topbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .test-case-row {
    flex-direction: column;
    gap: 0.4rem;
  }

  .test-cat-tag {
    min-width: auto;
  }

  .desktop-only {
    display: none;
  }
}
</style>
