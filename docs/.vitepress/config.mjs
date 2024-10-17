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
            text: "JavaScript基础",
            collapsible: true,
            collapsed: true,
            items: [
              {
                text: "JavaScript基础知识",
                link: "/前端面试学习/01JavaScript基础/JavaScript基础知识.md",
              },
              {
                text: "作用域和闭包",
                link: "/前端面试学习/01JavaScript基础/作用域与闭包",
              },
              {
                text: "原型和继承",
                link: "/前端面试学习/01JavaScript基础/原型和继承",
              },
              {
                text: "异步编程",
                link: "/前端面试学习/01JavaScript基础/异步编程",
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
});
