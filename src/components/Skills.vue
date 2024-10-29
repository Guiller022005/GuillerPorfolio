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

const skills = ref([
  { image: nodeIcon, name: 'Node.js', info: 'Crea aplicaciones rápidas en servidores.', flipped: false },
  { image: expressIcon, name: 'Express', info: 'Facilita la creación de sitios web y servicios.', flipped: false },
  { image: vueIcon, name: 'Vue.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
  { image: reactIcon, name: 'React.js', info: 'Hace las páginas web más rápidas e interactivas.', flipped: false },
  { image: javascriptIcon, name: 'JavaScript', info: 'Da vida a las páginas web con interacción.', flipped: false },
  { image: cppIcon, name: 'C++', info: 'Crea programas rápidos como videojuegos.', flipped: false },
  { image: mysqlIcon, name: 'MySQL', info: 'Almacena y organiza información en bases de datos.', flipped: false },
  { image: mongoIcon, name: 'MongoDB', info: 'Guarda grandes volúmenes de datos de manera flexible.', flipped: false },
  { image: pythonIcon, name: 'Python', info: 'Lenguaje fácil para múltiples tareas, como análisis de datos.', flipped: false },
  { image: apiIcon, name: 'APIs RESTful', info: 'Permiten que aplicaciones se comuniquen entre sí.', flipped: false },
  { image: responsiveIcon, name: 'Sitios web responsive', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
  { image: dockerIcon, name: 'Docker', info: 'Adaptan un sitio para verse bien en cualquier dispositivo.', flipped: false },
]);

const flipCard = (skill) => {
  skill.flipped = !skill.flipped;
};
</script>

<style scoped>
/* Estilos para las habilidades */
</style>
