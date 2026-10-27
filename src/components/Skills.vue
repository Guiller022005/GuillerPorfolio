<template>
  <section id="skills" class="skills-section" data-testid="skills-section">
    <!-- Header -->
    <div class="section-header">
      <div class="section-pill" data-testid="skills-section-pill">
        <Sparkles :size="16" />
        <span>Stack Tecnológico & Calidad</span>
      </div>
      <h2 class="section-title">
        Arsenal de <span class="gradient-text">Frontend</span> & <span class="gradient-text-qa">QA Testing</span>
      </h2>
      <p class="section-subtitle">
        Herramientas y tecnologías dominadas para construir interfaces robustas, reactivas y verificadas automáticamente.
      </p>

      <!-- Category Filter Tabs -->
      <div class="filter-tabs" data-testid="skills-filter-tabs">
        <button 
          v-for="cat in categories" 
          :key="cat.id"
          class="filter-tab-btn"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
          :data-testid="`filter-btn-${cat.id}`"
        >
          <component :is="cat.icon" :size="16" />
          <span>{{ cat.label }}</span>
          <span class="tab-count">{{ getCategoryCount(cat.id) }}</span>
        </button>
      </div>
    </div>

    <!-- Skills Grid -->
    <div class="skills-grid" data-testid="skills-grid-container">
      <div 
        v-for="skill in filteredSkills" 
        :key="skill.name" 
        class="glass-card skill-card"
        :class="`skill-${skill.category}`"
        :data-testid="`skill-card-${skill.id}`"
      >
        <div class="skill-card-inner">
          <div class="skill-top-bar">
            <!-- Skill Icon -->
            <div class="skill-icon-frame">
              <img v-if="skill.image" :src="skill.image" :alt="`Icono de ${skill.name}`" class="skill-svg-icon" />
              <component v-else :is="skill.lucideIcon" :size="28" class="skill-lucide" />
            </div>

            <!-- Category Tag -->
            <span class="skill-badge" :class="`badge-${skill.category}`">
              {{ skill.categoryLabel }}
            </span>
          </div>

          <!-- Skill Name -->
          <h3 class="skill-name">{{ skill.name }}</h3>

          <!-- Skill Description -->
          <p class="skill-desc">{{ skill.description }}</p>

          <!-- Skill Advantage / Detail Pill -->
          <div class="skill-footer">
            <span class="skill-highlight-tag">
              <CheckCircle2 :size="13" class="highlight-check" />
              {{ skill.highlight }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { 
  Sparkles, 
  Code2, 
  ShieldCheck, 
  Server, 
  CheckCircle2,
  Terminal,
  Activity,
  Layers,
  FileCheck2,
  Lock
} from 'lucide-vue-next';

// Existing local assets
import nodeIcon from '../assets/node.svg';
import expressIcon from '../assets/nodeExpress.svg';
import vueIcon from '../assets/vue.svg';
import reactIcon from '../assets/react.svg';
import javascriptIcon from '../assets/javascript.svg';
import cppIcon from '../assets/c++.svg';
import mysqlIcon from '../assets/mysql.svg';
import mongoIcon from '../assets/mongo.svg';
import pythonIcon from '../assets/python.svg';
import apiIcon from '../assets/api.svg';
import responsiveIcon from '../assets/responsive.svg';
import dockerIcon from '../assets/docker.svg';
import cypressIcon from '../assets/cypress.svg';
import playwrightIcon from '../assets/playwright.svg';
import vitestIcon from '../assets/vitest.svg';
import typescriptIcon from '../assets/typescript.svg';
import k6Icon from '../assets/k6.svg';
import owaspIcon from '../assets/owasp.svg';
import exploratoryIcon from '../assets/exploratory-qa.svg';

interface SkillItem {
  id: string;
  name: string;
  category: 'frontend' | 'qa' | 'backend';
  categoryLabel: string;
  description: string;
  highlight: string;
  image?: string;
  lucideIcon?: any;
}

type SkillCategoryFilter = 'all' | 'frontend' | 'qa' | 'backend';

interface CategoryFilterItem {
  id: SkillCategoryFilter;
  label: string;
  icon: any;
}

const activeCategory = ref<SkillCategoryFilter>('all');

const categories: CategoryFilterItem[] = [
  { id: 'all', label: 'Todos', icon: Layers },
  { id: 'frontend', label: 'Frontend & UI', icon: Code2 },
  { id: 'qa', label: 'QA & Test Automation', icon: ShieldCheck },
  { id: 'backend', label: 'Backend & DevOps', icon: Server }
];

const allSkills = ref<SkillItem[]>([
  // FRONTEND SKILLS
  {
    id: 'vue',
    name: 'Vue.js 3',
    category: 'frontend',
    categoryLabel: 'Frontend Core',
    description: 'Desarrollo de SPAs reactivas y de alto rendimiento utilizando Composition API, Script Setup y arquitectura basada en componentes.',
    highlight: 'Composition API & Component Lifecycle',
    image: vueIcon
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    categoryLabel: 'Tipado & Robustez',
    description: 'Código estrictamente tipado que previene errores en tiempo de compilación y define contratos claros para componentes y APIs.',
    highlight: 'Tipado estricto & Contratos de datos',
    image: typescriptIcon
  },
  {
    id: 'javascript',
    name: 'JavaScript (ESNext)',
    category: 'frontend',
    categoryLabel: 'Lenguaje Base',
    description: 'Dominio de JavaScript moderno: asincronía (Promises/Async-Await), manipulación avanzada del DOM, closures y patrones funcionales.',
    highlight: 'ES6+ & Async/Await Avanzado',
    image: javascriptIcon
  },
  {
    id: 'responsive-design',
    name: 'Responsive & UI Design',
    category: 'frontend',
    categoryLabel: 'Diseño Adaptativo',
    description: 'Interfaces que se adaptan con precisión matemática desde pantallas ultra-anchas hasta móviles pequeños con CSS Grid y Flexbox.',
    highlight: 'Mobile-First & Fluid Layouts',
    image: responsiveIcon
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'frontend',
    categoryLabel: 'Frontend Library',
    description: 'Creación de interfaces declarativas con Hooks modernos, estado inmutable y consumo eficiente de APIs externas.',
    highlight: 'Hooks & Component Architecture',
    image: reactIcon
  },
  {
    id: 'api-rest',
    name: 'APIs RESTful & Fetch',
    category: 'frontend',
    categoryLabel: 'Integración',
    description: 'Consumo optimizado de servicios web, manejo de errores de red, interceptores de solicitudes y caching en cliente.',
    highlight: 'Error Handling & Interceptores',
    image: apiIcon
  },

  // QA & TESTING SKILLS
  {
    id: 'cypress',
    name: 'Cypress E2E Testing',
    category: 'qa',
    categoryLabel: 'E2E Automation',
    description: 'Automatización de flujos críticos de usuario de punta a punta, validando formularios, navegación y renderizado en navegadores reales.',
    highlight: 'Zero-Flake E2E Test Suites',
    image: cypressIcon
  },
  {
    id: 'playwright',
    name: 'Playwright Testing',
    category: 'qa',
    categoryLabel: 'Cross-Browser QA',
    description: 'Pruebas automatizadas multiplataforma (Chromium, Firefox, WebKit) con ejecución paralela rápida y aserciones deterministas.',
    highlight: 'Cross-Browser & Network Mocking',
    image: playwrightIcon
  },
  {
    id: 'vitest',
    name: 'Vitest & Unit Testing',
    category: 'qa',
    categoryLabel: 'Unit & Component QA',
    description: 'Pruebas unitarias ultra-rápidas para componentes Vue, composables y lógica pura de negocio con alta cobertura de código.',
    highlight: 'Component Mount & Mocking',
    image: vitestIcon
  },
  {
    id: 'qa-exploratory',
    name: 'QA Exploratorio & Charters',
    category: 'qa',
    categoryLabel: 'Metodología QA',
    description: 'Diseño de Test Charters, matrices de riesgo (RBT), detección proactiva de casos de borde y reporte estructurado de defectos.',
    highlight: 'Test Charters & Risk-Based Testing',
    image: exploratoryIcon
  },
  {
    id: 'k6-load',
    name: 'Pruebas de Carga (k6)',
    category: 'qa',
    categoryLabel: 'Performance QA',
    description: 'Automatización de pruebas de estrés y latencia en APIs REST para garantizar SLA y umbrales de respuesta bajo concurrencia.',
    highlight: 'Thresholds & Latency SLA',
    image: k6Icon
  },
  {
    id: 'owasp-security',
    name: 'OWASP & Seguridad Web',
    category: 'qa',
    categoryLabel: 'Seguridad Frontend',
    description: 'Auditoría preventiva de vulnerabilidades de seguridad frontend (XSS, inputs no sanitizados, CSRF y exposición de datos sensibles).',
    highlight: 'XSS Prevention & Data Sanitization',
    image: owaspIcon
  },

  // BACKEND & DEVOPS
  {
    id: 'node',
    name: 'Node.js',
    category: 'backend',
    categoryLabel: 'Backend Runtime',
    description: 'Servidores rápidos y escalables basados en eventos para APIs y microservicios con ecosistema NPM.',
    highlight: 'REST Services & Event Loop',
    image: nodeIcon
  },
  {
    id: 'express',
    name: 'Express.js',
    category: 'backend',
    categoryLabel: 'API Framework',
    description: 'Construcción ágil de endpoints, middlewares de autenticación, validación de schemas y manejo de rutas.',
    highlight: 'Middlewares & Routing',
    image: expressIcon
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'backend',
    categoryLabel: 'Contenedores',
    description: 'Empaquetado y aislamiento de aplicaciones en contenedores para garantizar entornos idénticos entre desarrollo, QA y producción.',
    highlight: 'Reproducible Build Environments',
    image: dockerIcon
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'backend',
    categoryLabel: 'Bases Relacionales',
    description: 'Diseño de modelos relacionales, consultas optimizadas, integridad referencial y transacciones ACID.',
    highlight: 'Relational Schemas & Indexing',
    image: mysqlIcon
  },
  {
    id: 'mongo',
    name: 'MongoDB',
    category: 'backend',
    categoryLabel: 'NoSQL Database',
    description: 'Bases de datos no relacionales basadas en documentos JSON para prototipado rápido y volumen flexible.',
    highlight: 'Document Models & Aggregations',
    image: mongoIcon
  },
  {
    id: 'python',
    name: 'Python',
    category: 'backend',
    categoryLabel: 'Scripting & Tools',
    description: 'Automatización de scripts auxiliares, manipulación de datos y pruebas rápidas de prototipos.',
    highlight: 'Automation Scripting & Data Parsing',
    image: pythonIcon
  }
]);

const filteredSkills = computed(() => {
  if (activeCategory.value === 'all') return allSkills.value;
  return allSkills.value.filter(s => s.category === activeCategory.value);
});

const getCategoryCount = (catId: string) => {
  if (catId === 'all') return allSkills.value.length;
  return allSkills.value.filter(s => s.category === catId).length;
};
</script>

<style scoped>
.skills-section {
  padding: 5rem 0;
  position: relative;
}

/* Filter Tabs */
.filter-tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.filter-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1.1rem;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-family: var(--font-sans);
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-smooth);
}

.filter-tab-btn:hover {
  border-color: var(--primary);
  color: var(--text-main);
  transform: translateY(-1px);
}

.filter-tab-btn.active {
  background: rgba(56, 189, 248, 0.12);
  border-color: var(--primary);
  color: var(--primary-light);
  box-shadow: 0 0 16px rgba(56, 189, 248, 0.2);
}

.tab-count {
  font-family: var(--font-mono);
  font-size: 0.74rem;
  padding: 0.1rem 0.45rem;
  border-radius: var(--radius-pill);
  background: rgba(255, 255, 255, 0.08);
}

/* Skills Grid */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-smooth);
}

.skill-card:hover {
  transform: translateY(-5px);
}

.skill-qa:hover {
  border-color: var(--accent-qa);
  box-shadow: 0 16px 36px -12px rgba(0, 0, 0, 0.4), 0 0 20px -4px var(--accent-qa-glow);
}

.skill-frontend:hover {
  border-color: var(--primary);
}

.skill-card-inner {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.skill-top-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
}

.skill-icon-frame {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
}

.skill-svg-icon {
  width: 32px;
  height: 32px;
  object-fit: contain;
}

.skill-lucide {
  color: var(--primary);
}

.skill-qa .skill-lucide {
  color: var(--accent-qa-light);
}

.skill-badge {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
}

.badge-frontend {
  background: rgba(56, 189, 248, 0.1);
  color: var(--primary);
  border: 1px solid rgba(56, 189, 248, 0.25);
}

.badge-qa {
  background: rgba(16, 185, 129, 0.1);
  color: var(--accent-qa-light);
  border: 1px solid rgba(16, 185, 129, 0.25);
}

.badge-backend {
  background: rgba(129, 140, 248, 0.1);
  color: var(--accent-purple);
  border: 1px solid rgba(129, 140, 248, 0.25);
}

.skill-name {
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.6rem;
}

.skill-desc {
  font-size: 0.88rem;
  color: var(--text-secondary);
  line-height: 1.55;
  margin-bottom: 1.4rem;
  flex-grow: 1;
}

.skill-footer {
  margin-top: auto;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
}

.skill-highlight-tag {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.76rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
}

.highlight-check {
  color: var(--accent-qa-light);
}

@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>
