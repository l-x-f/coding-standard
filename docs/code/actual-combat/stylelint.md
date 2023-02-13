## stylelint 配置

[stylelint 官方文档](http://stylelint.docschina.org/)

## 安装

- 安装 `stylelint` 及其标准插件

  ```sh
  yarn add stylelint  stylelint-config-standard stylelint-order  -D
  ```

- 安装 `scss` 对应的`stylelint` 插件

  ```sh
  yarn add  stylelint-scss stylelint-config-standard-scss stylelint-config-sass-guidelines  -D
  ```

- 安装 `vue` 对应的`stylelint` 插件

  ```sh
  yarn add stylelint-config-recommended-vue  -D
  ```

## .stylelintrc.js 配置

一般配置

```js
module.exports = {
  defaultSeverity: 'error',
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue'
  ],
  plugins: ['stylelint-scss', 'stylelint-order'],
  rules: {
    'order/order': [
      'declarations',
      'custom-properties',
      'dollar-variables',
      'rules',
      'at-rules'
    ],
    'order/properties-order': [
      'position',
      'top',
      'right',
      'bottom',
      'left',
      'float'
    ],
    'order/properties-alphabetical-order': null,
    'media-feature-name-no-vendor-prefix': true,
    'selector-no-vendor-prefix': null,
    'property-no-vendor-prefix': null,
    'rule-empty-line-before': null,
    'no-missing-end-of-source-newline': null,
    'selector-pseudo-class-no-unknown': null,
    'font-family-no-missing-generic-family-keyword': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'declaration-block-trailing-semicolon': null,
    'selector-combinator-space-before': null,
    'selector-combinator-space-after': null,
    'block-closing-brace-newline-before': null,
    'at-rule-no-unknown': null,
    'property-case': null,
    'property-no-unknown': null,
    'declaration-block-single-line-max-declarations': null,
    'value-no-vendor-prefix': null,
    'no-empty-source': null,
    'at-rule-no-vendor-prefix': null,
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep', 'deep']
      }
    ],
    'function-calc-no-unspaced-operator': null,
    'selector-class-pattern': null,
    'max-nesting-depth': null,
    'scss/at-mixin-pattern': null,
    'font-family-name-quotes': null,
    'declaration-colon-newline-after': null,
    'string-quotes': null,
    'selector-max-compound-selectors': null,
    'value-list-comma-newline-after': null,
    'selector-no-qualifying-type': null,
    'selector-max-id': null,
    'scss/at-import-partial-extension': null,
    'scss/at-import-partial-extension-blacklist': null,
    'scss/at-extend-no-missing-placeholder': null,
    'color-function-notation': null,
    'alpha-value-notation': null
  }
}
```

## .stylelintignore 配置

一般配置

```
node_modules/
dist/
*.min.css
tests/**
index.html
```

## 使用

`package.json` 里配置 `scripts`

```json
{
  "scripts": {
    "stylelint": "stylelint  ./src/**/*.{scss,css,less,vue} --fix"
  }
}
```

执行 `stylelint` 脚本使用

```sh
yarn stylelint
```
