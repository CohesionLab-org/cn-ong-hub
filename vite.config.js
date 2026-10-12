import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({ base: '/cn-ong-hub/', plugins: [tailwindcss()] });
