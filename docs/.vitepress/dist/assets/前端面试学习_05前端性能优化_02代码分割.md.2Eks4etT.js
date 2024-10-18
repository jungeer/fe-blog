import{_ as s,o as i,c as a,R as n}from"./chunks/framework.rSPAVkc7.js";const c=JSON.parse('{"title":"代码分割","description":"","frontmatter":{},"headers":[],"relativePath":"前端面试学习/05前端性能优化/02代码分割.md","filePath":"前端面试学习/05前端性能优化/02代码分割.md"}'),l={name:"前端面试学习/05前端性能优化/02代码分割.md"},p=n(`<h1 id="代码分割" tabindex="-1">代码分割 <a class="header-anchor" href="#代码分割" aria-label="Permalink to &quot;代码分割&quot;">​</a></h1><h2 id="_1-什么是代码分割-它的主要目的是什么" tabindex="-1">1. 什么是代码分割？它的主要目的是什么？ <a class="header-anchor" href="#_1-什么是代码分割-它的主要目的是什么" aria-label="Permalink to &quot;1. 什么是代码分割？它的主要目的是什么？&quot;">​</a></h2><p><strong>答案</strong>：代码分割是一种将代码分解成更小的块（或称为包）的技术，这些块可以按需加载或并行加载。其主要目的是：</p><ol><li>减少初始加载时间</li><li>提高应用性能</li><li>优化资源利用</li></ol><h2 id="_2-在-webpack-中如何实现代码分割" tabindex="-1">2. 在 Webpack 中如何实现代码分割？ <a class="header-anchor" href="#_2-在-webpack-中如何实现代码分割" aria-label="Permalink to &quot;2. 在 Webpack 中如何实现代码分割？&quot;">​</a></h2><p><strong>答案</strong>：在 Webpack 中实现代码分割的主要方法有：</p><ol><li>入口点分割：使用 entry 配置手动分割代码</li><li>动态导入：使用 import() 语法</li><li>防止重复：使用 SplitChunksPlugin 提取公共依赖</li></ol><p>示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用动态导入</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">module</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 使用模块</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Webpack 配置</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    splitChunks: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      chunks: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;all&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="_3-什么是按需加载-如何在-react-中实现" tabindex="-1">3. 什么是按需加载？如何在 React 中实现？ <a class="header-anchor" href="#_3-什么是按需加载-如何在-react-中实现" aria-label="Permalink to &quot;3. 什么是按需加载？如何在 React 中实现？&quot;">​</a></h2><p><strong>答案</strong>：按需加载是一种只在需要时才加载代码的技术。在 React 中，可以使用 React.lazy 和 Suspense 实现按需加载：</p><div class="language-jsx vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">jsx</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React, { Suspense } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;react&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> OtherComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> React.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">lazy</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./OtherComponent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fallback</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;Loading...&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;}&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">OtherComponent</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Suspense</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  );</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="_4-什么是预加载-preloading-和预获取-prefetching-它们的区别是什么" tabindex="-1">4. 什么是预加载（Preloading）和预获取（Prefetching）？它们的区别是什么？ <a class="header-anchor" href="#_4-什么是预加载-preloading-和预获取-prefetching-它们的区别是什么" aria-label="Permalink to &quot;4. 什么是预加载（Preloading）和预获取（Prefetching）？它们的区别是什么？&quot;">​</a></h2><p><strong>答案</strong>：</p><ul><li>预加载（Preloading）：立即加载资源，通常用于当前路由</li><li>预获取（Prefetching）：在浏览器闲置时加载资源，通常用于未来可能需要的路由</li></ul><p>区别：</p><ol><li>优先级：预加载高于预获取</li><li>执行时机：预加载立即执行，预获取在浏览器闲置时执行</li><li>使用场景：预加载用于当前页面所需资源，预获取用于可能需要的future资源</li></ol><h2 id="_5-如何使用-webpack-的魔法注释-magic-comments-进行代码分割" tabindex="-1">5. 如何使用 Webpack 的魔法注释（Magic Comments）进行代码分割？ <a class="header-anchor" href="#_5-如何使用-webpack-的魔法注释-magic-comments-进行代码分割" aria-label="Permalink to &quot;5. 如何使用 Webpack 的魔法注释（Magic Comments）进行代码分割？&quot;">​</a></h2><p><strong>答案</strong>：Webpack 的魔法注释可以用于更细粒度地控制代码分割。例如：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 为chunk命名</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* webpackChunkName: &quot;my-chunk-name&quot; */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 预获取</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* webpackPrefetch: true */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 预加载</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/* webpackPreload: true */</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;./module&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="_6-什么是-tree-shaking-它如何帮助优化代码体积" tabindex="-1">6. 什么是 Tree Shaking？它如何帮助优化代码体积？ <a class="header-anchor" href="#_6-什么是-tree-shaking-它如何帮助优化代码体积" aria-label="Permalink to &quot;6. 什么是 Tree Shaking？它如何帮助优化代码体积？&quot;">​</a></h2><p><strong>答案</strong>：Tree Shaking 是一个术语，通常用于描述移除 JavaScript 上下文中的未引用代码(dead-code)。它依赖于 ES6 模块语法的静态结构特性。</p><p>Tree Shaking 通过以下方式优化代码体积：</p><ol><li>识别并删除未使用的代码</li><li>减少最终打包文件的大小</li><li>提高应用加载速度和运行效率</li></ol><p>在 Webpack 中启用 Tree Shaking：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// webpack.config.js</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">module</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exports</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  mode: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;production&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  optimization: {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    usedExports: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span></code></pre></div><h2 id="_7-什么是动态导入-它如何影响性能" tabindex="-1">7. 什么是动态导入？它如何影响性能？ <a class="header-anchor" href="#_7-什么是动态导入-它如何影响性能" aria-label="Permalink to &quot;7. 什么是动态导入？它如何影响性能？&quot;">​</a></h2><p><strong>答案</strong>：动态导入是一种在运行时按需加载模块的技术。它通过 import() 函数实现，返回一个 Promise。</p><p>动态导入对性能的影响：</p><ol><li>减少初始加载时间</li><li>按需加载资源，优化资源利用</li><li>可能增加HTTP请求数，需要权衡</li></ol><p>示例：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">button.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addEventListener</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;click&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">event</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./dialogBox.js&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">then</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">dialogBox</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">      dialogBox.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">open</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    .</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">catch</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">error</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">      /* Error handling */</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    })</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">});</span></span></code></pre></div><h2 id="_8-在-vue-js-中如何实现异步组件" tabindex="-1">8. 在 Vue.js 中如何实现异步组件？ <a class="header-anchor" href="#_8-在-vue-js-中如何实现异步组件" aria-label="Permalink to &quot;8. 在 Vue.js 中如何实现异步组件？&quot;">​</a></h2><p><strong>答案</strong>：在 Vue.js 中，可以使用动态导入来创建异步组件：</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AsyncComponent</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ({</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  component: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;./MyComponent.vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">),</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  loading: LoadingComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  error: ErrorComponent,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  delay: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">200</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  timeout: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3000</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Vue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // ...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  components: {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    &#39;my-component&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: AsyncComponent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})</span></span></code></pre></div><h2 id="_9-什么是-code-splitting-的最佳实践" tabindex="-1">9. 什么是 Code Splitting 的最佳实践？ <a class="header-anchor" href="#_9-什么是-code-splitting-的最佳实践" aria-label="Permalink to &quot;9. 什么是 Code Splitting 的最佳实践？&quot;">​</a></h2><p><strong>答案</strong>：Code Splitting 的最佳实践包括：</p><ol><li>按路由分割：每个路由加载其所需的代码</li><li>按组件分割：将大型组件拆分成更小的异步组件</li><li>按功能分割：将不常用的功能单独分割</li><li>提取公共依赖：使用 SplitChunksPlugin 提取共享模块</li><li>使用动态导入：在适当的时机动态加载模块</li><li>优化加载顺序：使用预加载和预获取</li><li>监控和分析：使用工具如 Webpack Bundle Analyzer 分析包大小</li></ol><h2 id="_10-如何在单页应用-spa-中优化首屏加载时间" tabindex="-1">10. 如何在单页应用（SPA）中优化首屏加载时间？ <a class="header-anchor" href="#_10-如何在单页应用-spa-中优化首屏加载时间" aria-label="Permalink to &quot;10. 如何在单页应用（SPA）中优化首屏加载时间？&quot;">​</a></h2><p><strong>答案</strong>：优化 SPA 首屏加载时间的方法：</p><ol><li>路由级别的代码分割</li><li>组件懒加载</li><li>服务端渲染（SSR）</li><li>静态站点生成（SSG）</li><li>优化关键渲染路径</li><li>使用缓存策略</li><li>压缩资源（gzip, Brotli）</li><li>使用 CDN</li><li>优化字体加载</li><li>实现骨架屏或加载占位符</li></ol>`,41),h=[p];function t(k,e,E,r,d,g){return i(),a("div",null,h)}const y=s(l,[["render",t]]);export{c as __pageData,y as default};
