import { DummyRuleMap } from 'vite-plus/lint'

export const sharedLintRules: DummyRuleMap = {
  'import/no-default-export': 'warn',
  'no-console': 'error',
  'unicorn/filename-case': 'off',
}
