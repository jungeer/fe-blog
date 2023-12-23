import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "@前端俊哥儿乐___ 的技术博客",
  description: "个人所学与工作所得的学习思考",
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
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jungeer/fe-blog" },
    ],
  },
  base: "/fe-blog/",
});
