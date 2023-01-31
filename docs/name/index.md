# 文件命名规范

## 命名规则

一般用小写英文 、 数字、 `- `这些字符，命名最好是通用英文，尽量不用或者少用拼音。

## 项目命名

全部采用小写方式， 以中划线分隔。

例：`element-plus`,`vue-router`, `ant-design`, `react-router`.

## 目录命名

全部采用小写方式， 以中划线分隔。有复数结构时，要采用复数命名法。
例：`scripts`, `styles`, `images`,`components`, `test-utils`, `theme-chalk`.

- 常用目录结构

根据实际项目需求增减对应的目录

```sh
.
├── README.md                           #项目简介
├── index.html                          #页面入口
├── mock                                #mock
├── package.json                        #package
├── public                              #静态资源（一般不需要构建工具处理的）
├── docs                                #文档
├── src                                 #核心源码
│   ├── api (services)                  #请求接口
│   ├── assets                          #图片字体等资源
│   ├── components                      #通用组件
│   ├── config                          #项目配置
│   ├── hooks                           #钩子函数
│   ├── icons                           #svg图标
│   ├── layout                          #页面布局
│   ├── locales                         #国际化配置
│   ├── plugins                         #插件
│   ├── router                          #路由
│   ├── store (models)                  #数据仓库
│   ├── styles                          #全局样式和样式变量
│   ├── utils                           #工具函数
│   └── views (pages)                   #业务页面
├── scripts                             #工作流脚本
├── tests                               #测试用例
│   ├── e2e                             #端到端测试
│   └── unit                            #单元测试
└── types (typings)                     #ts类型
```

## JS,TS 文件命名

全部采用小写方式， 以中划线分隔。或者全部用小驼峰。

例：`define-getter.js`,`composite-click.ts`。`scrollTo.js`,`resolveRoutes.ts`.

## CSS, SCSS,LESS 等样式文件命名

全部采用小写方式， 以中划线分隔。

例：`checkbox-button.scss`, `checkbox-group`,`dropdown-item.scss`, `dropdown-menu.scss`.

## HTML 文件命名

全部采用小写方式， 以中划线分隔。

例：`error-report.html`.

## 图片/视频/声音文件

全部采用小写方式， 以中划线分隔。

例：`logo-blue.png`.

## Components 组件

所有的 `Component` 文件都是以大写开头 (`PascalCase`)，这也是官方所推荐的。但除了 `index.vue`。

例：`@/components/BackToTop/index.vue`,`@/views/example/components/Button.vue`.

## Views 界面

在 views 文件下，代表路由的.vue 文件都使用横线连接 (kebab-case)，代表路由的文件夹也是使用同样的规则。

例：`@/views/svg-icons/index.vue`,`@/views/svg-icons/require-icons.js`

**使用横线连接 (kebab-case)来命名 views 主要是出于以下几个考虑。**

- 横线连接 (kebab-case) 也是 Vue 官方推荐的命名规范之一
- `views` 下的`.vue` 文件代表的是一个路由，所以它需要和 `component` 进行区分(`component` 都是大写开头)
- 页面的 `url` 也都是横线连接的，比如`https://www.xxx.admin/export-excel`，所以路由对应的`view`应该要保持统一
- 没有大小写敏感问题
