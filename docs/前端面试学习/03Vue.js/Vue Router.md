# Vue Router

## 1. 什么是 Vue Router？它的作用是什么？
**答案**：Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌。

Vue Router 的主要作用包括：
1. 嵌套的路由/视图表
2. 模块化的、基于组件的路由配置
3. 路由参数、查询、通配符
4. 基于 Vue.js 过渡系统的视图过渡效果
5. 细粒度的导航控制
6. 带有自动激活的 CSS class 的链接
7. HTML5 历史模式或 hash 模式，在 IE9 中自动降级
8. 自定义的滚动条行为

## 2. 如何在 Vue 项目中安装和使用 Vue Router？
**答案**：
1. 安装 Vue Router：
   ```
   npm install vue-router
   ```

2. 在 main.js 中引入和使用 Vue Router：
   ```javascript
   import Vue from 'vue'
   import VueRouter from 'vue-router'
   import App from './App.vue'

   Vue.use(VueRouter)

   const router = new VueRouter({
     routes: [
       // 定义路由...
     ]
   })

   new Vue({
     router,
     render: h => h(App)
   }).$mount('#app')
   ```

3. 在组件中使用路由：
   ```vue
   <template>
     <div id="app">
       <router-view></router-view>
     </div>
   </template>
   ```

## 3. Vue Router 的导航守卫是什么？有哪些种类？
**答案**：导航守卫主要用来通过跳转或取消的方式守卫导航。有三种主要的导航守卫：

1. 全局守卫：
   - `router.beforeEach`
   - `router.afterEach`

2. 路由独享的守卫：
   - 在路由配置上直接定义 `beforeEnter` 守卫

3. 组件内的守卫：
   - `beforeRouteEnter`
   - `beforeRouteUpdate`
   - `beforeRouteLeave`

示例：
```javascript
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  // ...
})
```

## 4. 如何在 Vue Router 中实现路由懒加载？
**答案**：路由懒加载可以帮助我们在需要的时候才加载对应的组件，可以提高首屏加载速度。实现方式如下：

```javascript
const router = new VueRouter({
  routes: [
    { path: '/home', component: () => import('./Home.vue') },
    { path: '/about', component: () => import('./About.vue') }
  ]
})
```

这里使用了 ES6 的动态 import 语法，它会被 webpack 自动处理，分割成不同的 chunk。

## 5. Vue Router 的 `<router-link>` 和 `<router-view>` 组件的作用是什么？
**答案**：
- `<router-link>`：用于创建链接到不同路由的导航。它会被渲染成一个 `<a>` 标签，但是可以防止浏览器重新加载页面。

- `<router-view>`：用于渲染通过路由映射的组件。当路由变化时，`<router-view>` 中渲染的组件会相应地发生变化。

示例：
```vue
<template>
  <div id="app">
    <router-link to="/home">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>
```

## 6. 如何在 Vue Router 中实现动态路由匹配？
**答案**：动态路由匹配是指将某种模式匹配到所有路由，全都映射到同个组件。实现方式如下：

```javascript
const router = new VueRouter({
  routes: [
    // 动态路径参数 以冒号开头
    { path: '/user/:id', component: User }
  ]
})
```

在组件中可以通过 `this.$route.params.id` 访问到 `id` 参数。

## 7. Vue Router 的 `history` 模式和 `hash` 模式有什么区别？
**答案**：
1. Hash 模式：
   - URL 中带有 #，例如 http://yoursite.com/#/user/id
   - 兼容性好，支持所有浏览器
   - 无需服务器端配置

2. History 模式：
   - URL 中没有 #，例如 http://yoursite.com/user/id
   - 需要服务器端配置支持
   - 更加美观，像正常的 URL

设置方式：
```javascript
const router = new VueRouter({
  mode: 'history', // 或 'hash'
  routes: [...]
})
```

## 8. 如何在 Vue Router 中实现路由传参？
**答案**：Vue Router 提供了多种传参方式：

1. 动态路由参数：
   ```javascript
   { path: '/user/:id', component: User }
   ```
   在组件中通过 `this.$route.params.id` 访问

2. 查询参数：
   ```javascript
   // 路由跳转
   this.$router.push({ path: '/user', query: { id: 123 } })
   ```
   在组件中通过 `this.$route.query.id` 访问

3. Props 传参：
   ```javascript
   { path: '/user/:id', component: User, props: true }
   ```
   在组件中直接通过 props 接收：
   ```javascript
   export default {
     props: ['id'],
     // ...
   }
   ```

## 9. Vue Router 的导航方法有哪些？
**答案**：Vue Router 提供了多种导航方法：

1. `router.push(location, onComplete?, onAbort?)`
2. `router.replace(location, onComplete?, onAbort?)`
3. `router.go(n)`
4. `router.back()`
5. `router.forward()`

示例：
```javascript
// 字符串
router.push('home')

// 对象
router.push({ path: 'home' })

// 命名的路由
router.push({ name: 'user', params: { userId: '123' } })

// 带查询参数，变成 /register?plan=private
router.push({ path: 'register', query: { plan: 'private' } })
```

## 10. 如何实现路由守卫中的登录验证？
**答案**：可以使用全局前置守卫来实现登录验证：

```javascript
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // 这个路由需要认证，检查是否已登录
    // 如果没有，则重定向到登录页面
    if (!isLoggedIn()) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()！
  }
})
```

在路由配置中，可以添加 `meta` 字段来标记需要认证的路由：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true }
    }
  ]
})
```

这样，当用户试图访问需要认证的页面时，如果未登录，就会被重定向到登录页面。

## 11. 如何在 Vue Router 中实现滚动行为？
**答案**：Vue Router 允许你自定义路由切换时页面如何滚动。当创建一个 Router 实例时，你可以提供一个 `scrollBehavior` 方法：

```javascript
const router = new VueRouter({
  routes: [...],
  scrollBehavior (to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})
```

这个方法可以返回滚动位置的对象。对于所有路由导航，让页面滚动到顶部：

```javascript
scrollBehavior (to, from, savedPosition) {
  return { x: 0, y: 0 }
}
```

## 12. 如何在 Vue Router 中处理 404 Not found？
**答案**：可以在路由配置的最后添加一个通配符路由来处理 404 情况：

```javascript
const router = new VueRouter({
  routes: [
    // 其他路由...
    { path: '*', component: NotFoundComponent }
  ]
})
```

这样，当没有匹配到其他路由时，会显示 NotFoundComponent。

## 13. Vue Router 中 `$route` 和 `$router` 的区别是什么？
**答案**：
- `$route` 是当前路由信息对象，包含了当前 URL 解析得到的信息，包括当前的路径，参数，查询参数等。

- `$router` 是 Vue Router 的实例，包含了整个路由器的配置信息，以及一些控制路由的方法，如 `push`、`replace`、`go` 等。

示例：
```javascript
// 获取当前路由参数
console.log(this.$route.params.id)

// 编程式导航
this.$router.push('/home')
```

## 14. 如何在 Vue Router 中实现路由元信息？
**答案**：路由元信息可以通过在路由配置中添加 `meta` 字段来实现：

```javascript
const router = new VueRouter({
  routes: [
    {
      path: '/admin',
      component: Admin,
      meta: { requiresAuth: true, title: 'Admin Page' }
    }
  ]
})
```

然后你可以在导航守卫或组件内访问这个元信息：

```javascript
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Default Title'
  // ...
})
```

## 15. 如何在 Vue 3 中使用 Vue Router 4？
**答案**：Vue Router 4 是专门为 Vue 3 设计的。主要变化包括：

1. 安装：
   ```
   npm install vue-router@4
   ```

2. 创建路由：
   ```javascript
   import { createRouter, createWebHistory } from 'vue-router'

   const router = createRouter({
     history: createWebHistory(),
     routes: [
       { path: '/', component: Home },
       { path: '/about', component: About },
     ]
   })
   ```

3. 在 main.js 中使用：
   ```javascript
   import { createApp } from 'vue'
   import App from './App.vue'
   import router from './router'

   createApp(App).use(router).mount('#app')
   ```

4. 在组件中使用组合式 API：
   ```javascript
   import { useRouter, useRoute } from 'vue-router'

   export default {
     setup() {
       const router = useRouter()
       const route = useRoute()

       // 使用 router 或 route...
     }
   }
   ```

这些是 Vue Router 的一些关键概念和使用方法。在实际应用中，可能还需要根据具体��求进行更复杂的配置和使用。
