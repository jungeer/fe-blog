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
        text: "Html",
        items: [{ text: "html基本介绍", link: "/html基本介绍.md" }],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/jungeer/fe-blog" },
    ],
  },
  base: "/fe-blog/",
});
