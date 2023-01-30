# Vue 规范

## 简介

- 文中标记 `vue 2`的是 `vue 2` 需要注意的
- 文中标记 `vue 3`的是 `vue 3` 需要注意的
- 没有标记的是`vue 2`和`vue 3` 通用的

## 文件命名

参考上一页 [文件命名规范](/docs/name/)

## Vue 组件顶级标签顺序

顺序保持一致，且标签之间留有空行。

```html
<template>
  <div></div>
</template>

<script>
  export default {}
</script>

<style>
  .app {
  }
</style>
```

## data 数据 `vue 2`

组件的 `data` 必须是一个函数,并且建议在此不使用箭头函数

## props `vue 2`

小驼峰命名。内容尽量详细，至少有类型和默认值，顺序是`type` `default`

对象和数组默认值不要使用 `[]` `{}` 应该使用函数 `() => []` `() => ({})`

```js
export default {
  props: {
    // 不推荐
    'greeting-text': Object,

    // 推荐
    greetingText: { type: Object, default: () => ({}) }
  }
}
```

## props `vue 3`

`setup` 语法中建议的写法

```js
const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  readonly: {
    type: Boolean,
    default: false
  }
})
```

`setup` `ts` 语法中建议的写法

```ts
interface IProps {
  content?: string
}

const props = withDefaults(defineProps<IProps>(), {
  content: ''
})
```

## 为 v-for 设置键值 key

在组件上总是必须用 `key` 配合 `v-for`

## 避免 v-if 和 v-for 用在一起

永远不要把 `v-if` 和 `v-for` 同时用在同一个元素上。

## 避免 v-if 中使用不严格等号

`v-if` 中判断永远使用严格相等， 用`===`代替`==`， 代替`!==`代替`!=`。

```html
<!-- 不推荐 -->
<div v-if='isData == "data"'></div>

<!-- 推荐 -->
<div v-if='isData === "data"'></div>
```

## 模板中简单的表达式

组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法。

```js
// 不推荐
{{
  fullName.split(' ').map(function (word) {
    return word[0].toUpperCase() + word.slice(1)
  }).join(' ')
}}

// 推荐
// <!-- 在模板中 -->
{{ normalizedFullName }}

// 复杂表达式已经移入一个计算属性
computed: {
  normalizedFullName: function () {
    return this.fullName.split(' ').map(function (word) {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
  }
}
```

## 简单的计算属性

应该把复杂计算属性分割为尽可能多的更简单的 property。

```js
export default {
  // 不推荐
  computed: {
    price: function () {
      var basePrice = this.manufactureCost / (1 - this.profitMargin)
      return basePrice - basePrice * (this.discountPercent || 0)
    }
  },

  // 推荐
  computed: {
    basePrice: function () {
      return this.manufactureCost / (1 - this.profitMargin)
    },
    discount: function () {
      return this.basePrice * (this.discountPercent || 0)
    },
    finalPrice: function () {
      return this.basePrice - this.discount
    }
  }
}
```

## 在 v-if/v-else-if/v-else 中使用 key

如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 `<div>` 元素)。

```html
<!-- 不推荐 -->
<div v-if="error">错误：{{ error }}</div>
<div v-else>{{ results }}</div>

<!-- 推荐 -->
<div v-if="error" key="search-status">错误：{{ error }}</div>
<div v-else key="search-results">{{ results }}</div>
```

## 为组件样式设置作用域

对于应用来说，顶级 `App` 组件和布局组件中的样式可以是全局的，但是其它所有组件都应该是有作用域的。

```html
<!-- 不推荐 -->
<template>
  <button class="btn btn-close">X</button>
</template>

<style>
  .btn-close {
    background-color: red;
  }
</style>

<!-- 推荐 -->
<template>
  <button class="button button-close">X</button>
</template>

<!-- 使用 `scoped` attribute -->
<style scoped>
  .button {
    border: none;
    border-radius: 2px;
  }

  .button-close {
    background-color: red;
  }
</style>
```

## 组件文件强烈推荐

只要有能够拼接文件的构建系统，就把每个组件单独分成文件。

## 组件名为多个单词

组件名应该始终是多个单词的，根组件 `App` 以及 `<transition>`、`<component>` 之类的 `Vue` 内置组件除外。

## 紧密耦合的组件命名

和父组件紧密耦合的子组件应该以父组件名作为前缀命名

```sh
# 不推荐
components/
|- TodoList.vue
|- TodoItem.vue
|- TodoButton.vue

# 推荐
components/
|- TodoList.vue
|- TodoListItem.vue
|- TodoListItemButton.vue

```

## 自闭合组件

在单文件组件、字符串模板和 `JSX` 中没有内容的组件应该是自闭合的——但在 DOM 模板里永远不要这样做。

```html
<!-- 不推荐 -->
<custom-input></custom-input>

<!-- 推荐 -->
<CustomInput />
```

## 组件名称

为每一个组件起一个独有的名称，名称采用`PascalCase` 命名。

```js
export default {
  name: 'AppTable'
}
```

## 指令缩写

- 用`:` 表示 `v-bind`
- 用 `@`表示 `v-on`
- 用 `#` 表示 `v-slot`

## 组件属性顺序和分行规则

这是我们推荐的组件选项默认顺序。它们被划分为几大类，所以你也能知道从插件里添加的新 `property` 应该放到哪里。

分行规则：放在一行，重要内容较多时，可放置 2 ～ 3 行。

- 1. 定义 (提供组件的选项)

  `is`

- 2. 列表渲染 (创建多个变化的相同元素)

  `v-for`

- 3. 条件渲染 (元素是否渲染/显示)

  `v-if`
  `v-else-if`
  `v-else`
  `v-show`
  `v-cloak`

- 4. 渲染方式 (改变元素的渲染方式)

  `v-pre`
  `v-once`

- 5. 全局感知 (需要超越组件的知识)

  `id`

- 6. 唯一的 `attribute` (需要唯一值的 `attribute`)

  `ref`
  `key`

- 7. 双向绑定 (把绑定和事件结合起来)

  `v-model`

- 8. 其它 `attribute` (所有普通的绑定或未绑定的 `attribute`)

- 9. 事件 (组件事件监听器)

  `v-on`

- 10. 内容 (覆写元素的内容)

  `v-html`
  `v-text`

## 组件/实例的选项的顺序 `vue 2`

```js
export default {
  // 1. 副作用 (触发组件外的影响)
  el: '#app',

  // 2.全局感知 (要求组件以外的知识)
  name: 'App',
  parent: '', // 指定已创建的实例之父实例，在两者之间建立父子关系。子实例可以用 this.$parent 访问父实例，子实例被推入父实例的 $children 数组中。

  // 3. 组件类型 (更改组件的类型)
  functional: false,

  // 4.模板修改器 (改变模板的编译方式)
  delimiters: ['{{', '}}'], // 改变纯文本插入分隔符。
  comments: false, // 当设为 true 时，将会保留且渲染模板中的 HTML 注释。默认行为是舍弃它们。

  // 5.模板依赖 (模板内使用的资源)
  components: {},
  directives: {},
  filters: {},

  // 6.组合 (向选项里合并 property)
  extends: {},
  mixins: [],

  // 7.接口 (组件的接口)
  inheritAttrs: true,
  model: {},
  provide: {}, //  inject
  props: {}, // 或者 propsData: {}

  // 8.本地状态 (本地的响应式 property)
  data() {},
  computed() {},

  // 9.事件 (通过响应式事件触发的回调)
  watch: {},

  // 生命周期钩子 (按照它们被调用的顺序)
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {},

  // 10. 非响应式的 property (不依赖响应系统的实例 property)
  methods: {},

  // 11.渲染 (组件输出的声明式描述)
  template: '', // 或者 render(h, err) {}
  renderError(h, err) {}
}
```

## 组件/实例的顺序 `vue 3`

`setup` `ts` 语法中建议的写法 （非 ts 项目忽略掉 1）

```ts
// 1. ts 类型
interface IState {
  msg: string
}

// 2. 遗留的选项
defineOptions({
  // 使用第三方插件unplugin-vue-define-options
  name: 'AppRule',
  inheritAttrs: true
})

// 3. inject
const mode = inject(ProvideKeys.mode) as Ref<string>

// 4. props
const props = withDefaults(defineProps<IProps>(), {
  content: ''
})

// 5. emit
const emit = defineEmits(['cancel', 'success'])

// 6. ref reactive
const appTable = ref()
const state = reactive<IState>({
  msg: ''
})

// 7. hooks
const router = useRouter()

// 8. computed
const hasMsg = computed(() => !!state.msg)

// 9. watch
watchEffect()
watchPostEffect()
watchSyncEffect()
watch()

// 10. 生命周期
onServerPrefetch()

onBeforeMount()
onMounted()

onBeforeUpdate()
onUpdated()

onActivated()
onDeactivated()

onBeforeUnmount()
onUnmounted()

onRenderTracked()
onRenderTriggered()
onErrorCaptured()

// 11. 方法
const getList = async () => {}
```

## import 引入顺序

同等类型的放一起，优先级如下

- 1. 优先放第三方的模块 如`vue` `lodash`
- 2. 然后放`@/` 下的 `components`，`hooks`，`utils` 等模块。
- 3. 最后放`./`或者`../`下的模块。

```js
// 不推荐
import Search, { DefaultQuery } from './search.vue'
import { computed, reactive, ref, nextTick, watch } from 'vue'
import { useTable, useSetTableHeight, useBase } from '@/hooks'
import AppTable, { defaultPageInfo } from '@/components/Table'
import type { ISearchData } from './search.vue'
import type { ITableConfigRaw, AppTableInstance } from '@/components/Table'
import { ElMessage } from 'element-plus'

// 推荐
import { computed, reactive, ref, nextTick, watch } from 'vue'
import { ElMessage } from 'element-plus'
import { useTable, useSetTableHeight, useBase } from '@/hooks'
import type { ITableConfigRaw, AppTableInstance } from '@/components/Table'
import AppTable, { defaultPageInfo } from '@/components/Table'
import type { ISearchData } from './search.vue'
import Search, { DefaultQuery } from './search.vue'
```
