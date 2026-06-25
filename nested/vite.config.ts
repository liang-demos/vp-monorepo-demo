import { defineConfig } from 'vite-plus'

import { sharedLintRules } from './share-config.ts'

export default defineConfig({
  fmt: {
    semi: false,
    singleQuote: true,
    sortImports: true,
    sortPackageJson: true,
  },
  lint: {
    plugins: ['typescript', 'unicorn', 'eslint'],
    rules: sharedLintRules,
  },
})
