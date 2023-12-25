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
        text: "介绍",
        link: "/intro.md",
      },
      {
        text: "Let's Go！",
        items: [
          {
            text: "使用 verdaccio 搭建 npm 私服",
            link: "/使用 verdaccio 搭建 npm 私服/index.md",
          },
          {
            text: "Prettier 代码风格",
            link: "/Prettier 代码风格/index.md",
          },
          {
            text: "Eslint 代码规则",
            link: "/Eslint 代码规则/index.md",
          },
          {
            text: "Vue2 的基本用法总结",
            link: "/Vue2 的基本用法总结/index.md",
          },
          {
            text: "Vue3 的基本用法总结",
            link: "/Vue3 的基本用法总结/index.md",
          },
          {
            text: "Css 权重计算规则",
            link: "/Css 权重计算规则/index.md",
          },
          {
            text: "浏览器的宏任务与微任务",
            link: "/浏览器的宏任务与微任务/index.md",
          },
          {
            text: "Git 常见命令",
            link: "/Git 常见命令/index.md",
          },
          {
            text: "Chatgpt 带我五分钟写了一个 Python 爬虫",
            link: "/Chatgpt 带我五分钟写了一个 Python 爬虫/index.md",
          },
          {
            text: "记一次 React-Taro 配置错误&编译体积过大",
            link: "/记一次 React-Taro 配置错误&编译体积过大/index.md",
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
