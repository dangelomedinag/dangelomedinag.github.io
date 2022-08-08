import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: dev ? '' : '/magacine'
		},
		prerender: {
			crawl: true,
			default: true,
			onError: 'continue',
			enabled: true
		},
		appDir: 'internal'
	}
};

export default config;
