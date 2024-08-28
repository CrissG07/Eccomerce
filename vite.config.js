import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Eccomerce/', // Ajusta esto al nombre de tu repositorio
});
