import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'

const resolve = (dir: string) => path.resolve(__dirname, dir)

const blob = fs.readFileSync(resolve('./theme/svg/blog.svg'), 'utf-8')

const items = [
  {
    text: 'HTML规范',
    link: '/docs/code/html/'
  },
  {
    text: 'CSS规范',
    link: '/docs/code/css/'
  },
  {
    text: 'JavaScript规范',
    link: '/docs/code/js/'
  },
  {
    text: 'TypeScript规范',
    link: '/docs/code/ts/'
  },
  {
    text: 'Vue规范',
    link: '/docs/code/vue/'
  }
]

const keywords =
  'Web 前端代码规范，HTML规范，CSS规范，JavaScript规范，TypeScript规范，Vue规范，文件命名规范，Git规范，UI规范'

export default defineConfig({
  base: '/coding-standard/',
  title: 'Web前端代码规范',
  lang: 'zh-CN',
  description: 'Web前端代码规范',
  head: [
    ['meta', { name: 'author', content: 'xiaofei' }],
    [
      'meta',
      {
        name: 'keywords',
        content: keywords
      }
    ],
    [
      'meta',
      {
        name: 'description',
        content: keywords
      }
    ],
    [
      'meta',
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      }
    ],
    ['link', { rel: 'icon', href: '/coding-standard/ico.png' }],
    ['script', { src: '/coding-standard/hm.js' }]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '返回顶部',
    outlineTitle: '本页导航',
    lastUpdatedText: '上次更新时间',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/l-x-f/coding-standard' },
      {
        icon: { svg: blob },
        link: 'https://l-x-f.github.io'
      }
    ],
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '文件命名规范',
        link: '/docs/name/'
      },
      {
        text: '前端代码规范',
        items: [
          ...items,
          {
            text: '代码规范实战',
            link: '/docs/code/actual-combat/prettier'
          }
        ]
      },
      {
        text: 'Git规范',
        link: '/docs/git/'
      },
      {
        text: 'UI规范',
        link: '/docs/ui/'
      },
      {
        text: '友情链接',
        items: [
          {
            text: '腾讯代码规范',
            link: 'https://alloyteam.github.io/CodeGuide/'
          },
          {
            text: 'Google HTML/CSS代码风格指南',
            link: 'http://iischajn.github.io/trans/htmlcss-guide/'
          },
          {
            text: 'JavaScript代码整洁之道',
            link: 'https://github.com/alivebao/clean-code-js'
          },
          {
            text: 'Vue风格指南',
            link: 'https://v2.cn.vuejs.org/v2/style-guide/'
          },
          {
            text: 'Ant Design设计规范',
            link: 'https://ant.design/docs/spec/introduce-cn'
          },
          {
            text: '微信小程序设计规范',
            link: 'https://developers.weixin.qq.com/miniprogram/design/'
          }
        ]
      }
    ],
    sidebar: {
      '/docs/code/': [
        {
          text: '代码规范',
          items: [...items]
        },
        {
          text: '代码规范实战',
          items: [
            {
              text: 'editorconfig配置',
              link: '/docs/code/actual-combat/editorconfig'
            },
            {
              text: 'prettier配置',
              link: '/docs/code/actual-combat/prettier'
            },
            {
              text: 'stylelint配置',
              link: '/docs/code/actual-combat/stylelint'
            },
            {
              text: 'eslint配置',
              link: '/docs/code/actual-combat/eslint'
            },
            {
              text: 'git hooks 的添加',
              link: '/docs/code/actual-combat/git-hooks'
            }
          ]
        }
      ]
    },
    footer: {
      message: 'MIT Licensed.',
      copyright: 'Copyright © 2019-present xiaofei'
    }
  },
  markdown: {
    lineNumbers: true
  }
})
