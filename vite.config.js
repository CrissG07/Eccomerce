import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/Eccomerce/', // Configura esto según el nombre de tu repositorio
});

