import { createViteConfig } from '@open-slide/core/vite';
import { mergeConfig, build } from 'vite';
import { copyFileSync, readFileSync, writeFileSync } from 'fs';
import { resolve } from 'path';

const cwd = process.cwd();
const BASE = '/claude-slide-0613/';

// Vite plugin: inject `basename` into the open-slide app's <BrowserRouter>
// so React Router strips the GitHub Pages sub-path before matching routes.
const injectBasenamePlugin = {
  name: 'inject-router-basename',
  enforce: 'pre',
  transform(code, id) {
    if (id.endsWith('@open-slide/core/src/app/app.tsx') || id.endsWith('/app/app.tsx')) {
      if (code.includes('<BrowserRouter>')) {
        return code.replace(
          '<BrowserRouter>',
          '<BrowserRouter basename={import.meta.env.BASE_URL}>'
        );
      }
    }
    return null;
  },
};

const baseCfg = await createViteConfig({ userCwd: cwd, mode: 'build' });
const config = mergeConfig(baseCfg, {
  base: BASE,
  publicDir: resolve(cwd, 'public'),
  plugins: [injectBasenamePlugin],
});

await build(config);

copyFileSync(resolve(cwd, 'public/404.html'), resolve(cwd, 'dist/404.html'));
console.log('Copied 404.html to dist/');

// Inject a tiny script into index.html that strips a trailing `index.html`
// from the URL before React Router initializes — so visiting
// `/claude-slide-0613/index.html` works the same as `/claude-slide-0613/`.
const indexPath = resolve(cwd, 'dist/index.html');
const html = readFileSync(indexPath, 'utf8');
const stripScript = `<script>(function(){var p=location.pathname;if(/\\/index\\.html$/.test(p)){history.replaceState(null,'',p.replace(/index\\.html$/,'')+location.search+location.hash);}})();</script>`;
writeFileSync(indexPath, html.replace('</head>', stripScript + '</head>'));
console.log('Injected index.html strip script');
