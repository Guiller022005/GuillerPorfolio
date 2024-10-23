<template>
  <div class="portfolio">
    <NavBar />
    <main>
      <Profile />
      <Skills />
      <Projects />
      <Contact />
    </main>
    <footer>
      <p>&copy; 2024 José Guillermo Paúl Díaz. Todos los derechos reservados.</p>
    </footer>
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue';
import Profile from './components/Profile.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Contact from './components/Contact.vue';
</script>

<style scoped>
/* Estilos generales */
</style>
