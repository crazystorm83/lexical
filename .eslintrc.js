module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:prettier/recommended'
  ],
  rules: {
    // 필요에 따라 규칙 추가

    // Possible Problems 
    'constructor-super': 'on',

    'for-direction': 'on',
    'getter-return': 'on',

    'no-cond-assign': 'on',
    'no-cond-assign': 'on',
    'no-constant-binary-expression': 'on',
    'no-constant-condition': 'on',
    'no-constructor-return': 'on',
    'no-dupe-class-members': 'on',
    'no-dupe-else-if': 'on',
    'no-dupe-keys': 'on',
    'no-duplicate-case': 'on',
    'no-duplicate-imports': 'on',
    'no-ex-assign': 'on',
    'no-fallthrough': 'on',
    'no-func-assign': 'on',
    'no-import-assign': 'on',
    'no-inner-declarations': 'on',
    'no-self-assign': 'on',
    'no-self-compare': 'on',
    'no-setter-return': 'on',
    'no-this-before-super': 'on',
    'no-unsafe-negation': 'on',
    'no-unsafe-optional-chaining': 'on',
    'no-unused-private-class-members': 'on',
    'no-unused-vars': 'on',
    'no-use-before-define': 'on',
    'require-atomic-updates': 'on',
    'use-isnan': 'on',
    'valid-typeof': 'on',

    // Suggestions
    'block-scoped-var': 'on',
  }
}; 