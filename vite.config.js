import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.webp'],
	build: {
		rollupOptions: {
			output: {
				assetFileNames: 'assets/[name][extname]'
			}
		}
	}
});
