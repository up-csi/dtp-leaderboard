import autoprefixer from 'autoprefixer';
import { builtinModules } from 'module';
import { defineConfig } from 'vite';
import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwind from 'tailwindcss';

export default defineConfig({
    plugins: [sveltekit(), purgeCss()],
    css: { postcss: { plugins: [tailwind, autoprefixer] } },
    ssr: { external: builtinModules },
});
