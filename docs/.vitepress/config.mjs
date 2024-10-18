import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@前端俊哥儿乐___ 的技术博客",
  description: "个人所学与工作所得的学习思考",
  head: [["link", { rel: "icon", href: "/fe-blog/V.png" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/" },
      { text: "关于我", link: "https://jungeer.github.io/" },
    ],

    sidebar: [
      {
        text: "👦 介绍",
        link: "/intro.md",
      },
      {
        text: "📚 前端笔记",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "使用 verdaccio 搭建 npm 私服",
            link: "/前端笔记/使用 verdaccio 搭建 npm 私服/index.md",
          },
          {
            text: "Prettier 代码风格",
            link: "/前端笔记/Prettier 代码风格/index.md",
          },
          {
            text: "Eslint 代码规则",
            link: "/前端笔记/Eslint 代码规则/index.md",
          },
          {
            text: "Vue2 的基本用法总结",
            link: "/前端笔记/Vue2 的基本用法总结/index.md",
          },
          {
            text: "Vue3 的基本用法总结",
            link: "/前端笔记/Vue3 的基本用法总结/index.md",
          },
          {
            text: "Css 权重计算规则",
            link: "/前端笔记/Css 权重计算规则/index.md",
          },
          {
            text: "浏览器的宏任务与微任务",
            link: "/前端笔记/浏览器的宏任务与微任务/index.md",
          },
          {
            text: "Git 常见命令",
            link: "/前端笔记/Git 常见命令/index.md",
          },
          {
            text: "Chatgpt 带我五分钟写了一个 Python 爬虫",
            link: "/前端笔记/Chatgpt 带我五分钟写了一个 Python 爬虫/index.md",
          },
          {
            text: "记一次 React-Taro 配置错误&编译体积过大",
            link: "/前端笔记/记一次 React-Taro 配置错误&编译体积过大/index.md",
          },
          {
            text: "记一次前端团队基本命名规范",
            link: "/前端笔记/记一次前端团队基本命名规范/index.md",
          },
          {
            text: "Html、Css、Javascript 的一篇万字总结",
            link: "/前端笔记/Html、Css、Javascript 的一篇万字总结/index.md",
          },
          {
            text: "使用 ChatGpt 生成了一个简简简易低代码",
            link: "/前端笔记/使用 ChatGpt 生成了一个简简简易低代码/index.md",
          },
          {
            text: "一行命令将项目代码转换成繁体",
            link: "/前端笔记/一行命令将项目代码转换成繁体/index.md",
          },
        ],
      },
      {
        text: "🚀 前端面试学习",
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: "01JavaScript基础",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01数据类型与类型转换",
                link: "/前端面试学习/01JavaScript基础/01数据类型与类型转换.md",
              },
              {
                text: "02作用域与闭包",
                link: "/前端面试学习/01JavaScript基础/02作用域与闭包.md",
              },
              {
                text: "03原型与继承",
                link: "/前端面试学习/01JavaScript基础/03原型与继承.md",
              },
              {
                text: "04异步编程",
                link: "/前端面试学习/01JavaScript基础/04异步编程.md",
              },
              {
                text: "05事件循环与任务队列",
                link: "/前端面试学习/01JavaScript基础/05事件循环与任务队列.md",
              },
            ],
          },
          {
            text: "02ES6+新特性",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01箭头函数",
                link: "/前端面试学习/02ES6+新特性/01箭头函数.md",
              },
              {
                text: "02解构赋值与扩展运算符",
                link: "/前端面试学习/02ES6+新特性/02解构赋值与扩展运算符.md",
              },
              {
                text: "03Class与面向对象编程",
                link: "/前端面试学习/02ES6+新特性/03Class与面向对象编程.md",
              },
              {
                text: "04模块化",
                link: "/前端面试学习/02ES6+新特性/04模块化.md",
              },
              {
                text: "05生成器与迭代器",
                link: "/前端面试学习/02ES6+新特性/05生成器与迭代器.md",
              },
            ],
          },
          {
            text: "03Vue.js",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01Vue基础",
                link: "/前端面试学习/03Vue.js/01Vue基础.md",
              },
              {
                text: "02生命周期钩子",
                link: "/前端面试学习/03Vue.js/02生命周期钩子.md",
              },
              {
                text: "03组件通信",
                link: "/前端面试学习/03Vue.js/03组件通信.md",
              },
              {
                text: "04Vue Router",
                link: "/前端面试学习/03Vue.js/04Vue Router.md",
              },
              {
                text: "05Vuex",
                link: "/前端面试学习/03Vue.js/05Vuex.md",
              },
              {
                text: "06Vue3新特性",
                link: "/前端面试学习/03Vue.js/06Vue3新特性.md",
              },
            ],
          },
          {
            text: "04React",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01React基础",
                link: "/前端面试学习/04React/01React基础.md",
              },
              {
                text: "02组件与生命周期",
                link: "/前端面试学习/04React/02组件与生命周期.md",
              },
              {
                text: "03Hooks",
                link: "/前端面试学习/04React/03Hooks.md",
              },
              {
                text: "04组件通信",
                link: "/前端面试学习/04React/04组件通信.md",
              },
              {
                text: "05React Router",
                link: "/前端面试学习/04React/05React Router.md",
              },
              {
                text: "06Redux",
                link: "/前端面试学习/04React/06Redux.md",
              },
            ],
          },
          {
            text: "05前端性能优化",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01资源加载优化",
                link: "/前端面试学习/05前端性能优化/01资源加载优化.md",
              },
              {
                text: "02代码分割",
                link: "/前端面试学习/05前端性能优化/02代码分割.md",
              },
              {
                text: "03DOM操作优化",
                link: "/前端面试学习/05前端性能优化/03DOM操作优化.md",
              },
              {
                text: "04图片优化",
                link: "/前端面试学习/05前端性能优化/04图片优化.md",
              },
              {
                text: "05渲染优化",
                link: "/前端面试学习/05前端性能优化/05渲染优化.md",
              },
            ],
          },
          {
            text: "06浏览器与安全",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01浏览器渲染机制",
                link: "/前端面试学习/06浏览器与安全/01浏览器渲染机制.md",
              },
              {
                text: "02跨域",
                link: "/前端面试学习/06浏览器与安全/02跨域.md",
              },
              {
                text: "03Web安全",
                link: "/前端面试学习/06浏览器与安全/03Web安全.md",
              },
              {
                text: "04HTTPS",
                link: "/前端面试学习/06浏览器与安全/04HTTPS.md",
              },
            ],
          },
          {
            text: "07前端工程化与工具",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01Webpack",
                link: "/前端面试学习/07前端工程化与工具/01Webpack.md",
              },
              {
                text: "02Babel",
                link: "/前端面试学习/07前端工程化与工具/02Babel.md",
              },
              {
                text: "03Lint工具",
                link: "/前端面试学习/07前端工程化与工具/03Lint工具.md",
              },
              {
                text: "04Git与版本控制",
                link: "/前端面试学习/07前端工程化与工具/04Git与版本控制.md",
              },
              {
                text: "05自动化测试",
                link: "/前端面试学习/07前端工程化与工具/05自动化测试.md",
              },
            ],
          },
          {
            text: "08移动端与小程序开发",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "01响应式布局",
                link: "/前端面试学习/08移动端与小程序开发/01响应式布局.md",
              },
              {
                text: "02移动端优化",
                link: "/前端面试学习/08移动端与小程序开发/02移动端优化.md",
              },
              {
                text: "03小程序开发",
                link: "/前端面试学习/08移动端与小程序开发/03小程序开发.md",
              },
            ],
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jungeer/fe-blog" },
    ],
  },
  base: "/fe-blog/",
  ignoreDeadLinks: true,
});
