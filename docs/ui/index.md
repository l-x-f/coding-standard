# UI 规范

## 视觉稿

- 开发 `PC` 项目时， 画布大小为` 1920 * 1080`

- 开发 `h5` 和小程序时设计师可以用 `iPhone6` 作为视觉稿的标准，画布大小为 `375 * 667`

## 字体

采用 [Ant Design](https://ant.design/docs/spec/font-cn) 标准

```
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
  'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
  'Noto Color Emoji';
```

## 字号和行高

- `pc` 采用 [Ant Design](https://ant.design/docs/spec/font-cn) 标准

  - `字号`

    12 14 16 24 30 38 46 56 68 (px)

  - `行高`

    20 22 24 28 38 46 54 64 76 (px)

- 移动端 采用 [微信小程序设计](https://developers.weixin.qq.com/miniprogram/design/) 标准

  - `字号`

    24 28 30 34 44 (rpx)

## 留白

- 网页留白

  利用 `8` 的倍数来规定页面中元素（按钮、输入框、图片等）的尺寸及各自间距的大小。
  即任何需要自定义的长、宽，`margin` 和 `padding` 都应该是 `8` 的倍数。

- 组件留白

  表格的外边间距用 `16px`，其他组件 `8px`。

## 色彩

色彩在使用时更多的是基于信息传递、操作引导和交互反馈等目的。在不破坏操作效率，影响信息的清晰传达的这些原则之上，理性的选择颜色是关键
