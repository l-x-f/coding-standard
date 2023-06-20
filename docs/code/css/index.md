# CSS 规范

**不需要记住每一条，但是需要熟悉，实际项目采用 `stylelint`,`prettier` 配置对应规则强制统一。**

## 缩进和分号

- 缩进使用 2 个空格；
- 每个属性声明末尾都要加分号；

## 命名

- 类名使用小写字母，以中划线分隔，使用 `BEM` 命名规范，为 `ID` 和 `class` 取通用且有意义的名字且应尽量简短。

`Bem` 是块（`block`）、元素（`element`）、修饰符（`modifier`）的简写，由 `Yandex` 团队提出的一种前端 CSS 命名方法论。

`-` 中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。

`__` 双下划线：双下划线用来连接块和块的子元素

`_` 单下划线：单下划线用来描述一个块或者块的子元素的一种状态，更流行的是用 `--` 双中划线来表示，一般采用`--` 代替 `_`。

```html
<div class="el-scrollbar">
  <div class="el-scrollbar__wrap">
    <div class="el-scrollbar__view"></div>
    <div class="el-scrollbar__view--default"></div>
    <div class="el-scrollbar__view--primary"></div>
    <div class="el-scrollbar__view--success"></div>
  </div>
</div>
```

- `id` 采用驼峰式命名

- `scss` 中的变量、函数、混合、`placeholder` 采用驼峰式命名

## 空格

以下几种情况需要空格：

- 属性值前
- 选择器`>`, `+`, `~`前后
- `{`前
- !important `!`前
- 属性值中的`,`后
- 注释`/*`后和`*/`前

```css
.element {
  color: red !important;
  background-color: rgba(0, 0, 0, 0.5);
}

.element > .dialog {
  ...;
}

/* 注释 */
.element,
.dialog {
}
```

## 属性声明顺序

下面是推荐的属性的顺序。

```css
[
    [
        "display",
        "visibility",
        "float",
        "clear",
        "overflow",
        "overflow-x",
        "overflow-y",
        "clip",
        "zoom"
    ],
    [
        "table-layout",
        "empty-cells",
        "caption-side",
        "border-spacing",
        "border-collapse",
        "list-style",
        "list-style-position",
        "list-style-type",
        "list-style-image"
    ],
    [
        "-webkit-box-orient",
        "-webkit-box-direction",
        "-webkit-box-decoration-break",
        "-webkit-box-pack",
        "-webkit-box-align",
        "-webkit-box-flex"
    ],
    [
        "position",
        "top",
        "right",
        "bottom",
        "left",
        "z-index"
    ],
    [
        "margin",
        "margin-top",
        "margin-right",
        "margin-bottom",
        "margin-left",
        "-webkit-box-sizing",
        "-moz-box-sizing",
        "box-sizing",
        "border",
        "border-width",
        "border-style",
        "border-color",
        "border-top",
        "border-top-width",
        "border-top-style",
        "border-top-color",
        "border-right",
        "border-right-width",
        "border-right-style",
        "border-right-color",
        "border-bottom",
        "border-bottom-width",
        "border-bottom-style",
        "border-bottom-color",
        "border-left",
        "border-left-width",
        "border-left-style",
        "border-left-color",
        "-webkit-border-radius",
        "-moz-border-radius",
        "border-radius",
        "-webkit-border-top-left-radius",
        "-moz-border-radius-topleft",
        "border-top-left-radius",
        "-webkit-border-top-right-radius",
        "-moz-border-radius-topright",
        "border-top-right-radius",
        "-webkit-border-bottom-right-radius",
        "-moz-border-radius-bottomright",
        "border-bottom-right-radius",
        "-webkit-border-bottom-left-radius",
        "-moz-border-radius-bottomleft",
        "border-bottom-left-radius",
        "-webkit-border-image",
        "-moz-border-image",
        "-o-border-image",
        "border-image",
        "-webkit-border-image-source",
        "-moz-border-image-source",
        "-o-border-image-source",
        "border-image-source",
        "-webkit-border-image-slice",
        "-moz-border-image-slice",
        "-o-border-image-slice",
        "border-image-slice",
        "-webkit-border-image-width",
        "-moz-border-image-width",
        "-o-border-image-width",
        "border-image-width",
        "-webkit-border-image-outset",
        "-moz-border-image-outset",
        "-o-border-image-outset",
        "border-image-outset",
        "-webkit-border-image-repeat",
        "-moz-border-image-repeat",
        "-o-border-image-repeat",
        "border-image-repeat",
        "padding",
        "padding-top",
        "padding-right",
        "padding-bottom",
        "padding-left",
        "width",
        "min-width",
        "max-width",
        "height",
        "min-height",
        "max-height"
    ],
    [
        "font",
        "font-family",
        "font-size",
        "font-weight",
        "font-style",
        "font-variant",
        "font-size-adjust",
        "font-stretch",
        "font-effect",
        "font-emphasize",
        "font-emphasize-position",
        "font-emphasize-style",
        "font-smooth",
        "line-height",
        "text-align",
        "-webkit-text-align-last",
        "-moz-text-align-last",
        "-ms-text-align-last",
        "text-align-last",
        "vertical-align",
        "white-space",
        "text-decoration",
        "text-emphasis",
        "text-emphasis-color",
        "text-emphasis-style",
        "text-emphasis-position",
        "text-indent",
        "-ms-text-justify",
        "text-justify",
        "letter-spacing",
        "word-spacing",
        "-ms-writing-mode",
        "text-outline",
        "text-transform",
        "text-wrap",
        "-ms-text-overflow",
        "text-overflow",
        "text-overflow-ellipsis",
        "text-overflow-mode",
        "-ms-word-wrap",
        "word-wrap",
        "-ms-word-break",
        "word-break"
    ],
    [
        "color",
        "background",
        "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader",
        "background-color",
        "background-image",
        "background-repeat",
        "background-attachment",
        "background-position",
        "-ms-background-position-x",
        "background-position-x",
        "-ms-background-position-y",
        "background-position-y",
        "-webkit-background-clip",
        "-moz-background-clip",
        "background-clip",
        "background-origin",
        "-webkit-background-size",
        "-moz-background-size",
        "-o-background-size",
        "background-size"
    ],
    [
        "outline",
        "outline-width",
        "outline-style",
        "outline-color",
        "outline-offset",
        "opacity",
        "filter:progid:DXImageTransform.Microsoft.Alpha(Opacity",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.Alpha",
        "-ms-interpolation-mode",
        "-webkit-box-shadow",
        "-moz-box-shadow",
        "box-shadow",
        "filter:progid:DXImageTransform.Microsoft.gradient",
        "-ms-filter:\\'progid:DXImageTransform.Microsoft.gradient",
        "text-shadow"
    ],
    [
        "-webkit-transition",
        "-moz-transition",
        "-ms-transition",
        "-o-transition",
        "transition",
        "-webkit-transition-delay",
        "-moz-transition-delay",
        "-ms-transition-delay",
        "-o-transition-delay",
        "transition-delay",
        "-webkit-transition-timing-function",
        "-moz-transition-timing-function",
        "-ms-transition-timing-function",
        "-o-transition-timing-function",
        "transition-timing-function",
        "-webkit-transition-duration",
        "-moz-transition-duration",
        "-ms-transition-duration",
        "-o-transition-duration",
        "transition-duration",
        "-webkit-transition-property",
        "-moz-transition-property",
        "-ms-transition-property",
        "-o-transition-property",
        "transition-property",
        "-webkit-transform",
        "-moz-transform",
        "-ms-transform",
        "-o-transform",
        "transform",
        "-webkit-transform-origin",
        "-moz-transform-origin",
        "-ms-transform-origin",
        "-o-transform-origin",
        "transform-origin",
        "-webkit-animation",
        "-moz-animation",
        "-ms-animation",
        "-o-animation",
        "animation",
        "-webkit-animation-name",
        "-moz-animation-name",
        "-ms-animation-name",
        "-o-animation-name",
        "animation-name",
        "-webkit-animation-duration",
        "-moz-animation-duration",
        "-ms-animation-duration",
        "-o-animation-duration",
        "animation-duration",
        "-webkit-animation-play-state",
        "-moz-animation-play-state",
        "-ms-animation-play-state",
        "-o-animation-play-state",
        "animation-play-state",
        "-webkit-animation-timing-function",
        "-moz-animation-timing-function",
        "-ms-animation-timing-function",
        "-o-animation-timing-function",
        "animation-timing-function",
        "-webkit-animation-delay",
        "-moz-animation-delay",
        "-ms-animation-delay",
        "-o-animation-delay",
        "animation-delay",
        "-webkit-animation-iteration-count",
        "-moz-animation-iteration-count",
        "-ms-animation-iteration-count",
        "-o-animation-iteration-count",
        "animation-iteration-count",
        "-webkit-animation-direction",
        "-moz-animation-direction",
        "-ms-animation-direction",
        "-o-animation-direction",
        "animation-direction"
    ],
    [
        "content",
        "quotes",
        "counter-reset",
        "counter-increment",
        "resize",
        "cursor",
        "-webkit-user-select",
        "-moz-user-select",
        "-ms-user-select",
        "user-select",
        "nav-index",
        "nav-up",
        "nav-right",
        "nav-down",
        "nav-left",
        "-moz-tab-size",
        "-o-tab-size",
        "tab-size",
        "-webkit-hyphens",
        "-moz-hyphens",
        "hyphens",
        "pointer-events"
    ]
]
```

## 空行

以下几种情况需要空行：

- 文件最后保留一个空行
- `}`后最好跟一个空行，包括 scss 中嵌套的规则

## 颜色

颜色 16 进制用小写字母；颜色 16 进制尽量用简写。

```css
/* 不推荐 */
.element {
  color: ~#ABCDEF;
  background-color: #001122;
}

/* 推荐 */
.element {
  color: #abcdef;
  background-color: #012;
}
```

## 属性简写

写属性值的时候尽量使用缩写，常见的属性简写包括：

- `font`
- `background`
- `transition`
- `animation`

```css
/* 不推荐 */
.element {
  transition-delay: 2s;
  transition-timing-function: linear;
  transition-duration: 1s;
  transition-property: opacity;
}

/* 推荐 */
.element {
  transition: opacity 1s linear 2s;
}
```

## 媒体查询

尽量将媒体查询的规则靠近与他们相关的规则，不要将他们一起放到一个独立的样式文件中，或者丢在文档的最底部，这样做只会让大家以后更容易忘记他们。

```css
.element {
  ...;
}

.element-avatar {
  ...;
}

@media (min-width: 480px) {
  .element {
    ...;
  }

  .element-avatar {
    ...;
  }
}
```

## 引号

统一使用单引号；`url` 的内容要用引号；属性选择器中的属性值需要引号。

```css
element:after {
  content: '';
  background-image: url('logo.png');
}

li[data-type='single'] {
  ...;
}
```

## 注释

注释统一用`/* */`（`scss` 中也尽量少用`//`）

缩进与下一行代码保持一致；

可位于一个代码行的末尾，与代码间隔一个空格。

```css
/* 注释 */
.modal-header {
  ...;
}
```

## 其他

- 不允许有空的规则；

- 元素选择器用小写字母；

- 建议去掉小数点前面的 `0`；

- 去掉数字中不必要的小数点和末尾的` 0`；

- 属性值`0`后面不要加单位；

- 同个属性不同前缀的写法需要在垂直方向保持对齐；

- 无前缀的标准属性应该写在有前缀的属性后面；

- 不要在同个规则里出现重复的属性，如果重复的属性是连续的则没关系；

- 不要在一个文件里出现两个相同的规则；

- 用` border: 0;` 代替 `border: none;`；

- 选择器不要超过 **4** 层（在 `scss` 中如果超过 **4**层应该考虑用嵌套的方式来写）；

- 发布的代码中不要有 @import；

- 尽量少用`*`选择器。
