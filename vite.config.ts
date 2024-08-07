import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  const config = {
    plugins: [react()],
    base: '/assignment-14/',
  };

  if (process.env.BUILD_COMBINED === 'true' && process.env.BUILD_TYPE === 'storybook') {
    return {
      ...config,
      base: config.base + 'storybook',
    };
  }

  return config;
});
