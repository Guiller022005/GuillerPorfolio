<template>
  <section id="skills" class="skills">
    <h3>Skills</h3>
    <div class="skills-grid">
      <div v-for="(skill, index) in skills" :key="skill.name" class="skill-item"
          :class="{'half-width': index >= skills.length - 2}" 
          @mouseover="flipCard(skill)" 
          @mouseleave="flipCard(skill)">
        <div class="card" :class="{ flipped: skill.flipped }">
          <div class="card-front">
            <img :src="skill.image" alt="Imagen de {{ skill.name }}" class="skill-image">
            <p>{{ skill.name }}</p>
          </div>
          <div class="card-back">
            <p>{{ skill.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const skills = ref([
  { image: '../assets/node.svg?height=200&width=300', name: 'Node.js', info: 'Crea aplicaciones rápidas en servidores.', flipped: false },
  { image: '../assets/nodeExpress.svg?height=200&width=300', name: 'Express', info: 'Facilita la creación de sitios web y servicios.', flipped: false },
  { image: '../assets/vue.svg?height=200&width=300', name: 'Vue.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
  { image: '../assets/react.svg?height=200&width=300', name: 'React.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
  { image: '../assets/javascript.svg?height=200&width=300', name: 'JavaScript', info: 'Da vida a las páginas web con interacción.', flipped: false },
  { image: '../assets/c++.svg?height=200&width=300', name: 'C++', info: 'Crea programas rápidos como videojuegos.', flipped: false },
  { image: '../assets/mysql.svg?height=200&width=300', name: 'MySQL', info: 'Almacena y organiza información en bases de datos.', flipped: false },
  { image: '../assets/mongo.svg?height=200&width=300', name: 'MongoDB', info: 'Guarda grandes volúmenes de datos de manera flexible.', flipped: false },
  { image: '../assets/python.svg?height=200&width=300', name: 'Python', info: 'Lenguaje fácil para múltiples tareas, como análisis de datos.', flipped: false },
  { image: '../assets/api.svg?height=200&width=300', name: 'APIs RESTful', info: 'Permiten que aplicaciones se comuniquen entre sí.', flipped: false },
  { image: './src/assets/responsive.svg?height=200&width=300', name: 'Sitios web responsive', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
  { image: './src/assets/docker.svg?height=200&width=300', name: 'Docker', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
]);

const flipCard = (skill) => {
  skill.flipped = !skill.flipped;
};
</script>

<style scoped>
/* Estilos para las habilidades */
</style>
