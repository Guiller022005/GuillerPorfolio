<template>
  <section id="projects" class="projects">
    <h3>Proyectos Destacados</h3>
    <div class="projects-grid">
      <div v-for="project in projects" :key="project.title" class="project-item">
        <img :src="project.image" :alt="project.title">
        <div class="project-content">
          <h4>{{ project.title }}</h4>
          <p>{{ project.description }}</p>
          <a :href="project.url" class="project-link" target="_blank" rel="noopener noreferrer">Ver Proyecto →</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const projects = ref([
  {
    title: 'Plataforma de Cine',
    description: 'Una aplicación web para visualizar el catálogo de películas en cartelera y gestionar reservas.',
    image: '../assets/cine.png?height=200&width=300',
    url: 'https://github.com/Guiller022005/CineCampus',
  },
  {
    title: 'Plataforma de E-commerce',
    description: 'Una solución full-stack de comercio electrónico con gestión de inventario en tiempo real.',
    image: '../assets/ecomerce.png?height=200&width=300',
    url: 'https://guiller022005.github.io/ecommerCampusM1/?id=aps',
  },
  {
    title: 'SpaceX',
    description: 'Aplicación interactiva que muestra misiones espaciales, lanzamientos y vehículos de SpaceX.',
    image: '../assets/spaceX.png?height=200&width=300',
    url: 'https://guiller022005.github.io/SpaceX/',
  },
  {
    title: 'Foods',
    description: 'Aplicación interactiva que muestra misiones espaciales, lanzamientos y vehículos de SpaceX.',
    image: '../assets/foodSite.png?height=200&width=300',
    url: 'https://guiller022005.github.io/proyectoWeb/',
  }
]);
</script>

<style scoped>
.projects {
  margin-bottom: 4rem;
  padding: 0 2rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 450px)); /* Ancho máximo de 450px por columna */
  gap: 2rem;
  justify-content: center; /* Centra las columnas */
  max-width: 1000px; /* Reduce el ancho máximo del contenedor */
  margin: 0 auto;
}

.project-item {
  width: 100%;
  background-color: #2d3748;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: all 0.3s;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.project-item:hover {
  background-color: #4a5568;
  transform: scale(1.05);
}

.project-item img {
  width: 100%;
  height: 14rem;
  object-fit: cover;
}

.project-content {
  padding: 1.2rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.project-content h4 {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.8rem;
}

.project-content p {
  margin-bottom: 1.2rem;
  line-height: 1.5;
  font-size: 0.95rem; /* Reduce ligeramente el tamaño del texto */
  flex-grow: 1;
}

.project-link {
  color: #64b5f6;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
  margin-top: auto;
}

.project-link:hover {
  color: #4299e1;
}

/* Media queries para responsividad */
@media (max-width: 1024px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(auto, 400px));
    gap: 1.5rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: minmax(auto, 450px);
  }
  
  .project-item img {
    height: 200px;
  }
}
</style>