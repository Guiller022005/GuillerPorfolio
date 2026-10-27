<template>
  <section id="qa-advantage" class="qa-advantage-section" data-testid="qa-advantage-section">
    <!-- Header -->
    <div class="section-header">
      <div class="section-pill qa-pill" data-testid="qa-section-pill">
        <ShieldCheck :size="16" />
        <span>Factor Diferencial</span>
      </div>
      <h2 class="section-title">
        La Ventaja Híbrida: <span class="gradient-text-qa">Frontend + QA</span>
      </h2>
      <p class="section-subtitle">
        La mayoría de los desarrolladores frontend construyen la interfaz y esperan que otros prueben si funciona. 
        Yo diseño, implemento y blindo la aplicación con calidad y pruebas automatizadas desde la primera línea de código.
      </p>
    </div>

    <!-- 4 Value Pillar Cards Grid -->
    <div class="pillars-grid">
      <div 
        v-for="pillar in pillars" 
        :key="pillar.title" 
        class="glass-card pillar-card"
        :data-testid="`pillar-${pillar.id}`"
      >
        <div class="pillar-header">
          <div class="pillar-icon-box" :class="pillar.colorClass">
            <component :is="pillar.icon" :size="24" />
          </div>
          <span class="pillar-tag">{{ pillar.tag }}</span>
        </div>
        <h3 class="pillar-title">{{ pillar.title }}</h3>
        <p class="pillar-desc">{{ pillar.description }}</p>
        <div class="pillar-tools">
          <span v-for="tool in pillar.tools" :key="tool" class="tool-badge">
            {{ tool }}
          </span>
        </div>
      </div>
    </div>

    <!-- Comparison Table: Traditional Dev vs Frontend + QA -->
    <div class="comparison-card glass-card" data-testid="qa-comparison-card">
      <div class="comparison-header">
        <h3 class="comparison-title">¿Por qué este perfil marca la diferencia en tu equipo?</h3>
        <p class="comparison-subtitle">Comparativa entre desarrollo tradicional y desarrollo con mentalidad QA integrada</p>
      </div>

      <!-- Desktop & Tablet Table View -->
      <div class="comparison-table-wrapper desktop-table-view">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Dimensión</th>
              <th class="col-traditional">Desarrollador Frontend Tradicional</th>
              <th class="col-hybrid">Frontend con ADN de QA (Mi Enfoque)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in comparisons" :key="item.dimension">
              <td class="dim-name">
                <span class="dim-bullet"></span>
                {{ item.dimension }}
              </td>
              <td class="col-traditional-cell">
                <span class="cross-icon">✕</span>
                {{ item.traditional }}
              </td>
              <td class="col-hybrid-cell">
                <span class="check-icon">✓</span>
                {{ item.hybrid }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile Stacked Comparison Cards View -->
      <div class="mobile-comparison-cards">
        <div 
          v-for="item in comparisons" 
          :key="item.dimension" 
          class="mobile-comp-card"
        >
          <div class="mobile-dim-header">
            <span class="dim-bullet"></span>
            <h4 class="mobile-dim-title">{{ item.dimension }}</h4>
          </div>

          <div class="mobile-comp-section trad-section">
            <span class="mobile-comp-badge badge-trad">Frontend Tradicional</span>
            <p class="mobile-comp-text text-trad">
              <span class="cross-icon">✕</span>
              {{ item.traditional }}
            </p>
          </div>

          <div class="mobile-comp-section hybrid-section">
            <span class="mobile-comp-badge badge-hyb">Frontend con ADN de QA</span>
            <p class="mobile-comp-text text-hyb">
              <span class="check-icon">✓</span>
              {{ item.hybrid }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { 
  ShieldCheck, 
  Layers, 
  Terminal, 
  Zap, 
  Bug 
} from 'lucide-vue-next';

const pillars = [
  {
    id: 'testable-architecture',
    icon: Layers,
    colorClass: 'icon-cyan',
    tag: 'Arquitectura Frontend',
    title: 'Componentes Testables por Diseño',
    description: 'Estructuro componentes en Vue 3 y TypeScript con props tipadas, contratos claros y selectores estables (`data-testid`). El código queda listo para pruebas unitarias y E2E sin depender de clases CSS frágiles.',
    tools: ['Vue 3 Composition API', 'TypeScript', 'data-testid standard']
  },
  {
    id: 'automation-testing',
    icon: Terminal,
    colorClass: 'icon-emerald',
    tag: 'Automatización & CI/CD',
    title: 'Suites E2E & Unitarias Continuas',
    description: 'Diseño suites de pruebas con Cypress, Playwright y Vitest para validar flujos críticos (formularios, carritos, autenticación). Las regresiones se detectan en la máquina local o CI antes de llegar a staging.',
    tools: ['Cypress', 'Playwright', 'Vitest', 'GitHub Actions']
  },
  {
    id: 'performance-a11y',
    icon: Zap,
    colorClass: 'icon-purple',
    tag: 'UX & Estándares Web',
    title: 'Accesibilidad (A11y) & Core Web Vitals',
    description: 'No basta con que se vea bien: la interfaz debe cargar en milisegundos y ser navegable para todos. Aplico auditorías con axe-core, WCAG 2.1 AA y optimizaciones de Largest Contentful Paint (LCP < 1.2s).',
    tools: ['Lighthouse 99+', 'axe-core A11y', 'Core Web Vitals']
  },
  {
    id: 'edge-cases-preventive',
    icon: Bug,
    colorClass: 'icon-amber',
    tag: 'Mentalidad de Calidad',
    title: 'Anticipación a Casos Borde (Edge Cases)',
    description: 'Como QA, no espero que el usuario descubra las fallas: contemplo estados vacíos, latencias lentas de red, validaciones de campo exhaustivas y manejo elegante de errores desde el primer wireframe.',
    tools: ['Test Charters', 'Exploratory QA', 'Error Boundaries']
  }
];

const comparisons = [
  {
    dimension: 'Entrega de Código',
    traditional: 'Entrega código esperando que el equipo de QA detecte los errores.',
    hybrid: 'Entrega componentes autoverificados con pruebas unitarias y de integración.'
  },
  {
    dimension: 'Regresiones en Producción',
    traditional: 'Riesgo alto de romper funcionalidades existentes al agregar nuevas features.',
    hybrid: 'Pruebas E2E automatizadas blindan flujos existentes con cero regresiones.'
  },
  {
    dimension: 'Manejo de Errores y Edge Cases',
    traditional: 'Enfocado únicamente en el "happy path" (camino ideal del usuario).',
    hybrid: 'Diseño exhaustivo para errores 4xx/5xx, offline, inputs maliciosos y límites de datos.'
  },
  {
    dimension: 'Comunicación en el Equipo',
    traditional: 'Fricción frecuente entre Frontend y QA por reportes ambiguos de bugs.',
    hybrid: 'Comunicación fluida: hablo el idioma técnico de desarrollo y el rigor metódico de QA.'
  }
];
</script>

<style scoped>
.qa-advantage-section {
  padding: 5rem 0;
  position: relative;
}

.pillars-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.8rem;
  margin-bottom: 4rem;
}

.pillar-card {
  padding: 2.2rem;
  display: flex;
  flex-direction: column;
}

.pillar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.4rem;
}

.pillar-icon-box {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-cyan {
  background: rgba(56, 189, 248, 0.15);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.3);
}

.icon-emerald {
  background: rgba(16, 185, 129, 0.15);
  color: var(--accent-qa-light);
  border: 1px solid rgba(16, 185, 129, 0.3);
}

.icon-purple {
  background: rgba(129, 140, 248, 0.15);
  color: var(--accent-purple);
  border: 1px solid rgba(129, 140, 248, 0.3);
}

.icon-amber {
  background: rgba(245, 158, 11, 0.15);
  color: #FBBF24;
  border: 1px solid rgba(245, 158, 11, 0.3);
}

.pillar-tag {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  color: var(--text-muted);
  background: rgba(255, 255, 255, 0.04);
  padding: 0.25rem 0.75rem;
  border-radius: var(--radius-pill);
  border: 1px solid var(--border-subtle);
}

.pillar-title {
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.9rem;
}

.pillar-desc {
  font-size: 0.96rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.pillar-tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: auto;
}

.tool-badge {
  font-family: var(--font-mono);
  font-size: 0.76rem;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-xs);
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid var(--border-subtle);
  color: var(--text-main);
}

/* Comparison Card */
.comparison-card {
  padding: 2.5rem;
}

.comparison-header {
  text-align: center;
  margin-bottom: 2rem;
}

.comparison-title {
  font-size: 1.6rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.comparison-subtitle {
  color: var(--text-secondary);
  font-size: 0.98rem;
}

.comparison-table-wrapper {
  overflow-x: auto;
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

.comparison-table th {
  padding: 1rem 1.2rem;
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-bottom: 1px solid var(--border-subtle);
}

.comparison-table td {
  padding: 1.2rem;
  font-size: 0.92rem;
  line-height: 1.5;
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}

.dim-name {
  font-weight: 700;
  color: var(--text-main);
  width: 22%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.dim-bullet {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--primary);
}

.col-traditional {
  color: var(--text-muted);
  width: 39%;
}

.col-traditional-cell {
  color: var(--text-muted);
}

.cross-icon {
  color: #EF4444;
  margin-right: 0.4rem;
  font-weight: 800;
}

.col-hybrid {
  color: var(--accent-qa-light);
  width: 39%;
  background: rgba(16, 185, 129, 0.04);
  border-radius: 8px 8px 0 0;
}

.col-hybrid-cell {
  color: #F8FAFC;
  background: rgba(16, 185, 129, 0.04);
  font-weight: 500;
}

.check-icon {
  color: var(--accent-qa-light);
  margin-right: 0.4rem;
  font-weight: 800;
}

/* Mobile Comparative Cards */
.mobile-comparison-cards {
  display: none;
  flex-direction: column;
  gap: 1.2rem;
}

.mobile-comp-card {
  background: rgba(10, 16, 30, 0.7);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
}

.mobile-dim-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.mobile-dim-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--text-main);
}

.mobile-comp-section {
  padding: 0.8rem 0.9rem;
  border-radius: var(--radius-sm);
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.trad-section {
  background: rgba(239, 68, 68, 0.04);
  border: 1px solid rgba(239, 68, 68, 0.15);
}

.hybrid-section {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.mobile-comp-badge {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.badge-trad {
  color: #F87171;
}

.badge-hyb {
  color: var(--accent-qa-light);
}

.mobile-comp-text {
  font-size: 0.88rem;
  line-height: 1.5;
}

.text-trad {
  color: var(--text-muted);
}

.text-hyb {
  color: #F8FAFC;
  font-weight: 500;
}

@media (max-width: 900px) {
  .pillars-grid {
    grid-template-columns: 1fr;
  }

  .comparison-card {
    padding: 1.5rem 1rem;
  }

  .comparison-table th,
  .comparison-table td {
    padding: 0.8rem 0.6rem;
    font-size: 0.84rem;
  }
}

@media (max-width: 768px) {
  .desktop-table-view {
    display: none !important;
  }

  .mobile-comparison-cards {
    display: flex !important;
  }
}
</style>
