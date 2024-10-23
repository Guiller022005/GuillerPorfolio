<template>
  <header>
      <nav>
        <h1>José Guillermo Paúl Díaz</h1>
        <ul>
          <li v-for="item in navItems" :key="item">
            <!-- Asigna dinámicamente el href según el nombre del item -->
            <a :href="item === 'Sobre mí' ? '#profile' : item === 'Habilidades' ? '#skills' : item === 'Proyectos' ? '#projects' : item === 'Contacto' ? '#contact' : '#'">
              {{ item }}
            </a>
          </li>
        </ul>
      </nav>
    </header>
</template>

<script setup>
import { ref } from 'vue';

const navItems = ref(['Sobre mí', 'Habilidades', 'Proyectos', 'Contacto']);

const getHref = (item) => {
  return item === 'Sobre mí' ? '#profile' 
       : item === 'Habilidades' ? '#skills' 
       : item === 'Proyectos' ? '#projects' 
       : item === 'Contacto' ? '#contact' : '#';
};
</script>

<style scoped>
/* Estilos de la barra de navegación */
</style>
