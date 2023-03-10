module.exports = {
  plugins: ['stylelint-prettier'],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier',
    'stylelint-prettier/recommended',
    'stylelint-config-recommended-vue',
    'stylelint-config-recommended-vue/scss'
  ],
  customSyntax: 'postcss-html',
  ignoreFiles: [],
  rules: {
    'prettier/prettier': true
  }
}
