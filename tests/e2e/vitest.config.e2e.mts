import { defineConfig } from 'vitest/config';
import { config } from 'dotenv';
import tsConfigPaths from 'vite-tsconfig-paths';
import swc from 'unplugin-swc';

config({ path: '.env', override: true });

export default defineConfig({
  test: {
    include: ['tests/e2e/**/*.e2e-spec.ts'],
    globals: true,
    root: './',
    setupFiles: ['./tests/e2e/setup-e2e.ts'],
  },
  plugins: [tsConfigPaths(), swc.vite({ module: { type: 'es6' } })],
});
