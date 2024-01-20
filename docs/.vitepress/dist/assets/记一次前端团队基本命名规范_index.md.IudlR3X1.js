import{_ as t,o as d,c as s,R as a}from"./chunks/framework.rSPAVkc7.js";const u=JSON.parse('{"title":"记一次前端团队基本命名规范","description":"","frontmatter":{},"headers":[],"relativePath":"记一次前端团队基本命名规范/index.md","filePath":"记一次前端团队基本命名规范/index.md"}'),i={name:"记一次前端团队基本命名规范/index.md"},r=a(`<h1 id="记一次前端团队基本命名规范" tabindex="-1">记一次前端团队基本命名规范 <a class="header-anchor" href="#记一次前端团队基本命名规范" aria-label="Permalink to &quot;记一次前端团队基本命名规范&quot;">​</a></h1><p><code>仅仅仅仅仅仅是一份简单的代码规范参考 ~</code></p><h2 id="团队现状" tabindex="-1">团队现状 <a class="header-anchor" href="#团队现状" aria-label="Permalink to &quot;团队现状&quot;">​</a></h2><ul><li>代码风格各异</li><li>可读性和可维护性下降</li><li>增加团队协作和项目维护的难度</li><li>需要制定统一的代码规范</li></ul><h2 id="使用背景" tabindex="-1">使用背景 <a class="header-anchor" href="#使用背景" aria-label="Permalink to &quot;使用背景&quot;">​</a></h2><ol><li>该规范主要使用新项目中；</li><li>现有项目应遵守原有项目规范（绝对前提）！！！尽可能使用该规范；</li><li>基于以上【第一点】【第二点】前提下，<strong>MR 流程会强制使用该规范 ；</strong></li></ol><h2 id="命名基础" tabindex="-1">命名基础 <a class="header-anchor" href="#命名基础" aria-label="Permalink to &quot;命名基础&quot;">​</a></h2><ol><li>采用全小写字母组成；</li><li>名称过长时，使用中划线（-）拼接；<strong>（除 Javascript 变量命名）</strong></li></ol><p>Q：为什么要选用全小写加中划线？</p><p>A：在命名风格里，是多样的，有大驼峰命名（TodoList），小驼峰命名（todoList），中划线命名（todo-list），下划线命名（todo_list）等等等等。 **使用全小写加中划线是因为这个风格是比较统一的，可以同时存在多个地方使用，如项目命名，目录命名，文件命名。**而其他风格是没有很好的统一标准的，比如 vue 组件命名，官方推荐就存在两种命名（大驼峰，中划线）...</p><p>A：公司内部某项目名使用 “ - ” 被误解析为 减号（-）（字符 “-” 解析失败</p><p>A：参考了 github 项目命名，存在多种命名，使用中划线命名算比较常见的（暂时没有数据支持）</p><h2 id="项目命名" tabindex="-1"><strong>项目命名</strong> <a class="header-anchor" href="#项目命名" aria-label="Permalink to &quot;**项目命名**&quot;">​</a></h2><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><p>如：my-project-name ，webapp-asclepius</p><h2 id="文件夹-目录-命名" tabindex="-1"><strong>文件夹（目录）命名</strong> <a class="header-anchor" href="#文件夹-目录-命名" aria-label="Permalink to &quot;**文件夹（目录）命名**&quot;">​</a></h2><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li><li>有复数结构时，要采用复数命名法。如：images/components/utils/;</li></ol><ul><li>常见目录 <table><thead><tr><th><strong>文件夹名</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td>src</td><td>源代码</td></tr><tr><td>images</td><td>图片资源</td></tr><tr><td>test</td><td>测试</td></tr><tr><td>common</td><td>公共资源</td></tr><tr><td>public, static</td><td>静态资源</td></tr><tr><td>components</td><td>组件</td></tr><tr><td>pages, views</td><td>页面模块</td></tr></tbody></table></li></ul><h2 id="文件命名" tabindex="-1"><strong>文件命名</strong> <a class="header-anchor" href="#文件命名" aria-label="Permalink to &quot;**文件命名**&quot;">​</a></h2><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><p>如：todo-list</p><h2 id="组件命名-vue" tabindex="-1"><strong>组件命名（vue）</strong> <a class="header-anchor" href="#组件命名-vue" aria-label="Permalink to &quot;**组件命名（vue）**&quot;">​</a></h2><ol><li>采用全小写字母组成</li><li>名称过长时，使用中划线（-）拼接</li></ol><p>如：todo-list</p><h3 id="通用组件命名" tabindex="-1">通用组件命名 <a class="header-anchor" href="#通用组件命名" aria-label="Permalink to &quot;通用组件命名&quot;">​</a></h3><ol><li>统一使用 base 开头;</li></ol><p>如 base-button, base-table, base-form</p><p><a href="https://v2.cn.vuejs.org/v2/style-guide/index.html#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB" target="_blank" rel="noreferrer">Vue2 官方风格指南</a></p><p><strong>由于新项目推荐使用 Vue3 ，所以不需要特别纠结 Vue2 风格指南，只是作为一部分参考使用，如有冲突，一切以本文档为准</strong></p><h2 id="css-命名" tabindex="-1">CSS 命名 <a class="header-anchor" href="#css-命名" aria-label="Permalink to &quot;CSS 命名&quot;">​</a></h2><p><s>参考 CSS 命名规范：BEM 规范，OOCSS 规范。</s></p><h3 id="class-命名" tabindex="-1">Class 命名 <a class="header-anchor" href="#class-命名" aria-label="Permalink to &quot;Class 命名&quot;">​</a></h3><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><h3 id="id-命名" tabindex="-1">Id 命名 <a class="header-anchor" href="#id-命名" aria-label="Permalink to &quot;Id 命名&quot;">​</a></h3><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><p><strong>对于具体命名方式，暂时没有比较好的总结，所以先强制约束以上两点命名规则，不允许出现驼峰命名！！！！！</strong></p><h3 id="常见-class-id-命名" tabindex="-1">常见 Class / Id 命名 <a class="header-anchor" href="#常见-class-id-命名" aria-label="Permalink to &quot;常见 Class / Id 命名&quot;">​</a></h3><table><thead><tr><th><strong>ClassName</strong></th><th><strong>含义</strong></th></tr></thead><tbody><tr><td>about</td><td>关于</td></tr><tr><td>account</td><td>账户</td></tr><tr><td>arrow</td><td>箭头图标</td></tr><tr><td>article</td><td>文章</td></tr><tr><td>aside</td><td>边栏</td></tr><tr><td>audio</td><td>音频</td></tr><tr><td>avatar</td><td>头像</td></tr><tr><td>bg,background</td><td>背景</td></tr><tr><td>bar</td><td>栏</td></tr><tr><td>blog</td><td>博客</td></tr><tr><td>brand</td><td>品牌，商标</td></tr><tr><td>banner</td><td>广告条 (顶部广告条)</td></tr><tr><td>crumb,breadcrumb</td><td>面包屑</td></tr><tr><td>btn,button</td><td>按钮</td></tr><tr><td>caption</td><td>标题，说明</td></tr><tr><td>category</td><td>分类</td></tr><tr><td>chart</td><td>图表</td></tr><tr><td>clearfix</td><td>清除浮动</td></tr><tr><td>close</td><td>关闭</td></tr><tr><td>col,column</td><td>列</td></tr><tr><td>comment</td><td>评论</td></tr><tr><td>community</td><td>社区</td></tr><tr><td>container</td><td>容器</td></tr><tr><td>content</td><td>内容</td></tr><tr><td>copyright</td><td>版权</td></tr><tr><td>current</td><td>当前态，选中态</td></tr><tr><td>default</td><td>默认</td></tr><tr><td>description</td><td>描述</td></tr><tr><td>detail</td><td>细节</td></tr><tr><td>disabled</td><td>不可用</td></tr><tr><td>drop</td><td>下拉</td></tr><tr><td>dorpmenu</td><td>下拉菜单</td></tr><tr><td>download</td><td>下载</td></tr><tr><td>entry</td><td>文章，博文</td></tr><tr><td>error</td><td>错误</td></tr><tr><td>even</td><td>偶数，常用于多行列表或表格中</td></tr><tr><td>fail</td><td>失败（提示）</td></tr><tr><td>faq</td><td>常见问题</td></tr><tr><td>special-subject</td><td>专题</td></tr><tr><td>stow</td><td>收起</td></tr><tr><td>field</td><td>用于表单的输入区域</td></tr><tr><td>figure</td><td>图</td></tr><tr><td>filter</td><td>筛选</td></tr><tr><td>first</td><td>第一个</td></tr><tr><td>foot,footer</td><td>页脚</td></tr><tr><td>forum</td><td>论坛</td></tr><tr><td>friendlink</td><td>友情连接</td></tr><tr><td>gallery</td><td>画廊</td></tr><tr><td>guide</td><td>指南</td></tr><tr><td>group</td><td>组</td></tr><tr><td>head,header</td><td>页头</td></tr><tr><td>help</td><td>帮助</td></tr><tr><td>hide</td><td>隐藏</td></tr><tr><td>hightlight</td><td>高亮</td></tr><tr><td>home</td><td>主页</td></tr><tr><td>homepage</td><td>首页</td></tr><tr><td>hot</td><td>热门，热点</td></tr><tr><td>icon</td><td>图标</td></tr><tr><td>info,information</td><td>信息</td></tr><tr><td>joinus</td><td>加入我们</td></tr><tr><td>keyword</td><td>关键词</td></tr><tr><td>last</td><td>最后一个</td></tr><tr><td>layout</td><td>布局</td></tr><tr><td>left , right ,center</td><td>居左，居中，居右</td></tr><tr><td>list</td><td>列表</td></tr><tr><td>link</td><td>链接</td></tr><tr><td>login</td><td>登录</td></tr><tr><td>loginbar</td><td>登录条</td></tr><tr><td>logout</td><td>退出</td></tr><tr><td>logo</td><td>标志</td></tr><tr><td>main</td><td>主体</td></tr><tr><td>menu</td><td>菜单</td></tr><tr><td>meta</td><td>元语言</td></tr><tr><td>module</td><td>模块</td></tr><tr><td>more</td><td>更多</td></tr><tr><td>msg,message</td><td>消息</td></tr><tr><td>nav,navigation</td><td>主导航</td></tr><tr><td>news</td><td>新闻</td></tr><tr><td>nextpage</td><td>下一页</td></tr><tr><td>nub</td><td>小块</td></tr><tr><td>odd</td><td>奇数</td></tr><tr><td>leave</td><td>离开</td></tr><tr><td>output</td><td>输出</td></tr><tr><td>pagination</td><td>分页器</td></tr><tr><td>partner</td><td>合作伙伴</td></tr><tr><td>pop,popup</td><td>弹窗</td></tr><tr><td>preview</td><td>预览</td></tr><tr><td>previous</td><td>上一页</td></tr><tr><td>primary</td><td>主要</td></tr><tr><td>product</td><td>产品</td></tr><tr><td>progress</td><td>进度条</td></tr><tr><td>promotion</td><td>促销</td></tr><tr><td>publisher</td><td>生产商</td></tr><tr><td>recommend</td><td>推荐</td></tr><tr><td>reg,register</td><td>注册</td></tr><tr><td>save</td><td>保存</td></tr><tr><td>screenshot</td><td>截图</td></tr><tr><td>scroll</td><td>滚动</td></tr><tr><td>search</td><td>搜索</td></tr><tr><td>searchinput</td><td>搜索输入框</td></tr><tr><td>secondary</td><td>次要</td></tr><tr><td>section</td><td>区块</td></tr><tr><td>selected</td><td>已选</td></tr><tr><td>service</td><td>服务</td></tr><tr><td>share</td><td>分享</td></tr><tr><td>show</td><td>显示</td></tr><tr><td>sidebar</td><td>边栏，侧栏</td></tr><tr><td>siteinfo</td><td>网站信息</td></tr><tr><td>siteinfo-legal</td><td>法律声明</td></tr><tr><td>siteinfo-credits</td><td>信誉</td></tr><tr><td>sitemap</td><td>网站地图</td></tr><tr><td>slide</td><td>幻灯片，图片切换</td></tr><tr><td>sort</td><td>排序</td></tr><tr><td>status</td><td>状态</td></tr><tr><td>sub</td><td>次级的，子级的</td></tr><tr><td>subpage</td><td>二级页面，子页面</td></tr><tr><td>submenu</td><td>子菜单</td></tr><tr><td>submit</td><td>提交</td></tr><tr><td>subnav</td><td>二级导航</td></tr><tr><td>subscribe</td><td>订阅</td></tr><tr><td>subtitle</td><td>副标题</td></tr><tr><td>success</td><td>成功（提示）</td></tr><tr><td>summary</td><td>摘要</td></tr><tr><td>tab</td><td>标签页</td></tr><tr><td>tag</td><td>标签</td></tr><tr><td>table</td><td>表格</td></tr><tr><td>txt,text</td><td>文本</td></tr><tr><td>thumbnail</td><td>缩略图</td></tr><tr><td>time</td><td>时间</td></tr><tr><td>tip</td><td>提示</td></tr><tr><td>title</td><td>标题</td></tr><tr><td>tool, toolbar</td><td>工具条</td></tr><tr><td>video</td><td>视频</td></tr><tr><td>vote</td><td>投票</td></tr><tr><td>wrap，wrapper</td><td>容器，包，一般用于最外层</td></tr></tbody></table><h3 id="sass-命名" tabindex="-1">Sass 命名 <a class="header-anchor" href="#sass-命名" aria-label="Permalink to &quot;Sass 命名&quot;">​</a></h3><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><h2 id="路由路径命名" tabindex="-1">路由路径命名 <a class="header-anchor" href="#路由路径命名" aria-label="Permalink to &quot;路由路径命名&quot;">​</a></h2><ol><li>采用全小写字母组成;</li><li>名称过长时，使用中划线（-）拼接;</li></ol><p>如：user-management （<strong>尽可能要与对应页面组件命名保持一致）</strong></p><h2 id="javascript-命名" tabindex="-1">JavaScript 命名 <a class="header-anchor" href="#javascript-命名" aria-label="Permalink to &quot;JavaScript 命名&quot;">​</a></h2><p><s>参考 JavaScript 编写规范：ESLint，JSLint</s></p><h4 id="常量" tabindex="-1">常量 <a class="header-anchor" href="#常量" aria-label="Permalink to &quot;常量&quot;">​</a></h4><p>使用大写字母、数字组成，下划线拼接，如：CONSULT_TYPE</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> API_KEY</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;your_api_key&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> USER_ROLES</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;admin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;user&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h4 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-label="Permalink to &quot;变量&quot;">​</a></h4><br><h5 id="普通变量" tabindex="-1">普通变量 <a class="header-anchor" href="#普通变量" aria-label="Permalink to &quot;普通变量&quot;">​</a></h5><p>字母、数字组成，驼峰拼接，例：idCard</p><h5 id="数据变量" tabindex="-1">数据变量 <a class="header-anchor" href="#数据变量" aria-label="Permalink to &quot;数据变量&quot;">​</a></h5><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 对象数组 列表数据最好后面加个 List 或者 Data</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> companyList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> checkedList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> selectedList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> addressList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ref</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> userList</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tableData</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> arr</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 非对象数组在字母后面加 s</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ids</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> selectedIds</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> activeKeys</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> nums</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span></code></pre></div><h5 id="布尔值变量" tabindex="-1">布尔值变量 <a class="header-anchor" href="#布尔值变量" aria-label="Permalink to &quot;布尔值变量&quot;">​</a></h5><p>使用前缀 is、has 或 should：例如，isActive、hasPermission 或 shouldUpdate</p><h5 id="其他注意事项" tabindex="-1">其他注意事项 <a class="header-anchor" href="#其他注意事项" aria-label="Permalink to &quot;其他注意事项&quot;">​</a></h5><ul><li><p><strong>变量名不应过短，要能准确完整地描述该变量所表述的事物</strong></p><table><thead><tr><th><strong>不好的变量名</strong></th><th><strong>好的变量名</strong></th></tr></thead><tbody><tr><td>inp</td><td>input, priceInput</td></tr><tr><td>day1, day2, param1</td><td>today, tomorrow</td></tr><tr><td>id</td><td>userId, orderId</td></tr><tr><td>obj</td><td>orderData, houseInfos</td></tr><tr><td>tId</td><td>removeMsgTimerId</td></tr><tr><td>handler</td><td>submitHandler, searchHandler</td></tr></tbody></table></li><li><p>变量名不要使用计算机术语，如：texareaData，应该取和业务相关的名字，如：leaveMsg</p></li><li><p>变量名的对仗要明确，如：up/down、begin/end、opened/closed、visible/invisible、scource/target</p></li><li><p>不要使用中文拼音，要使用正确的英文单词，如：shijianchuo 应改成 timestamp</p></li><li><p>需要临时变量时，建议结合实际给变量命名，少用 temp 和 obj</p></li><li><p><strong>布尔变量不要使用否定的名词，如 notOk、notReady，因为否定的词取反比较反思维，如 if (!notOk)</strong></p></li></ul><h4 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-label="Permalink to &quot;函数&quot;">​</a></h4><br><h5 id="构造函数" tabindex="-1">构造函数 <a class="header-anchor" href="#构造函数" aria-label="Permalink to &quot;构造函数&quot;">​</a></h5><p>大驼峰命名，如：Vue()</p><h5 id="类" tabindex="-1">类 <a class="header-anchor" href="#类" aria-label="Permalink to &quot;类&quot;">​</a></h5><p>大驼峰命名，如：User、Product</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> UserAccount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ShoppingCart</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {}</span></span></code></pre></div><h5 id="普通函数" tabindex="-1">普通函数 <a class="header-anchor" href="#普通函数" aria-label="Permalink to &quot;普通函数&quot;">​</a></h5><p>小驼峰命名，<strong>动词 + 名词方式组合</strong>，例：getList() 一般都使用<strong>动词 + 名词</strong> 根据实际情况修改</p><p>常见函数命名</p><table><thead><tr><th><strong>动词</strong></th><th><strong>含义</strong></th><th><strong>用法示例</strong></th></tr></thead><tbody><tr><td>get</td><td>获取某个值</td><td>getList</td></tr><tr><td>set</td><td>设置某个值</td><td>setData</td></tr><tr><td>switch/toggle</td><td>切换某个值</td><td>switchTab/toggleTab</td></tr><tr><td>check</td><td>判断是否可执行某个动作(权限)</td><td>函数返回一个布尔值。true：可执行；false：不可执行</td></tr><tr><td>has</td><td>判断是否含有某个值</td><td>函数返回一个布尔值。true：含有此值；false：不含有此值</td></tr><tr><td>is</td><td>判断是否为某个值</td><td>函数返回一个布尔值。true：为某个值；false：不为某个值</td></tr><tr><td>load</td><td>加载某些数据</td><td>无返回值或者返回是否加载完成的结果</td></tr><tr><td>change</td><td>改变数据</td><td>changeData</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">编辑 onEdit     handleEdit     edit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">新增 onAdd      handleAdd      add</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">删除 onDelete   handleDelete   </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">delete</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  批量删除 onMulDelete   handleMulDelete  mulDelete</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">重命名 onRename   handleRename</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">搜索 search</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">获取表格列表 getTableData  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 一般一般一般业务页面只有一个查询表格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">返回 onBack    handleback   back</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">提交 onSubmit   hanldeSubmit   sumbit</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">确认 onConfirm    onOk   confirm    ok</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">取消 onCancel    cancel</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">关闭 onClose    close</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">保存 onSave    save</span></span></code></pre></div>`,70),e=[r];function n(l,h,p,o,k,c){return d(),s("div",null,e)}const E=t(i,[["render",n]]);export{u as __pageData,E as default};
