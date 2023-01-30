# HTML 规范

## 标签大小写

所有标签统一小写。

## 语法

- 缩进使用 2 个空格；
- 嵌套的节点应该缩进；
- 在属性上，使用双引号，不要使用单引号；
- 属性名全小写，用中划线做分隔符；
- 不要忽略可选的关闭标签，例：`</li>` 和 `</body>`。

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <img src="images/company_logo.png" alt="Company" />

    <h1 class="hello-world">Hello, world!</h1>
  </body>
</html>
```

## HTML5 doctype 和 HTML lang 属性

- 在页面开头使用这个简单地 `doctype` 来启用标准模式，使其在每个浏览器中尽可能一致的展现；虽然 `doctype` 不区分大小写，但是按照惯例，`doctype` 大写。

```html
<!DOCTYPE html>
<html>
  ...
</html>
```

- `lang` 属性
  根据 `HTML5` 规范应在 html 标签上加上 `lang` 属性。这会给语音工具和翻译工具帮助，告诉它们应当怎么去发音和翻译。

```html
<!DOCTYPE html>
<html lang="en-us">
  ...
</html>
```

## 必要的 meta

- 字符编码. 通过声明一个明确的字符编码，让浏览器轻松、快速的确定适合网页内容的渲染方式，通常指定为`UTF-8`。

```html
<meta charset="UTF-8" />
```

- 合理的 `title`、`description`、`keywords`保证`SEO`.

```html
<meta
  name="description"
  content="全球领先的中文搜索引擎、致力于让网民更便捷地获取信息，找到所求。百度超过千亿的中文网页数据库，可以瞬间找到相关的搜索结果。"
/>
<title>百度一下，你就知道</title>
```

- `h5`需要设置`viewport`以保证适配.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

## 引入 CSS, JS

- 根据 `HTML5` 规范, 通常在引入 `CSS` 和 `JS` 时不需要指明 `type`，因为 `text/css` 和 `text/javascript` 分别是他们的默认值。

```html
<link rel="stylesheet" href="code-guide.css" />
<style>
  ...;
</style>

<script src="code-guide.js"></script>
<script>
  ...
</script>
```

- 协议

嵌入式资源书写省略协议头

省略图像、媒体文件、样式表和脚本等 URL 协议头部声明 ( http: , https: )。**如果不是这两个声明的 URL 则不省略**。

省略协议声明，使 URL 成相对地址，防止内容混淆问题和导致小文件重复下载。

```html
<!-- 不推荐 -->
<script src="http://www.google.com/js/gweb/analytics/autotrack.js"></script>
<!-- 推荐 -->
<script src="//www.google.com/js/gweb/analytics/autotrack.js"></script>

<style>
  /* 不推荐 */
  .example {
    background: url(http://www.google.com/images/example);
  }
  /* 推荐 */
  .example {
    background: url(//www.google.com/images/example);
  }
</style>
```

## 属性顺序

属性应该按照特定的顺序出现以保证易读性；

- `id`
- `class`
- `name`
- `data-\*`
- `src`, `for`, `type`, `href`, `value` , `max-length`, `max`, `min`, `pattern`
- `placeholder`, `title`, `alt`
- `aria-\*`, `role`
- `required`, `readonly`, `disabled`

```html
<a class="..." id="..." data-modal="toggle" href="#">Example link</a>

<input class="form-control" type="text" />

<img src="..." alt="..." />
```

- boolean 属性

`boolean` 属性指不需要声明取值的属性，XHTML 需要每个属性声明取值，但是 HTML5 并不需要；`boolean` 属性的存在表示取值为 `true`，不存在则表示取值为` false`。

## JS 生成标签

在 JS 文件中生成标签让内容变得更难查找，更难编辑，性能更差。应该尽量避免这种情况的出现。

类如这样的代码，应该尽量避免。

```js
const div = document.createElement('div')
div.innerText = 'app'
document.body.append(div)
```

## 减少标签数量

在编写 HTML 代码时，需要尽量避免多余的父节点；很多时候，需要通过迭代和重构来使 HTML 变得更少。

```html
<!-- 不推荐 -->
<span class="avatar">
  <img src="..." />
</span>

<!-- 推荐 -->
<img class="avatar" src="..." />
```

## HTML 语义化

尽量遵循 HTML 标准和语义，但是不应该以浪费实用性作为代价；任何时候都要用尽量小的复杂度和尽量少的标签来解决问题。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <header>
      头部标签
      <nav>
        导航标签
        <article>
          <section>块级标签</section>
        </article>
      </nav>
    </header>
    <main>主内容</main>
    <aside>
      侧边栏标签
      <footer>尾部标签</footer>
    </aside>
  </body>
</html>
```

## 多媒体后备方案

- 对于多媒体，如图像，视频，通过 canvas 读取的动画元素，确保提供备选方案。
- 对于图像使用有意义的备选文案（ `alt` ）。
- 对于视频和音频使用有效的副本和文案说明。

提供备选内容是很重要的，原因：给盲人用户以一些提示性的文字，用 `alt` 告诉他这图像是关于什么的，给可能没理解视频或音频的内容的用户以提示。

（图像的 `alt` 属性会产生冗余，如果使用图像只是为了不能立即用 `CSS` 而装饰的 ，就不需要用备选文案了，可以写 `alt=""` 。）

```html
<!-- 不推荐 -->
<img src="spreadsheet.png" />
<!-- 推荐 -->
<img src="spreadsheet.png" alt="电子表格截图" />
```

## 注释

尽可能的去解释你写的代码。
用注释来解释代码：它包括什么，它的目的是什么，它能做什么，为什么使用这个解决方案。（本规则可选，没必要每份代码都描述的很充分，它会增重 HTML 和 CSS 的代码。这取决于该项目的复杂程度。）
