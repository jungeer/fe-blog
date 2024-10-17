# Vue3 新特性

## 1. 什么是 Composition API？如何与 Options API 进行对比？
**答案**：Composition API 是 Vue 3 引入的一种新的组件逻辑组织方式，它允许我们按照逻辑关注点来组织代码。

主要区别：
1. 代码组织：Composition API 允许更灵活的代码组织，可以将相关的逻辑放在一起。
2. 逻辑复用：更容易提取和复用逻辑，不再需要 mixins。
3. 类型推导：对 TypeScript 的支持更好。
4. 打包优化：更好的 Tree-shaking 支持。

示例：
```javascript
// Options API
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}

// Composition API
import { ref } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const increment = () => {
      count.value++
    }

    return {
      count,
      increment
    }
  }
}
```

## 2. 如何使用 `ref` 和 `reactive` 创建响应式数据？
**答案**：
1. `ref` 用于创建基本类型的响应式数据：
```javascript
import { ref } from 'vue'

const count = ref(0)
console.log(count.value) // 0
count.value++
console.log(count.value) // 1
```

2. `reactive` 用于创建复杂类型的响应式数据：
```javascript
import { reactive } from 'vue'

const state = reactive({
  count: 0,
  list: []
})
console.log(state.count) // 0
state.count++
console.log(state.count) // 1
```

主要区别：
- `ref` 创建的数据需要通过 `.value` 访问和修改
- `reactive` 创建的数据可以直接访问和修改

## 3. Vue 3 中的 Teleport 是什么？如何使用？
**答案**：Teleport 是 Vue 3 新增的一个内置组件，它可以将一个组件内部的一部分模板"传送"到该组件的 DOM 结构外层的位置去。

使用示例：
```html
<template>
  <div>
    <h1>这是一个父组件</h1>
    <teleport to="body">
      <div class="modal">
        这是一个模态框
      </div>
    </teleport>
  </div>
</template>
```

在这个例子中，模态框会被渲染到 `<body>` 标签下，而不是当前组件的 DOM 结构中。这对于创建全局性的 UI 元素（如模态框）非常有用。

## 4. Vue 3 中的 Fragments 是什么？
**答案**：Fragments 允许组件有多个根节点。在 Vue 2 中，组件模板必须有一个单一的根节点，而在 Vue 3 中，这个限制被移除了。

示例：
```html
<template>
  <header>...</header>
  <main>...</main>
  <footer>...</footer>
</template>
```

这个特性简化了组件的结构，减少了不必要的包裹元素。

## 5. Vue 3 中的 Suspense 组件是什么？如何使用？
**答案**：Suspense 是 Vue 3 中的一个内置组件，用于协调对异步依赖的处理。它可以等待异步组件或异步操作完成，并在等待时显示后备内容。

使用示例：
```html
<Suspense>
  <template #default>
    <AsyncComponent />
  </template>
  <template #fallback>
    <div>Loading...</div>
  </template>
</Suspense>
```

在这个例子中，当 AsyncComponent 正在加载时，会显示 "Loading..."。一旦 AsyncComponent 加载完成，它就会替换掉后备内容。

## 6. Vue 3 的响应式系统相比 Vue 2 有什么改进？
**答案**：Vue 3 的响应式系统主要有以下改进：

1. 使用 Proxy 代替 Object.defineProperty：
   - 可以监听数组的变化
   - 可以监听对象属性的添加和删除

2. 更好的性能：
   - 懒观察（lazy observation）
   - 更细粒度的响应式追踪

3. 组合式 API：提供了更灵活的代码组织方式

4. 更好的 TypeScript 支持

5. 支持自定义渲染器，使得在不同平台上复用 Vue 的运行时变得更加容易

## 7. Vue 3 中的 `setup` 函数是什么？它在什么时候被调用？
**答案**：`setup` 函数是 Composition API 的入口点。它在组件被创建之前，props 被解析之后执行，所以它取代了 Vue 2 中的 `beforeCreate` 和 `created` 生命周期钩子。

`setup` 函数接收两个参数：
1. `props`：组件的 props
2. `context`：一个对象，包含了一些有用的属性（如 attrs, slots, emit）

示例：
```javascript
import { ref, onMounted } from 'vue'

export default {
  setup(props, context) {
    const count = ref(0)
    
    onMounted(() => {
      console.log('Component is mounted!')
    })

    return {
      count
    }
  }
}
```

## 8. Vue 3 中的 `watchEffect` 是什么？如何使用？
**答案**：`watchEffect` 是 Vue 3 中新增的一个响应式 API。它会立即执行一个函数，同时响应式地追踪其依赖，并在依赖更改时重新执行。

使用示例：
```javascript
import { ref, watchEffect } from 'vue'

const count = ref(0)

watchEffect(() => {
  console.log(`Count is: ${count.value}`)
})

// 会立即打印 "Count is: 0"

count.value++
// 会打印 "Count is: 1"
```

`watchEffect` 会自动追踪 `count.value` 作为依赖，当 `count.value` 改变时，回调函数会重新执行。

## 9. Vue 3 中的 `provide` 和 `inject` 有什么改进？
**答案**：在 Vue 3 中，`provide` 和 `inject` 可以在 Composition API 中使用，并且支持响应式数据。

使用示例：
```javascript
// 在父组件中
import { provide, ref } from 'vue'

export default {
  setup() {
    const theme = ref('dark')
    provide('theme', theme)

    return {
      theme
    }
  }
}

// 在子组件中
import { inject } from 'vue'

export default {
  setup() {
    const theme = inject('theme')

    return {
      theme
    }
  }
}
```

在这个例子中，如果父组件中的 `theme` 值改变，子组件会自动更新。

## 10. Vue 3 中的异步组件有什么变化？
**答案**：Vue 3 中的异步组件需要使用 `defineAsyncComponent` 方法来创建。这个方法提供了更多的选项来控制加载过程。

使用示例：
```javascript
import { defineAsyncComponent } from 'vue'

const AsyncComp = defineAsyncComponent({
  loader: () => import('./AsyncComponent.vue'),
  loadingComponent: LoadingComponent,
  errorComponent: ErrorComponent,
  delay: 200,
  timeout: 3000
})
```

这个 API 提供了更多的控制选项，如加载组件、错误组件、延迟显示加载组件的时间、超时时间等。

## 11. Vue 3 中的 `toRef` 和 `toRefs` 是什么？如何使用？
**答案**：`toRef` 和 `toRefs` 是 Vue 3 中用于创建响应式引用的工具函数。

1. `toRef` 用于为源响应式对象上的某个 property 新创建一个 ref：
```javascript
import { reactive, toRef } from 'vue'

const state = reactive({
  foo: 1,
  bar: 2
})

const fooRef = toRef(state, 'foo')

fooRef.value++
console.log(state.foo) // 2

state.foo++
console.log(fooRef.value) // 3
```

2. `toRefs` 将响应式对象转换为普通对象，其中结果对象的每个 property 都是指向原始对象相应 property 的 ref：
```javascript
import { reactive, toRefs } from 'vue'

const state = reactive({
  foo: 1,
  bar: 2
})

const stateAsRefs = toRefs(state)

state.foo++
console.log(stateAsRefs.foo.value) // 2

stateAsRefs.foo.value++
console.log(state.foo) // 3
```

这些函数在使用 Composition API 时特别有用，可以帮助我们在不丢失响应性的情况下解构响应式对象。

## 12. Vue 3 中的 `shallowRef` 和 `shallowReactive` 是什么？
**答案**：`shallowRef` 和 `shallowReactive` 是 Vue 3 中的浅层响应式 API。

1. `shallowRef` 创建一个 ref，其中内部值不会被深层次地转为响应式：
```javascript
import { shallowRef } from 'vue'

const state = shallowRef({ count: 1 })

// 不会触发更新
state.value.count = 2

// 会触发更新
state.value = { count: 2 }
```

2. `shallowReactive` 创建一个响应式代理，它跟踪其自身 property 的响应性，但不执行嵌套对象的深层响应式转换：
```javascript
import { shallowReactive } from 'vue'

const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 会触发更新
state.foo++

// 不会触发更新
state.nested.bar++
```

这些 API 在处理大型数据结构或外部库集成时特别有用，可以提高性能。

这些是 Vue 3 的一些关键新特性和改进。在实际应用中，这些新特性可以帮助我们写出更高效、更易维护的代码。
