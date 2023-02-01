# prettier 配置

[prettier 官方文档](https://prettier.io/)

## 安装

`yarn`

```sh
yarn add prettier -D
```

## .prettierrc.js 配置

一般配置必要的，默认配置省略掉

```js
module.exports = {
  useTabs: false, // 使用空格代替tab缩进
  trailingComma: 'none', // 多行时尽可能打印尾随逗号
  tabWidth: 2, // 缩进长度
  semi: false, // 句末使用分号
  printWidth: 80, // 单行长度
  singleQuote: true, // 使用单引号
  jsxSingleQuote: false, // jsx中使用单引号
  bracketSpacing: true, // 在对象前后添加空格
  bracketSameLine: false, // 多属性html标签的‘>’折行放置
  arrowParens: 'avoid', // 单参数箭头函数参数周围使用圆括号
  endOfLine: 'auto' // 结束行形式
}
```

## .prettierignore 配置

一般配置

```
node_modules
dist
build
static/
assets
public
```

## 使用

`package.json` 里配置 `scripts`

```json
{
  "scripts": {
    "prettier": "prettier ./src/**/*.{js,jsx,ts,tsx,vue,css,less,sass,scss} --write"
  }
}
```

执行 `prettier` 脚本使用

```sh
yarn prettier
```
