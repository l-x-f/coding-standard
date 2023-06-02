# JavaScript 规范

**不需要记住每一条，但是需要熟悉，规范中绝大部分采用 `eslint`和`prettier` 配置对应规则强制统一，其他好的代码习惯则需要记住。**

## 缩进

缩进使用 2 个空格； 不要混用 `tab` 和 `space`。

## 分号

统一不加分号， 影响到 JS 语句执行的特殊的语句除外。

例如下面的特殊的语句

```js
const lang = {
  More: '更多'
}
;(window as any).Editor.setLanguage('zh-CN', lang)
```

## 单行长度

一般不要超过 80 。

## 空格

以下几种情况需要空格：

- 二元运算符前后
- 三元运算符`?:`前后
- 代码块`{`前
- 下列关键字前：`else`, `while`, `catch`, `finally`
- 下列关键字后：`if`, `else`, `for`, `while`, `do`, `switch`, `case`, `try`, `catch`, `finally`, `with`, `return`, `typeof`
- 单行注释`//`后（若单行注释和代码同行，则`//`前也需要），多行注释`/*`后
- 对象的属性值前
- for 循环，分号后留有一个空格，前置条件如果有多个，逗号后留一个空格
- 无论是函数声明还是函数表达式，`{`前一定要有空格
- 函数的参数之间

## 空行

以下几种情况需要空行：

- 变量声明后（当变量声明在代码块的最后一行时，则无需空行）
- 注释前（当注释在代码块的第一行时，则无需空行）
- 代码块后（在函数调用、数组、对象中则无需空行）
- 文件最后保留一个空行

## 换行

换行符统一用`LF`；以下几种情况需要换行：

- 代码块`{`后和`}`前
- 变量赋值后

## 引号

最外层统一使用单引号。

```js
var y = 'foo',
  z = '<div id="test"></div>'
```

## 变量命名

变量命名使用有意义，可读性好的变量名，尽量使用变量名自解释，尽量使用易检索名称。

- 标准变量采用驼峰式命名
- 常量全大写，用下划线连接
- 构造函数和类，大写第一个字母
- 私有变量，一般用`_` 单个下划线开头
- 特殊命名
  `ID`，`URL` 在变量名中全大写 ，
  `Android`在变量名中大写第一个字母，
  `iOS`在变量名中小写第一个，大写后两个字母。

```js
const thisIsMyName = 'xi'
const goodID = '151654156156'
const reportURL = 'https://wwww.xx.com'
const AndroidVersion = 'V1.0.0'
const iOSVersion = 'V1.0.0'

const MAX_COUNT = 10

function Person(name) {
  this.name = name
}

class Person {
  constructor(width, height) {
    this._width = width
    this._height = height
  }
}
```

## 变量声明

所有变量声明的时候优先使用 `const`，只有需要改变变量本身时才使用`let`，非必要情况下不要使用 `var` 来声明变量。

```js
const MAX_COUNT = 10

let a = 100
a = 200
```

## 数组、对象

- 对象属性名不需要加引号，（特殊变量除外）；
- 对象多个属性以缩进的形式书写，不要写在一行；
- 数组、对象最后不要有逗号；
- 操作数组对象时尽可能使用不改变源数据的方法；
- 操作复杂数组对象需要改变源数据时尽可能使用`深拷贝`；
- 操作数组对象时尽可能使用函数式编程，避免使用命令式的方法；

  例如： 删除对象属性 不要用 `delete `命令， 应该使用 `Reflect.deleteProperty()`

- 善于利用 ES6 Array 处理数组

  - `Array.find()`,`Array.forEach()`,`Array.filter()`,`Array.map()`,`Array.reduce()`等

  - 数组 `rest` 运算符

  - 多重判断时使用 `Array.includes`

  - 对 所有/部分 判断使用 `Array.every` & `Array.some`

- 善于利用 `ES6 Object` 和`Reflect`处理对象

  - 对象解构

  - `rest`

  - `Object.assign()` ,`Object.keys()`,`Object.values()`等

  - `Reflect.get()`,`Reflect.set()`,`Reflect.deleteProperty()` 等

```js
// 不推荐
;` 
const a = {
  'b': 1,
}
const b = [1, 2, 3, 1, 3,]
`

// 推荐
const c = {
  b: 1,
  c: 2
}
const d = {
  b: 1,
  c: 2,
  'a-d': 3
}
```

## 函数

- 函数名应明确表明其功能

- 函数应该只做一层抽象

- 函数功能的单一性

  这是软件功能中最重要的原则之一。 功能不单一的函数将导致难以重构、测试和理解。功能单一的函数易于重构，并使代码更加干净。

- 函数尽量是纯函数

  纯函数 (`Pure Function`) ，它必须符合两个条件：

  - 返回结果只依赖于它的参数。

  - 并且在执行过程里面没有副作用。

- 函数参数 (理想情况下应不超过 2 个)

  限制函数参数数量很有必要，这么做使得在测试函数时更加轻松。过多的参数将导致难以采用有效的测试用例对函数的各个参数进行测试。

  应避免三个以上参数的函数。通常情况下，参数超过两个意味着函数功能过于复杂，这时需要重新优化你的函数。当确实需要多个参数时，大多情况下可以考虑这些参数封装成一个对象。

  JS 定义对象非常方便，当需要多个参数时，可以使用一个对象进行替代。

- 更少的嵌套，尽早 return

- 使用默认参数和解构

- 尽量不要使用标记(Flag)作为函数参数

- 不要写全局函数

- 异步函数使用 `Async/Await` ，它是较 `Promises` 更好的选择

- 对 `Promises` 异步函数 进行 `try/catch` 错误处理

## 类

- 使用 `ES6` 的 `class` 而不是 `ES5` 的构造函数 `Function`

- 遵循 `SOLID` 原则

  S：单一职责原则（`SRP`） 每个类应该负责系统的单个部分或功能。

  O： 开闭原则 （`OSP`） 软件组件应该对扩展开放，而不是对修改开放。

  L： 里氏替换原则 （`LSP`） 超类的对象应该可以用其子类的对象替换而不破坏系统。

  I：接口隔离原则（`ISP`） 不应强迫客户端依赖于它不使用的方法。

  D：依赖倒置原则（`DIP`）高层模块不应该依赖低层模块，两者都应该依赖抽象。

## null

适用场景：

- 初始化一个将来可能被赋值为对象的变量
- 与已经初始化的变量做比较
- 作为一个参数为对象的函数的调用传参
- 作为一个返回对象的函数的返回值

不适用场景：

- 不要用 null 来判断函数调用时有无传参
- 不要与未初始化的变量做比较

```js
const a = null

if (a === null) {
}
```

## undefined

永远不要直接使用 `undefined` 进行变量判断；

使用 typeof 和字符串`undefined`对变量进行判断。

```js
// 不推荐
if (person === undefined) {
    ...
}

// 推荐
if (typeof person === 'undefined') {
    ...
}
```

## 注释

对存在一定业务逻辑复杂性的代码进行注释，对所有常量，所有函数，所有类进行注释。
注释并不是必须的，好的代码是能够让人一目了然，不用过多无谓的注释。

- 单行注释

  双斜线后，必须跟一个空格；缩进与下一行代码保持一致；可位于一个代码行的末尾，与代码间隔一个空格。

  ```js
  if (condition) {
    // if you made it here, then all security checks passed
    allowed()
  }
  ```

- 多行注释

  最少三行, `/*`后跟一个空格，具体参照下边的写法；

  建议在以下情况下使用：

  难于理解的代码段
  可能存在错误的代码段
  浏览器特殊的 `HACK` 代码
  业务逻辑强相关的代码

  ```js
  /*
   * 多行注释
   */
  const x = 1
  ```

- 文档注释

  各类标签 `@param`, `@method` 使用 [jsdoc](https://jsdoc.app/) 规范。

  建议在以下情况下使用：

  所有常量， 所有函数，所有类

  ```js
  /**
   * @func
   * @desc 一个带参数的函数
   * @param {string} a - 参数a
   * @param {number} b=1 - 参数b默认值为1
   * @param {string} c=1 - 参数c有两种支持的取值</br>1—表示x</br>2—表示xx
   * @param {object} d - 参数d为一个对象
   * @param {string} d.e - 参数d的e属性
   * @param {string} d.f - 参数d的f属性
   * @param {object[]} g - 参数g为一个对象数组
   * @param {string} g.h - 参数g数组中一项的h属性
   * @param {string} g.i - 参数g数组中一项的i属性
   * @param {string} [j] - 参数j是一个可选参数
   */
  function foo(a, b, c, d, g, j) {}
  ```

## 其他

- 判断相等时永远要用三等 `===`, 禁止用双等`==`。判断不相等时永远要用 `!==`, 禁止用双等`!=`；

- 对上下文 `this` 的引用只能使用`_this`, `that`, `self`其中一个来命名；

- 删除无效的代码。尽量不要在代码库中遗留被注释掉的代码。

- `for in` 里最好要有 `hasOwnProperty` 的判断；

  原因：如果给内置原型添加属性/方法，那么`for in`时也是可遍历的

  ```js
  class Top {
    constructor(age) {
      this.age = age
    }
  }
  Top.prototype.say = function () {}

  class Bottom extends Top {
    constructor(gender) {
      super()
      this.gender = gender
    }
  }
  Bottom.prototype.clone = function () {}
  const data = new Bottom()

  // 不推荐
  for (const key in data) {
    console.log(key) // age  gender  clone say
  }

  // 推荐
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      console.log(key) // age gender
    }
  }
  ```

- 不要在内置对象的原型上添加方法，如 `Array`,` Date`；

- 不要在内层作用域的代码里声明了变量，之后却访问到了外层作用域的同名变量；

- 变量不要先使用后声明；

- 不要在一句代码中单单使用构造函数，记得将其赋值给某个变量；

  ```js
  // 不推荐
  new Date()

  // 推荐
  const date = new Date()
  ```

- 不要在同个作用域下声明同名变量；

- 不要在一些不需要的地方加括号，例：`delete(a.b)`；

- 不要使用未声明的变量（全局变量需要加到`.eslint` 文件的 `globals` 属性里面）；

- 不要声明了变量却不使用；

- 不要在应该做比较的地方做赋值；

- debugger 不要出现在提交的代码里；

- 数组中不要存在空元素；

- 不要在循环内部声明函数；

- 不要像这样使用构造函数，例：`new function () { ... }` ` new Object`；

- 避免过度优化；

- `console.log`避免出现在生产环境中；
