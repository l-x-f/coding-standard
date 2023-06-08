# git-hooks 配置

[husky 文档](https://typicode.github.io/husky/#/?id=automatic-recommended)

[commitlint 文档](https://commitlint.js.org/#/)

[commitizen/cz-cli 文档](https://github.com/commitizen/cz-cli)

[cz-customizable 文档](https://github.com/leoforfree/cz-customizable)

[cz-conventional-changelog 文档](https://github.com/commitizen/cz-conventional-changelog)

[lint-staged 文档](https://github.com/okonet/lint-staged#readme)

## 安装依赖

```sh
yarn add husky @commitlint/cli @commitlint/config-conventional commitizen cz-conventional-changelog cz-customizable  lint-staged  -D
```

## 执行

```sh
npx  husky install
```

## 添加提交信息校验 git hooks

```sh
npx husky add .husky/commit-msg  'npx  commitlint  --edit $1'
```

## 添加提交前校验 git hooks

```sh
npx husky add .husky/pre-commit  'npx  lint-staged'
```

## 添加文件 `commitlint.config.js`

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // 提交主题类型
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'delete',
        'docs',
        'test',
        'style',
        'ci',
        'refactor',
        'perf',
        'chore',
        'revert'
      ]
    ],
    'subject-full-stop': [0, 'never'], // 主题句号
    'subject-case': [0, 'never'] // 主题案例
  }
}
```

## 添加文件 `.cz-config.js` 按项目配置

```js
module.exports = {
  // 修改主题选择
  types: [
    { value: 'feat', name: 'feat:添加新功能' },
    { value: 'fix', name: 'fix:Bug修复' },
    { value: 'delete', name: 'delete:删除代码，接口' },
    {
      value: 'docs',
      name: 'docs:  变更的只有文档，比如README.md等'
    },
    { value: 'test', name: 'test:添加一个测试，包括单元测试、集成测试等' },
    {
      value: 'style',
      name: 'style:  空格, 分号等格式修复（注意不是 css 修改）'
    },
    { value: 'ci', name: 'ci:ci配置，脚本文件等更新' },
    {
      value: 'refactor',
      name: 'refactor:代码重构（即不是新增功能，也不是修改bug的代码变动）'
    },
    { value: 'perf', name: 'perf:优化相关，比如提升性能、体验' },
    { value: 'chore', name: 'chore:改变构建流程、或者增加依赖库、工具等' },
    { value: 'revert', name: 'revert:代码回退' }
  ],
  // 构建对话
  messages: {
    type: '选择一种你的提交类型(必选):',
    scope: '选择一个更改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '自定义更改范围(可选):',
    subject: '提交说明(必填):\n',
    body: '长说明，使用"|"换行(可选)：\n',
    breaking: '非兼容性说明 (可选):\n',
    footer: '关联关闭的issue，例如：#31, #34(可选):\n',
    confirmCommit: '确定提交说明?'
  },
  // 是否允许自定义更改范围
  allowCustomScopes: true,
  // 允许中断的改变
  allowBreakingChanges: ['feat', 'fix'],
  // 修改主题描述字数限制
  subjectLimit: 100,
  // 选择跳过的步骤
  skipQuestions: ['scope', 'customScope', 'body', 'breaking', 'footer']
}
```

## package.json scripts 中添加

```json
{
  "scripts": {
    "prepare": "husky install",
    "commit": "git-cz"
  }
}
```

## package.json 中添加

```json
{
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,vue}": ["npm run lint"],
    "src/**/*.{html,vue,css,sass,scss}": ["npm run stylelint"]
  }
}
```

## 添加文件 update.sh

```sh
#!/usr/bin/env bash
success="更新成功"
set -e
git add .
npm  run commit
git  pull
git  push
echo  -e "\n\033[32m$success\033[0m"
```

## 项目代码提交 使用

```sh
./update.sh
```

## package.json 完整配置

```json
{
  "name": "web",
  "version": "2.1.0",
  "license": "ISC",
  "author": "xiaofei",
  "main": "src/main.ts",
  "scripts": {
    "preinstall": "npx only-allow yarn",
    "dev": "vite --host",
    "build:prod": "vite build  --mode production",
    "build:staging": "vite build  --mode staging",
    "dev:test": "vite --host  --mode test",
    "report": "cross-env REPORT=true yarn build",
    "tsc": "vue-tsc --noEmit --skipLibCheck",
    "serve": "vite preview",
    "prepare": "husky install",
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s",
    "commit": "git-cz",
    "lint": "eslint ./src --ext .js,.jsx,.ts,.tsx,.vue --fix",
    "stylelint": "stylelint  ./src/**/*.{vue,css,less,sass,scss} --fix",
    "prettier": "prettier ./src/**/*.{js,jsx,ts,tsx,vue,css,less,sass,scss} --write",
    "test:unit": "jest  --coverage",
    "test:e2e": "cypress open-ct",
    "test": "yarn test:unit && yarn test:e2e",
    "release": "node ./scripts/release.js",
    "update": "node ./scripts/update.js",
    "deploy": "node ./scripts/deploy.js",
    "backup": "node ./scripts/backup.js"
  },
  "dependencies": {
    "@element-plus/icons-vue": "^2.0.9",
    "accounting": "^0.4.1",
    "auto-drawing": "0.1.1",
    "axios": "^1.1.2",
    "browserslist": "^4.21.4",
    "crypto-js": "^4.1.1",
    "dayjs": "^1.11.5",
    "element-plus": "^2.2.15",
    "file-saver": "^2.0.5",
    "good-storage": "^1.1.1",
    "js-cookie": "^3.0.1",
    "js-md5": "^0.7.3",
    "jsencrypt": "^3.2.0",
    "lodash-es": "^4.17.21",
    "mqtt": "4.0.1",
    "normalize.css": "^8.0.1",
    "nprogress": "^0.2.0",
    "number-precision": "^1.6.0",
    "numeral": "^2.0.6",
    "qs": "^6.11.0",
    "typescript": "^4.8.4",
    "uuid": "^9.0.0",
    "vue": "^3.2.40",
    "vue-cropperjs": "^5.0.0",
    "vue-i18n": "^9.2.2",
    "vue-router": "^4.1.5",
    "vuex": "^4.0.2"
  },
  "devDependencies": {
    "@babel/plugin-syntax-jsx": "^7.16.7",
    "@babel/preset-env": "^7.14.1",
    "@babel/preset-react": "^7.14.5",
    "@commitlint/cli": "^17.0.3",
    "@commitlint/config-conventional": "^17.0.3",
    "@cypress/vite-dev-server": "^2.2.2",
    "@cypress/vue": "^3.1.0",
    "@rollup/plugin-eslint": "^8.0.1",
    "@testing-library/jest-dom": "^5.12.0",
    "@types/accounting": "^0.4.1",
    "@types/crypto-js": "^4.0.2",
    "@types/file-saver": "^2.0.5",
    "@types/good-storage": "^1.1.0",
    "@types/jest": "^26.0.23",
    "@types/js-cookie": "^2.2.6",
    "@types/js-md5": "^0.4.2",
    "@types/lodash-es": "^4.17.4",
    "@types/node": "^14.14.37",
    "@types/nprogress": "^0.2.0",
    "@types/numeral": "^2.0.1",
    "@types/qs": "^6.9.6",
    "@types/uuid": "^8.3.1",
    "@types/vue-cropperjs": "^4.1.1",
    "@types/ws": "^8.5.2",
    "@typescript-eslint/eslint-plugin": "^5.40.0",
    "@typescript-eslint/parser": "^5.40.0",
    "@vitejs/plugin-legacy": "^2.2.0",
    "@vitejs/plugin-vue": "^3.1.2",
    "@vitejs/plugin-vue-jsx": "^2.0.1",
    "@vue/compiler-sfc": "^3.2.40",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^11.0.2",
    "@vue/test-utils": "^2.1.0",
    "archiver": "^5.3.1",
    "autoprefixer": "^10.4.0",
    "babel-jest": "^27.5.1",
    "babel-plugin-transform-import-meta": "^2.0.0",
    "babel-preset-vite": "^1.0.4",
    "chalk": "4.1.2",
    "commitizen": "^4.2.5",
    "conventional-changelog": "^3.1.25",
    "conventional-changelog-cli": "^2.2.2",
    "cross-env": "^7.0.3",
    "cypress": "^9.2.0",
    "cz-conventional-changelog": "^3.3.0",
    "cz-customizable": "^6.9.1",
    "enquirer": "^2.3.6",
    "eslint": "^8.22.0",
    "eslint-config-standard": "^17.0.0",
    "eslint-define-config": "1.1.2",
    "eslint-plugin-cypress": "^2.12.1",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-jest": "^26.8.3",
    "eslint-plugin-node": "^11.1.0",
    "eslint-plugin-promise": "^6.0.0",
    "eslint-plugin-vue": "^9.6.0",
    "execa": "5.1.0",
    "husky": "^8.0.1",
    "jest": "^26.6.3",
    "jest-transform-stub": "^2.0.0",
    "lint-staged": "^13.0.3",
    "mockjs": "^1.1.0",
    "only-allow": "^1.1.1",
    "ora": "5.4.1",
    "postcss": "^8.4.5",
    "postcss-html": "^1.3.0",
    "postcss-import": "^14.0.2",
    "prettier": "^2.7.1",
    "rimraf": "^3.0.2",
    "rollup-plugin-visualizer": "^5.5.2",
    "sass": "^1.37.5",
    "semver": "^7.3.7",
    "stylelint": "^14.10.0",
    "stylelint-config-recommended-vue": "^1.4.0",
    "stylelint-config-sass-guidelines": "^9.0.1",
    "stylelint-config-standard": "^27.0.0",
    "stylelint-config-standard-scss": "^5.0.0",
    "stylelint-order": "^5.0.0",
    "stylelint-scss": "^4.3.0",
    "terser": "^5.14.2",
    "ts-jest": "^26.5.6",
    "unplugin-auto-import": "^0.11.1",
    "unplugin-vue-components": "^0.22.4",
    "unplugin-vue-define-options": "^0.12.0",
    "vite": "^3.1.7",
    "vite-jest": "^0.1.4",
    "vite-plugin-banner": "^0.5.0",
    "vite-plugin-compression": "^0.5.1",
    "vite-plugin-html": "^3.2.0",
    "vite-plugin-mock": "^2.9.6",
    "vite-plugin-svg-icons": "^2.0.1",
    "vue-eslint-parser": "^9.1.0",
    "vue-jest": "^5.0.0-alpha.7",
    "vue-tsc": "^1.0.7",
    "xml2js": "^0.4.23"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-customizable"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx,vue}": ["npm run lint"],
    "src/**/*.{vue,css,less,sass,scss}": ["npm run stylelint"]
  },
  "resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
  },
  "engines": {
    "node": ">=14.18",
    "yarn": "=1.x"
  }
}
```
