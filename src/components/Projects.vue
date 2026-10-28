<template>
  <section id="projects" class="projects-section" data-testid="projects-section">
    <!-- Header -->
    <div class="section-header">
      <span class="section-kicker" data-testid="projects-kicker">Portafolio de Trabajo</span>
      <h2 class="section-title">
        Proyectos <span class="gradient-text">Destacados</span>
      </h2>
      <p class="section-subtitle">
        Aplicaciones web reales donde combino interfaces de usuario dinámicas con arquitectura resiliente, 
        buenas prácticas de frontend y criterios rigurosos de calidad de software.
      </p>

      <!-- Filter Controls -->
      <div class="projects-filter" data-testid="projects-filter">
        <button 
          v-for="filter in filters" 
          :key="filter.id"
          class="filter-chip"
          :class="{ active: activeFilter === filter.id }"
          @click="activeFilter = filter.id"
        >
          {{ filter.label }}
        </button>
      </div>
    </div>

    <!-- Projects Grid -->
    <div class="projects-grid" data-testid="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.title" 
        class="glass-card project-card"
        :data-testid="`project-card-${project.id}`"
      >
        <!-- Project Thumbnail & Overlay -->
        <div class="project-media">
          <img 
            :src="project.image" 
            :alt="`Captura del proyecto ${project.title}`"
            class="project-img"
            loading="lazy"
          />
          <div class="project-overlay">
            <a 
              :href="project.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="overlay-link-btn"
              title="Abrir aplicación en vivo"
            >
              <ExternalLink :size="20" />
              <span>Ver Demo en Vivo</span>
            </a>
          </div>
          <span class="project-category-badge">{{ project.categoryName }}</span>
        </div>

        <!-- Project Content -->
        <div class="project-info">
          <!-- Tech Tags -->
          <div class="project-tags">
            <span v-for="tag in project.tags" :key="tag" class="tag-item">
              {{ tag }}
            </span>
          </div>

          <!-- Title -->
          <h3 class="project-title">{{ project.title }}</h3>

          <!-- Description -->
          <p class="project-desc">{{ project.description }}</p>

          <!-- QA & Architecture Highlight -->
          <div class="project-qa-highlight">
            <div class="qa-badge-title">
              <ShieldCheck :size="14" class="qa-highlight-icon" />
              <span>Criterio de Calidad & Frontend:</span>
            </div>
            <p class="qa-highlight-text">{{ project.qaHighlight }}</p>
          </div>

          <!-- Project Actions -->
          <div class="project-actions">
            <a 
              :href="project.url" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-primary project-btn"
            >
              <span>Demo en Vivo</span>
              <ExternalLink :size="15" />
            </a>
            <a 
              v-if="project.githubUrl" 
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="btn-secondary project-btn-sec"
              title="Ver código fuente en GitHub"
            >
              <Github :size="16" />
              <span>Código</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { ExternalLink, Github, ShieldCheck } from 'lucide-vue-next';

// Assets
import spinAppPng from '../assets/spinApp.png';
import ecomercePng from '../assets/ecomerce.png';
import spaceXPng from '../assets/spaceX.png';
import papadogJpg from '../assets/papadog.jpg';

type ProjectCategory = 'all' | 'frontend' | 'fullstack' | 'api';

interface FilterItem {
  id: ProjectCategory;
  label: string;
}

interface Project {
  id: string;
  title: string;
  category: 'frontend' | 'fullstack' | 'api';
  categoryName: string;
  description: string;
  qaHighlight: string;
  image: string;
  url: string;
  githubUrl?: string;
  tags: string[];
}

const activeFilter = ref<ProjectCategory>('all');

const filters: FilterItem[] = [
  { id: 'all', label: 'Todos los Proyectos' },
  { id: 'frontend', label: 'Frontend & Web Apps' },
  { id: 'fullstack', label: 'E-Commerce & Gestión' },
  { id: 'api', label: 'APIs & Datos Reactivos' }
];

const projects = ref<Project[]>([
  {
    id: 'spinapp-tournament',
    title: 'SpinApp — Gestión & Arbitraje de Tenis de Mesa',
    category: 'frontend',
    categoryName: 'Web App Oficial',
    description: 'Plataforma integral para gestión y arbitraje en tiempo real de torneos de tenis de mesa reglamentarios (estándar ITTF). Incluye control de partidos en vivo, cuadros de eliminatorias y tabla dinámica de posiciones.',
    qaHighlight: 'Lógica matemática de desempate y rotación de saques blindada contra fallos, autenticación robusta y diseño optimizado para dispositivos de arbitraje.',
    image: spinAppPng,
    url: 'https://spinapptorneo.web.app',
    tags: ['Vue 3', 'TypeScript', 'Firebase / Firestore', 'Tailwind CSS', 'Vite']
  },
  {
    id: 'ecommerce-platform',
    title: 'Plataforma E-commerce Interactiva',
    category: 'fullstack',
    categoryName: 'Full-Stack Solution',
    description: 'Tienda digital con catálogo dinámico de productos, filtrado reactivo por categorías, gestión de carrito de compras y persistencia de sesión.',
    qaHighlight: 'Pruebas de ciclo de compra completo (checkout), validación de inventario en tiempo real y aseguramiento de persistencia en LocalStorage.',
    image: ecomercePng,
    url: 'https://guiller022005.github.io/ecommerCampusM1/?id=aps',
    githubUrl: 'https://github.com/Guiller022005/ecommerCampusM1',
    tags: ['JavaScript ES6+', 'CSS Grid', 'LocalStorage', 'Shopping Cart Flow']
  },
  {
    id: 'spacex-explorer',
    title: 'SpaceX Mission & Launch Explorer',
    category: 'api',
    categoryName: 'API REST Integration',
    description: 'Dashboard interactivo que consume la API oficial de SpaceX, presentando historial de misiones, cohetes, cargas útiles y telemetría de lanzamientos espaciales.',
    qaHighlight: 'Control de latencia de red, manejo defensivo contra payloads nulos de la API, paginación fluida y diseño responsivo para móviles.',
    image: spaceXPng,
    url: 'https://guiller022005.github.io/SpaceX/',
    githubUrl: 'https://github.com/Guiller022005/SpaceX',
    tags: ['REST API', 'Async / Await', 'Dynamic Data Filtering', 'Modern CSS']
  },
  {
    id: 'papadog-restaurant',
    title: 'Papadog — Menú Digital & Landing Page Gastronómica',
    category: 'frontend',
    categoryName: 'Web App & Menú Digital',
    description: 'Landing page y carta digital interactiva para restaurante de comida rápida premium en Piedecuesta. Incluye catálogo visual de platillos (perros calientes, smash burgers, combos), filtrado reactivo por categorías, promociones destacadas y canal directo de pedidos hacia WhatsApp.',
    qaHighlight: 'Arquitectura responsiva mobile-first, optimización de assets e imágenes de alta resolución, integración fluida de checkout vía WhatsApp y verificación de accesibilidad UI.',
    image: papadogJpg,
    url: 'https://papadog-landing-page.vercel.app',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Mobile First', 'WhatsApp Order Flow']
  }
]);

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return projects.value;
  return projects.value.filter(p => p.category === activeFilter.value);
});
</script>

<style scoped>
.projects-section {
  padding: 5rem 0;
  position: relative;
}

/* Filter controls */
.projects-filter {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 1.8rem;
}

.filter-chip {
  padding: 0.45rem 1rem;
  border-radius: var(--radius-pill);
  background: rgba(15, 23, 42, 0.7);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  font-size: 0.84rem;
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-fast);
}

.filter-chip:hover {
  border-color: var(--primary);
  color: var(--text-main);
}

.filter-chip.active {
  background: rgba(56, 189, 248, 0.15);
  border-color: var(--primary);
  color: var(--primary-light);
}

/* Projects Grid */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.project-media {
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  background: #040810;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-card:hover .project-img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(7, 11, 20, 0.65);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity var(--transition-smooth);
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-link-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: var(--primary);
  color: #040810;
  font-weight: 700;
  font-size: 0.88rem;
  padding: 0.65rem 1.25rem;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transform: translateY(10px);
  transition: all var(--transition-smooth);
}

.project-card:hover .overlay-link-btn {
  transform: translateY(0);
}

.project-category-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(8, 12, 22, 0.88);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.25rem 0.65rem;
  border-radius: var(--radius-pill);
  font-size: 0.74rem;
  font-weight: 600;
  color: var(--primary-light);
}

/* Info */
.project-info {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.project-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 0.8rem;
}

.tag-item {
  font-size: 0.74rem;
  font-weight: 500;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-subtle);
  color: var(--text-secondary);
  padding: 0.2rem 0.6rem;
  border-radius: var(--radius-xs);
}

.project-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--text-main);
  margin-bottom: 0.6rem;
}

.project-desc {
  font-size: 0.9rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.2rem;
}

/* QA Highlight box */
.project-qa-highlight {
  background: rgba(16, 185, 129, 0.06);
  border: 1px solid rgba(16, 185, 129, 0.2);
  border-radius: var(--radius-sm);
  padding: 0.75rem 0.95rem;
  margin-bottom: 1.5rem;
}

.qa-badge-title {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent-qa-light);
  margin-bottom: 0.3rem;
}

.qa-highlight-icon {
  color: var(--accent-qa);
}

.qa-highlight-text {
  font-size: 0.82rem;
  color: #D1D5DB;
  line-height: 1.45;
}

/* Actions */
.project-actions {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-top: auto;
}

.project-btn {
  padding: 0.55rem 1.1rem;
  font-size: 0.86rem;
  flex: 1;
}

.project-btn-sec {
  padding: 0.55rem 1rem;
  font-size: 0.86rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>