## eslint 配置

[eslint 官方文档](https://eslint.bootcss.com/docs/user-guide/getting-started)

## 安装

安装 `eslint` `eslint-define-config`(可选)

```sh
yarn add  eslint -D
```

## 初始化

```sh
npx eslint --init
```

```sh

√ How would you like to use ESLint? · style
√ What type of modules does your project use? · none
√ Which framework does your project use? · vue   # 为Vue 添加对应的eslint 插件
√ Does your project use TypeScript? · No / Yes   # 为TypeScript 添加对应的eslint 插件
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JavaScript
Checking peerDependencies of eslint-config-standard@latest
The config that you've selected requires the following dependencies:

eslint-plugin-vue@latest @typescript-eslint/eslint-plugin@latest eslint-config-standard@latest eslint@^7.12.1 eslint-plugin-import@^2.22.1 eslint-plugin-node@^11.1.0 eslint-plugin-promise@^4.2.1 || ^5.0.0 @typescript-eslint/parser@latest
√ Would you like to install them now with npm? · No / Yes


```

## .eslintrc.js 配置

一般配置

```js
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('eslint-define-config')
module.exports = defineConfig({
  parser: 'vue-eslint-parser',
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser'
  },
  plugins: ['vue', '@typescript-eslint', 'import'],
  rules: {
    // vue base
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_'
      }
    ],
    'vue/valid-attribute-name': 0,
    'vue/singleline-html-element-content-newline': 'off',
    'vue/multiline-html-element-content-newline': 'off',
    // 'vue/name-property-casing': ['error', 'PascalCase'],
    'vue/no-v-html': 'off',
    'vue/html-closing-bracket-newline': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // "always" 需要在没有内容的元素上自动关闭
          normal: 'always',
          component: 'always' // Vue.js 自定义组件的样式
        },
        svg: 'always',
        math: 'always'
      }
    ],
    'vue/html-indent': 0,
    'vue/max-attributes-per-line': 0,
    'vue/custom-event-name-casing': 0,
    'vue/eqeqeq': [2, 'always', { null: 'ignore' }],
    'vue/multi-word-component-names': 0,
    'vue/v-on-event-hyphenation': 0,
    'vue/first-attribute-linebreak': 0,
    'vue/no-reserved-props': 0,
    // common
    'no-unused-vars': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: [2, 'never'],
    eqeqeq: 2,
    'semi-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    'comma-dangle': [2, 'never'],
    'comma-spacing': [
      2,
      {
        before: false,
        after: true
      }
    ],
    'comma-style': [2, 'last'],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [
      2,
      {
        before: true,
        after: true
      }
    ],
    'jsx-quotes': 2,
    'no-async-promise-executor': 0,
    'space-before-function-paren': 0,
    'no-empty': 0,
    'spaced-comment': ['error', 'always'],
    'no-undef': 0,
    // import
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ],
        pathGroupsExcludedImportTypes: ['builtin']
      }
    ],
    'import/first': 2,
    // typescript
    '@typescript-eslint/no-explicit-any': 0,
    'vue/script-setup-uses-vars': 2,
    '@typescript-eslint/no-unused-vars': [
      'error',
      { varsIgnorePattern: 'props' }
    ],
    '@typescript-eslint/consistent-type-imports': [
      2,
      { disallowTypeAnnotations: false }
    ]
  }
})
```

## .eslintignore 配置

一般配置

```
build
src/assets
public
dist
tests/
coverage
stats.html
index.html
```

## 使用

`package.json` 里配置 `scripts`

```json
{
  "scripts": {
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx,.vue --fix"
  }
}
```

执行 `lint` 脚本使用

```sh
yarn lint
```
