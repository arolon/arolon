import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import adapter from '@sveltejs/adapter-static';

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

		// IMPORTANT: If deploying to '<your-username>.github.io/<your-repo-name>'
		// you MUST set the 'base' path.
		// If deploying to '<your-username>.github.io', you can omit 'paths'.
		// paths: {
		// 	// Replace '<your-repo-name>' with your actual repository name
		// 	base: process.env.NODE_ENV === 'production' ? '/<your-repo-name>' : '',
		// }
	}
};

export default config;