import { createViteConfig } from '@open-slide/core/vite';
import { mergeConfig, build } from 'vite';
import { copyFileSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const cwd = process.cwd();
const base = await createViteConfig({ userCwd: cwd, mode: 'build' });
const config = mergeConfig(base, {
  base: '/claude-slide-0613/',
  publicDir: resolve(cwd, 'public'),
});
await build(config);

// Copy 404.html for GitHub Pages SPA routing
copyFileSync(
  resolve(cwd, 'public/404.html'),
  resolve(cwd, 'dist/404.html')
);
console.log('Copied 404.html to dist/');
