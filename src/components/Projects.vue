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
    title: 'Plataforma de E-commerce',
    description: 'Una solución full-stack de comercio electrónico con gestión de inventario en tiempo real.',
    image: '../src/assets/ecomerce.png?height=200&width=300',
    url: 'https://guiller022005.github.io/ecommerCampusM1/?id=aps',
  },
  {
    title: 'SpaceX',
    description: 'Una aplicación web responsiva para la organización eficiente de tareas y colaboración en equipo.',
    image: '../src/assets/spaceX.png?height=200&width=300',
    url: 'https://guiller022005.github.io/SpaceX/',
  },
  {
    title: 'Plataforma de Cine',
    description: 'Una aplicación web para visualizar el catálogo de películas en cartelera y gestionar reservas.',
    image: '../src/assets/foodSite.png?height=200&width=300',
    url: 'https://guiller022005.github.io/proyectoWeb/',
  }
]);
</script>

<style scoped>
/* Estilos para la sección de proyectos */
</style>
