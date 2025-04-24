import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// Use the static adapter
		adapter: adapter({
			// Default options are fine for GitHub Pages, but you can customize:
			pages: 'docs', // Output directory for GitHub Pages
			assets: 'docs', // Output directory for assets
			fallback: '404.html', // Use 404.html for fallback (good for GH Pages)
			precompress: false, // GH Pages doesn't need precompressed files
			strict: true
		}),
		paths: {
			base: '/arolon',
		}
	}
};

export default config;