import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['**/*.ts', '**/*.js', '**/*.vue'],
    rules: {
      'no-console': 'off', // allow console.log
    },
  },
)
