import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: '404.html',
			precompress: false, 
			strict: true
		}),
		paths: {
			base: '/arolon',
		}
	}
};

export default config;