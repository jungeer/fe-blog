# Vue 基础

## 1. Vue 的双向数据绑定原理是什么？
**答案**: Vue 的双向数据绑定主要通过数据劫持和发布-订阅模式实现。具体来说：

1. Vue 使用 Object.defineProperty（Vue 3 中使用 Proxy）来劫持数据的 getter 和 setter。
2. 当数据被访问时，getter 会收集依赖（即使用该数据的组件）。
3. 当数据被修改时，setter 会通知所有依赖进行更新。

**扩展**:
```javascript
// Vue 2.x 的简化实现
function observe(obj) {
  Object.keys(obj).forEach(key => {
    let internalValue = obj[key];
    Object.defineProperty(obj, key, {
      get() {
        console.log(`Getting ${key}: ${internalValue}`);
        return internalValue;
      },
      set(newValue) {
        console.log(`Setting ${key} to: ${newValue}`);
        internalValue = newValue;
      }
    });
  });
}

let data = { message: 'Hello' };
observe(data);
data.message; // 输出: Getting message: Hello
data.message = 'World'; // 输出: Setting message to: World
```

## 2. MVVM 模式是什么？
**答案**: MVVM 是 Model-View-ViewModel 的缩写，是一种软件架构���式：
- Model：代表数据模型，也可以在 Model 中定义数据修改和操作的业务逻辑。
- View：代表 UI 组件，它负责将数据模型转化成 UI 展现出来。
- ViewModel：监听模型数据的改变和控制视图行为、处理用户交互，简单理解就是一个同步 View 和 Model 的对象，连接 Model 和 View。

在 Vue 中，ViewModel 是 Vue 的实例对象。

## 3. Vue 的计算属性和侦听器（watcher）有何区别？
**答案**:
1. 计算属性：
   - 基于它们的响应式依赖进行缓存
   - 只在相关响应式依赖发生改变时它们才会重新求值
   - 应用于复杂逻辑的处理
2. 侦听器：
   - 更通用的方式来观察和响应 Vue 实例上的数据变动
   - 当需要在数据变化时执行异步或开销较大的操作时使用

计算属性适合用于简单的数据处理，而侦听器适合需要执行异步操作或较复杂逻辑的场景。

## 4. Vue 中 key 的作用是什么？
**答案**: 在 Vue 的虚拟 DOM 算法中，key 的主要作用是为了高效的更新虚拟 DOM。具体来说：
1. key 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。
2. 如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。
3. 使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。
4. 有相同父元素的子元素必须有独特的 key。重复的 key 会造成渲染错误。

## 5. v-if 和 v-show 的区别是什么？
**答案**:
1. v-if：
   - 真正的条件渲染，它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
   - 是"惰性的"：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
2. v-show：
   - 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
   - 有更高的初始渲染开销，但是切换开销很小。

一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。

## 6. Vue 中的 v-for 为什么要用 key？
**答案**: 在 v-for 中使用 key 主要有以下原因：
1. 帮助 Vue 跟踪每个节点的身份，从而重用和重新排序现有元素。
2. 提高渲染的效率：当数据项的顺序被改变时，Vue 将移动 DOM 元素来匹配数据项的顺序，而不是重新渲染整个列表。
3. 维护组件的���态：在列表渲染中，如果组件有状态，使用 key 可以确保组件的状态被正确地维护。

没有 key 的情况下，Vue 会尝试最小化元素的移动，并且尽可能地就地复用或修改现有的元素。这可能会导致一些意外的行为。

## 7. Vue 组件中 data 为什么必须是一个函数？
**答案**: 在 Vue 组件中，data 必须是一个函数，而不是一个对象。这是因为：
1. 组件可能被用来创建多个实例。如果 data 是一个对象，则所有的实例将共享引用同一个数据对象。
2. 通过提供 data 函数，每次创建一个新的实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。
3. 这样，每个组件实例都可以维护一份被返回对象的独立的拷贝，不会相互影响。

如果 data 是一个对象，那么所有的组件实例将共享同一个对象，造成数据污染。

## 8. Vue 的生命周期方法有哪些？
**答案**: Vue 2.x 的主要生命周期方法包括：
1. beforeCreate：实例初始化之后，数据观测和事件配置之前调用。
2. created：实例创建完成后调用，此时已完成数据观测、属性和方法的运算，但尚未开始 DOM 渲染。
3. beforeMount：在挂载开始之前被调用，相关的 render 函数首次被调���。
4. mounted：实例被挂载后调用，此时 el 被新创建的 vm.$el 替换了。
5. beforeUpdate：数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
6. updated：由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
7. beforeDestroy：实例销毁之前调用。在这一步，实例仍然完全可用。
8. destroyed：实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。

Vue 3.x 新增了 setup()，这是一个组合式 API，它在 beforeCreate 钩子之前被调用。

## 9. Vue 中的指令有哪些？
**答案**: Vue 中常用的指令包括：
1. v-bind：动态地绑定一个或多个属性，或一个组件 prop 到表达式。
2. v-on：绑定事件监听器。
3. v-model：在表单控件或者组件上创建双向绑定。
4. v-if, v-else, v-else-if：条件渲染。
5. v-show：根据条件展示元素。
6. v-for：基于源数据多次渲染元素或模板块。
7. v-text：更新元素的文本内容。
8. v-html：更新元素的 innerHTML。
9. v-pre：跳过这个元素和它的子元素的编译过程。
10. v-cloak：这个指令保持在元素上直到关联实例结束编译。
11. v-once：只渲染元素和组件一次。

此外，Vue 还支持自定义指令。

## 10. Vue 中的过滤器是什么？如何使用？
**答案**: 过滤器是 Vue 中用于常见文本格式化的方法。它们可以用在两个地方：双花括号插值和 v-bind 表达式。

使用方法：
1. 在组件的选项中定义本地的过滤器：
```javascript
filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  }
}
```

2. 在模板中使用：
```html
<!-- 在双花括号中 -->
{{ message | capitalize }}

<!-- 在 v-bind 中 -->
<div v-bind:id="rawId | formatId"></div>
```

注意：在 Vue 3.0 中，过滤器已被移除，官方建议用方法调用或计算属性来替换它们。

## 11. Vue 中的 mixins 是什么？如何使用？
**答案**: Mixins 是一种分发 Vue 组件中可复用功能的非常灵活的方式。mixin 对象可以包含任意组件选项。当组件使用 mixin 对象时，所有 mixin 对象的选项将被混入该组件本身的选项。

使用方法：
1. 定义一个 mixin 对象：
```javascript
var myMixin = {
  created: function () {
    this.hello()
  },
  methods: {
    hello: function () {
      console.log('hello from mixin!')
    }
  }
}
```

2. 在组件中使用 mixin：
```javascript
var Component = Vue.extend({
  mixins: [myMixin]
})
```

当组件和 mixin 对象含有同名选项时，这些选项将以恰当的方式混合。比如，数据对象在内部会进行浅合并 (一层属性深度)，在和组件的数据发生冲突时以组件数据优先。

## 12. Vue 中的 slot 是什么？如何使用？
**答案**: slot（插槽）是 Vue 实现的一套内容分发的 API，用于复合组件开发。它允许你在使用组件时，向组件内部指定位置传递内容。

使用方法：
1. 在子组件中定义插槽：
```html
<div>
  <slot>默认内容</slot>
</div>
```

2. 在父组件中使用插槽：
```html
<child-component>
  <p>这是一些插槽内容</p>
</child-component>
```

Vue 还支持具名插槽和作用域插槽，用于更复杂的内容分发场景。

## 13. Vue 中的自定义指令是什么？如何定义？
**答案**: 除了核心功能默认内置的指令，Vue 也允许注册自定义指令。自定义指令主要用于对普通 DOM 元素进行底层操作。

定义方法：
1. 全局定义：
```javascript
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
```

2. 局部定义：
```javascript
directives: {
  focus: {
    inserted: function (el) {
      el.focus()
    }
  }
}
```

使用���定义指令：
```html
<input v-focus>
```

自定义指令定义对象中可以提供几个钩子函数：bind、inserted、update、componentUpdated、unbind，它们分别在不同的时机被调用。

## 14. Vue 中的 keep-alive 是什么？
**答案**: `<keep-alive>` 是 Vue 的内置组件，可以使被包含的组件保留状态，避免重新渲染。

主要特性：
1. 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。
2. 和 `<transition>` 相似，`<keep-alive>` 是一个抽象组件：它自身不会渲染一个 DOM 元素，也不会出现在父组件链中。
3. 当组件在 `<keep-alive>` 内被切换，它的 activated 和 deactivated 这两个生命周期钩子函数将会被对应执行。

使用示例：
```html
<keep-alive>
  <component :is="currentComponent"></component>
</keep-alive>
```

`<keep-alive>` 常用于保存组件状态或避免重新渲染，例如标签页切换时保持每个标签页的状态。

## 15. Vue 中的 nextTick 是什么？
**答案**: Vue.nextTick 用于在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。

nextTick 主要用于以下场景：
1. 在 Vue 生命周期的 created() 钩子函数进行 DOM 操作时。
2. 在数据变化后要执行的���个操作，而这个操作需要使用随数据改变而改变的 DOM 结构时。

使用方法：
```javascript
// 修改数据
vm.msg = 'Hello'
// DOM 还没有更新
Vue.nextTick(function () {
  // DOM 更新了
})

// 作为一个 Promise 使用
Vue.nextTick()
  .then(function () {
    // DOM 更新了
  })
```

nextTick 的实现主要利用了 JavaScript 的事件循环机制。
