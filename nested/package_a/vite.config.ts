import { defineConfig } from 'vite-plus'

import { sharedLintRules } from '../share-config.ts'

export default defineConfig({
  lint: {
    plugins: ['typescript', 'unicorn', 'eslint'],
    rules: sharedLintRules,
  },
})
