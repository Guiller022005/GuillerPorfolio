<template>
  <section id="contact" class="contact">
    <h3>Contacto</h3>
    <div class="social-icons">
      <a v-for="social in socials" :key="social.name" :href="social.url" target="_blank" rel="noopener noreferrer">
        <component :is="social.icon" width="40px" height="40px" />
      </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=pauldiazjoseguillermo@gmail.com&su=Contacto..." target="_blank" rel="noopener noreferrer">
        <img src="../assets/email.svg" alt="Correo" width="40px" height="40px"/>
      </a>
    </div>
    <p>pauldiazjoseguillermo@gmail.com | +57 317 800 1452</p>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-vue-next';

const socials = ref([
  { name: 'GitHub', icon: GithubIcon, url: 'https://github.com/Guiller022005' },
  { name: 'LinkedIn', icon: LinkedinIcon, url: 'https://linkedin.com/in/josé-guillermo-paúl-díaz' },
  { name: 'Instagram', icon: InstagramIcon, url: 'https://instagram.com/pauldiazjoseguillermo' },
]);
</script>

<style scoped>
/* Estilos para la sección de contacto */
</style>
