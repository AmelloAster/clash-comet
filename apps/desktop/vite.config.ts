import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { name, version } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
	server: {
		port: 8001
	},
	plugins: [react()],
	define: {
		pkgJson: { name, version }
	},
	build: {
		outDir: '../dist',
		assetsDir: '.'
	}
});
