# Vuex

## 1. 什么是 Vuex？它的核心概念是什么？
**答案**：Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

Vuex 的核心概念包括：
1. State：定义应用状态的数据结构，可以在这里设置默认的初始状态。
2. Getter：允许组件从 Store 中获取数据，可以认为是 store 的计算属性。
3. Mutation：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
4. Action：包含任意异步操作，通过提交 mutation 间接更变状态。
5. Module：允许将单一的 Store 拆分为多个 store 且同时保存在单一的状态树中。

## 2. Vuex 的 State 特性是什么？
**答案**：Vuex 使用单一状态树，用一个对象就包含了全部的应用层级状态。它作为一个"唯一数据源"而存在。这也意味着，每个应用将仅仅包含一个 store 实例。

特性：
1. 单一状态树让我们能够直接地定位任一特定的状态片段。
2. 在 Vue 组件中获得 Vuex 状态：在计算属性中返回某个状态。
3. 使用 mapState 辅助函数帮助我们生成计算属性。

示例：
```javascript
// 在单独构建的版本中辅助函数为 Vuex.mapState
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count',
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
}
```

## 3. Vuex 的 Getter 有什么作用？
**答案**：Vuex 允许我们在 store 中定义"getter"（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。

Getter 接受 state 作为其第一个参数，也可以接受其他 getter 作为第二个参数。

示例：
```javascript
const store = new Vuex.Store({
  state: {
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length
    }
  }
})
```

## 4. Vuex 的 Mutation 是什么？如何使用？
**答案**：更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的事件类型 (type) 和一个回调函数 (handler)。

特点：
1. Mutation 必须是同步函数。
2. 在组件中使用 this.$store.commit('xxx') 提交 mutation，或者使用 mapMutations 辅助函数将组件中的 methods 映射为 store.commit 调用。

示例：
```javascript
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// 调用
store.commit('increment')
```

## 5. Vuex 的 Action 有什么作用？与 Mutation 有什么区别？
**答案**：Action 类似于 mutation，不同在于：
1. Action 提交的是 mutation，而不是直接变更状态。
2. Action 可以包含任意异步操作。

主要区别：
- Mutation 必须是同步函数，而 Action 可以是异步的。
- Action 通过提交 Mutation 来修改状态，而不是直接修改状态。

示例：
```javascript
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync ({ commit }) {
      setTimeout(() => {
        commit('increment')
      }, 1000)
    }
  }
})
```

## 6. 什么是 Vuex 的模块（Module）？为什么要使用模块？
**答案**：由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块。

使用模块的好处：
1. 可以将复杂的应用状态管理分割成更小的模块。
2. 每个模块都有自己的命名空间，更容易管理和维护。
3. 可以动态注册模块。

示例：
```javascript
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})

store.state.a // -> moduleA 的状态
store.state.b // -> moduleB 的状态
```

## 7. 如何在 Vue 组件中使用 Vuex？
**答案**：在 Vue 组件中使用 Vuex 主要有以下几种方式：

1. 通过 computed 属性访问 state：
```javascript
computed: {
  count() {
    return this.$store.state.count
  }
}
```

2. 使用 mapState 辅助函数：
```javascript
import { mapState } from 'vuex'

export default {
  computed: mapState({
    count: state => state.count,
    countAlias: 'count'
  })
}
```

3. 使用 mapGetters 辅助函数：
```javascript
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter',
    ])
  }
}
```

4. 使用 mapMutations 辅助函数：
```javascript
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.commit('incrementBy', amount)`
    ])
  }
}
```

5. 使用 mapActions 辅助函数：
```javascript
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'increment', // 将 `this.increment()` 映射为 `this.$store.dispatch('increment')`
      'incrementBy' // 将 `this.incrementBy(amount)` 映射为 `this.$store.dispatch('incrementBy', amount)`
    ])
  }
}
```

## 8. Vuex 的严格模式是什么？
**答案**：在严格模式下，无论何时发生了状态变更且不是由 mutation 函数引起的，将会抛出错误。这能保证所有的状态变更都能被调试工具跟踪到。

开启严格模式：
```javascript
const store = new Vuex.Store({
  // ...
  strict: true
})
```

注意：
- 不要在生产环境下启用严格模式，因为严格模式会深度监测状态树来检测不合规的状态变更，会造成性能损失。
- 可以在开发环境下启用，生产环境下关闭：
```javascript
const store = new Vuex.Store({
  // ...
  strict: process.env.NODE_ENV !== 'production'
})
```

## 9. 如何在 Vuex 中处理异步操作？
**答案**：在 Vuex 中，我们主要通过 Action 来处理异步操作。Action 类似于 mutation，不同在于：
- Action 提交的是 mutation，而不是直接变更状态。
- Action 可以包含任意异步操作。

示例：
```javascript
actions: {
  incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
}
```

在组件中分发 Action：
```javascript
methods: {
  ...mapActions([
    'incrementAsync' // 将 `this.incrementAsync()` 映射为 `this.$store.dispatch('incrementAsync')`
  ]),
  ...mapActions({
    add: 'increment' // 将 `this.add()` 映射为 `this.$store.dispatch('increment')`
  })
}
```

## 10. Vuex 的插件是什么？如何使用？
**答案**：Vuex 的 store 接受 plugins 选项，这个选项暴露出每次 mutation 的钩子。Vuex 插件就是一个函数，它接收 store 作为唯一参数：

```javascript
const myPlugin = store => {
  // 当 store 初始化后���用
  store.subscribe((mutation, state) => {
    // 每次 mutation 之后调用
    // mutation 的格式为 { type, payload }
  })
}
```

使用插件：
```javascript
const store = new Vuex.Store({
  // ...
  plugins: [myPlugin]
})
```

插件常见的用途：
1. 持久化存储：比如将 state 保存到 localStorage。
2. 记录日志：比如记录每次状态变更。
3. 监控：比如报告状态变更。

示例（简单的日志插件）：
```javascript
const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation.type)
    console.log(mutation.payload)
  })
}
```

这些是关于 Vuex 的一些核心概念和使用方法。在实际应用中，Vuex 能够帮助我们更好地管理和维护应用的状态。
