import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

//const repo = '/GUILLERPORFOLIO/'

// https://vite.dev/config/
export default defineConfig({
  base: 'https://guiller022005.github.io/GuillerPorfolio/',
  plugins: [vue()],
})
