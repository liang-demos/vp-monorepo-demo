import { defineConfig } from 'vite-plus'

export default defineConfig({
  lint: {
    plugins: ['unicorn', 'eslint'],
    rules: {
      'no-console': 'error',
      'unicorn/filename-case': 'off',
    },
  },
})
