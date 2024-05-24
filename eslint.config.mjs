import globals from 'globals'
import pluginJs from '@eslint/js'
import tseslint from 'typescript-eslint'

export default [
  {
    rules: {
      'no-unused-vars': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'no-console': 'warning',
      'no-undef': 'error',
    },
    globals: {
      process: 'readonly',
    },

    languageOptions: { globals: globals.browser },
    extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'prettier',
    ],
  },

  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
]
