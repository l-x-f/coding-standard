# TypeScript 规范

**TypeScript 规范继承 [JavaScript 规范](/docs/code/js/)，下面是其自己的特有的规范。**

## 简介

借用[Ant Design Pro](https://pro.ant.design/zh-CN/docs/type-script#ts-ignore)官网的一句话作为开头:

**TypeScript 毕竟是一个标注语言，在需要使用 any 的时候不必吝于使用 any，在遇到动态性比较强的代码，不妨使用 as unknown as XXX, 可以节省很多时间。**

解读： "`在需要使用 any 的时候不必吝于使用 any`" 这句话的意思是需要的地方，并不是程序中都是 `any`，那样就失去了 `ts` 的意义，所以实际开放中应该尽量减少 `any` 的出现。

`@ts-ignore`

有些时候类型错误是组件的，但是看起来非常难受。会一直编译报报错，这里就可以使用 `@ts-ignore` 来暂时忽略它。

```ts
// @ts-ignore
xxxx
```

## 命名规范

- 使用 `camelCase` 为属性或本地变量命名。
- 使用 `camelCase` 为函数命名。
- 使用 `PascalCase` 为类型命名。
- 不使用 `I` 做为接口名前缀。(根据自己团队习惯，大部分开源库都是不用，但是也有用的,如腾讯微信小程序的`IAnyObject`)
- 使用 `PascalCase` 为枚举值命名。
- 不要为私有属性名添加`_`前缀，使用 `private` 修辞符。
- 尽可能使用完整的单词拼写命名。

## 类型

- 不要导出类型/函数，除非你要在不同的组件中共享它。
- 不要在全局命名空间内定义类型/值。
- 共享的类型应该在 `types.ts` | `types/index.ts` 里定义。
- 在一个文件里，类型定义应该出现在顶部。

## 类型定义

- `type` 和 `interface` 根据它们适合的场景使用。

  - 优先使用`type`
  - 对于需要扩展的类型 使用 `interface` （`type`不可以重名）
  - 那往函数上挂载属性 使用 `interface` （`type`无法实现）

  ```ts
  type UnionType = string | number

  type MenuItem = {
    /**
     *  组件名称建议大驼峰命名， 和页面的name保持一致。
     *  名称用于页面缓存，必须保证每个路由的名称唯一
     */
    name: string
    /**
     * 页面路径
     */
    path: string
    /**
     * 排序，默认为0
     */
    sort?: number
    /**
     * 路由别称
     */
    alias?: string
    /**
     * 重定向
     */
    redirect?: string | { name: string }
    /**
     * 是否隐藏路由，默认false 不隐藏
     */
    hidden?: boolean
  }

  /* 需要扩展的类型*/
  // 来自vite 官方
  interface ImportMetaEnv {
    [key: string]: any
    BASE_URL: string
    MODE: string
    DEV: boolean
    PROD: boolean
    SSR: boolean
  }
  // 来自用户自定义的环境变量
  interface ImportMetaEnv {
    readonly VITE_APP_DEFAULT_TITLE: string
    readonly VITE_APP_BASE_API: string
  }

  // 为 Window 增加参数
  interface Window {
    APP_BASE_API: string
    APP_WS_BASE_API: string
    getEdit: () => void
  }

  /* 往函数上挂载属性   示例来自https://pro.ant.design/zh-CN/docs/type-script */
  interface FuncWithAttachment {
    (param: string): boolean
    someProperty: number
  }

  const testFunc: FuncWithAttachment = {}
  const result = testFunc('mike') // 有类型提醒
  testFunc.someProperty = 3 // 有类型提醒
  ```

- 类型定义的时候必须的属性放在可选的属性前面。
- 类型定义的越详细越好，最好有注释。
- 类型定义的时候应根据实际情况使用`typeScript`的高级类型 [见下文](/docs/code/ts/#高级类型)

## 基础类型变量

不需要手动声明类型。

```ts
const foo = 'foo'
const bar = 2
const baz = false
```

## 数组和元组

需要声明具体的类型

```ts
// 数组
interface Item {
  name: string
  age: number
}
const list: Item[] = []

// 元组
const list: [string, number] = ['name', 18]
```

## 对象

需要声明具体的类型

```ts
interface Item {
  name: string
  age: number
}
const item: Item = {
  name: 'xi',
  age: 18
}
```

## 函数

- 简单能推断出来的返回值类型不需要标注

  ```ts
  // 不推荐
  const searchClear = (): void => {
    console.log('clear')
  }

  // 推荐
  const searchClear = () => {
    console.log('clear')
  }
  ```

- 回调函数返回值类型

  - 不要为返回值被忽略的回调函数设置一个 `any` 类型的返回值类型：

    ```ts
    /* 不推荐 */
    function fn(x: () => any) {
      x()
    }

    // 应该给返回值被忽略的回调函数设置void类型的返回值类型：
    /* 推荐 */
    function fn(x: () => void) {
      x()
    }
    ```

  - 不要在回调函数里使用可选参数，除非这是你想要的

- 函数重载

  - 不要因回调函数的参数数量不同而编写不同的重载。

  ```ts
  // 不推荐
  declare function beforeAll(action: () => void, timeout?: number): void
  declare function beforeAll(
    action: (done: DoneFn) => void,
    timeout?: number
  ): void

  // 应该只为最大数量参数的情况编写一个重载：
  // 推荐
  declare function beforeAll(
    action: (done: DoneFn) => void,
    timeout?: number
  ): void
  ```

  - 不要因为只有末尾参数不同而编写不同的重载
  - 不要仅因某个特定位置上的参数类型不同而定义重载，应该尽可能地使用联合类型：

  ```ts
  // 不推荐
  interface Moment {
    utcOffset(): number
    utcOffset(b: number): Moment
    utcOffset(b: string): Moment
  }

  // 应该尽可能地使用联合类型：
  // 推荐
  interface Moment {
    utcOffset(): number
    utcOffset(b: number | string): Moment
  }
  ```

## 类

类成员声明时除了 public 成员，其余成员都应该显式加上作用域修辞符。

## null 和 undefined：

使用 `undefined`，不要使用 `null`。

## 泛型

业务代码中开发尽量少的写自定义的泛型，更多的是去使用（组件）库已经定义好的泛型。

```ts
import { ref } from 'vue'
import type { FormInstance, ComponentSize, UploadFile } from 'element-plus'
import type { CSSProperties } from 'vue'

const formInstance = ref<FormInstance>()
const headerCellStyle: CSSProperties = {}
const fileList: UploadFile[] = []
```

## 高级类型

所谓高级类型，是 `typescript` 为了保证语言的灵活性，所使用的语言特性。这些特性有助于我们应对复杂多变的开发场景。

- 高级类型
  - 交叉类型 `T & U` 其返回类型既要符合 T 类型也要符合 U 类型
  - 联合类型 `T | U` 其返回类型为连接的多个类型中的任意一个
- 关键字

  - 类型约束 `T extends K` 这里的 extends 不是类、接口的继承，而是对于类型的判断和约束，意思是判断 T 能否赋值给 K
  - 类型映射 `in` 和索引类型查询操作符 `keyof `

    ```ts
    interface Person {
      name: string
      age: number
      gender: number
    }

    // 将 T 的所有属性转换为只读类型
    type ReadOnlyType<T> = {
      readonly [P in keyof T]: T[P]
    }

    // type ReadOnlyPerson = {
    //     readonly name: string;
    //     readonly age: number;
    //     readonly gender: number;
    // }
    type ReadOnlyPerson = ReadOnlyType<Person>

    type PersonProps = keyof Person // 'name' | 'age' |'gender'
    ```

  - 类型谓词 `is` `parameterName is Type` 使用场景有限不建议使用

    ```ts
    class Bird {
      fly() {
        console.log('Bird flying')
      }
      layEggs() {
        console.log('Bird layEggs')
      }
    }

    class Fish {
      swim() {
        console.log('Fish swimming')
      }
      layEggs() {
        console.log('Fish layEggs')
      }
    }

    function isBird(bird: Bird | Fish): bird is Bird {
      return !!(bird as Bird).fly
    }

    function start(pet: Bird | Fish) {
      // 调用 layEggs 没问题，因为 Bird 或者 Fish 都有 layEggs 方法
      pet.layEggs()

      if (isBird(pet)) {
        pet.fly()
      } else {
        pet.swim()
      }
    }
    ```

  - 待推断类型 `infer`
    ```ts
    type ParamType<T> = T extends (param: infer P) => any ? P : T
    ```
  - 原始类型保护`typeof`
  - 类型保护 `instanceof`

- 映射类型

  - 只读类型`Readonly<T>`
  - 只读数组`ReadonlyArray<T>` `ReadonlyArray` 类型和 `Array` 类型很相似，但它是一个特殊的类型，用于生成不应该被更改的数组。

  ```ts
  interface User {
    name: string
  }

  const userList: ReadonlyArray<User> = [{ name: 'foo' }, { name: 'bar' }]

  // 会报错：
  // userList.push({ name: 'dar' })

  // 但是内部元素如果是引用类型，元素自身是可以进行修改的
  userList[0].name = 'dar'

  const str: ReadonlyArray<string> = ['0', '1', '2']
  // 可以简写为
  const str: readonly string[] = ['0', '1', '2']
  ```

  - 可选类型`Partial<T>` 类型都变成可选的
  - 必选类型`Required<T>` 和 `Partial` 的作用相反
  - 提取属性`Pick<T, key>` 从 `T` 类型中提取部分属性，作为新的返回类型。
  - 排除属性`Omit<T, key>` 和 `Pick` 作用相反，用于从 `T` 类型中，排除部分属性
  - 摘取类型`Extract<T, U>`
  - 排除类型`Exclude<T, U>`
  - 属性映射`Record<K, T>`
  - 不可为空类型`NonNullable<T>`
  - 构造函数参数类型`ConstructorParameters<typeof T>`
  - 函数参数类型`Parameters<T>`
  - 函数返回值类型`ReturnType<T>`
  - 实例类型`InstanceType<T>`

## 断言

- 建议使用 `as` 不要使用 `<>`

  ```ts
  const getStrLength = (target: string | number): number => {
    if ((<string>target).length) {
      //  这种形式在JSX代码中不可以使用，而且也是TSLint不建议的写法
      return (target as string).length // 这种形式是没有任何问题的写法，所以建议大家始终使用这种形式
    } else {
      return target.toString().length
    }
  }
  ```

- 尽量不使用非空断言操作符 `!`，语句末尾除外。

## 注释

为函数，接口，枚举类型和类使用 [TSDoc](https://tsdoc.org) 风格的注释。

## tsconfig.json

`compilerOptions.strict` 一定要设置为`true` ，这样使用 `TypeScript` 才更有意义。

```json
{
  "compilerOptions": {
    "target": "esnext",
    "module": "esnext",
    "moduleResolution": "node",
    "strict": true,
    "jsx": "preserve",
    "sourceMap": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "lib": ["esnext", "dom"],
    "types": [],
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    },
    "skipLibCheck": true
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```
