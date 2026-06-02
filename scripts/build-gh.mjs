import { createViteConfig } from '@open-slide/core/vite';
import { mergeConfig, build } from 'vite';

const base = await createViteConfig({ userCwd: process.cwd(), mode: 'build' });
const config = mergeConfig(base, { base: '/claude-slide-0613/' });
await build(config);
