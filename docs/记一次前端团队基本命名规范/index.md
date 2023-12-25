# 记一次前端团队基本命名规范

`仅仅仅仅仅仅是一份简单的代码规范参考 ~`

## 团队现状

- 代码风格各异
- 可读性和可维护性下降
- 增加团队协作和项目维护的难度
- 需要制定统一的代码规范

## 使用背景

1. 该规范主要使用新项目中；
2. 现有项目应遵守原有项目规范（绝对前提）！！！尽可能使用该规范；
3. 基于以上【第一点】【第二点】前提下，**MR 流程会强制使用该规范 ；**

## 命名基础

1. 采用全小写字母组成；
2. 名称过长时，使用中划线（-）拼接；**（除 Javascript 变量命名）**

Q：为什么要选用全小写加中划线？

A：在命名风格里，是多样的，有大驼峰命名（TodoList），小驼峰命名（todoList），中划线命名（todo-list），下划线命名（todo_list）等等等等。
**使用全小写加中划线是因为这个风格是比较统一的，可以同时存在多个地方使用，如项目命名，目录命名，文件命名。**而其他风格是没有很好的统一标准的，比如 vue 组件命名，官方推荐就存在两种命名（大驼峰，中划线）...

A：公司内部某项目名使用 “ - ” 被误解析为 减号（-）（字符 “-” 解析失败

A：参考了 github 项目命名，存在多种命名，使用中划线命名算比较常见的（暂时没有数据支持）

## **项目命名**

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

如：my-project-name ，webapp-asclepius

## **文件夹（目录）命名**

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;
3. 有复数结构时，要采用复数命名法。如：images/components/utils/;

- 常见目录
  | **文件夹名** | **含义** |
  | --- | --- |
  | src | 源代码 |
  | images | 图片资源 |
  | test | 测试 |
  | common | 公共资源 |
  | public, static | 静态资源 |
  | components | 组件 |
  | pages, views | 页面模块 |

## **文件命名**

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

如：todo-list

## **组件命名（vue）**

1. 采用全小写字母组成
2. 名称过长时，使用中划线（-）拼接

如：todo-list

### 通用组件命名

1. 统一使用 base 开头;

如 base-button, base-table, base-form

[Vue2 官方风格指南](https://v2.cn.vuejs.org/v2/style-guide/index.html#%E8%A7%84%E5%88%99%E5%BD%92%E7%B1%BB)

**由于新项目推荐使用 Vue3 ，所以不需要特别纠结 Vue2 风格指南，只是作为一部分参考使用，如有冲突，一切以本文档为准**

## CSS 命名

~~参考 CSS 命名规范：BEM 规范，OOCSS 规范。~~

### Class 命名

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

### Id 命名

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

**对于具体命名方式，暂时没有比较好的总结，所以先强制约束以上两点命名规则，不允许出现驼峰命名！！！！！**

### 常见 Class / Id 命名

| **ClassName**        | **含义**                     |
| -------------------- | ---------------------------- |
| about                | 关于                         |
| account              | 账户                         |
| arrow                | 箭头图标                     |
| article              | 文章                         |
| aside                | 边栏                         |
| audio                | 音频                         |
| avatar               | 头像                         |
| bg,background        | 背景                         |
| bar                  | 栏                           |
| blog                 | 博客                         |
| brand                | 品牌，商标                   |
| banner               | 广告条 (顶部广告条)          |
| crumb,breadcrumb     | 面包屑                       |
| btn,button           | 按钮                         |
| caption              | 标题，说明                   |
| category             | 分类                         |
| chart                | 图表                         |
| clearfix             | 清除浮动                     |
| close                | 关闭                         |
| col,column           | 列                           |
| comment              | 评论                         |
| community            | 社区                         |
| container            | 容器                         |
| content              | 内容                         |
| copyright            | 版权                         |
| current              | 当前态，选中态               |
| default              | 默认                         |
| description          | 描述                         |
| detail               | 细节                         |
| disabled             | 不可用                       |
| drop                 | 下拉                         |
| dorpmenu             | 下拉菜单                     |
| download             | 下载                         |
| entry                | 文章，博文                   |
| error                | 错误                         |
| even                 | 偶数，常用于多行列表或表格中 |
| fail                 | 失败（提示）                 |
| faq                  | 常见问题                     |
| special-subject      | 专题                         |
| stow                 | 收起                         |
| field                | 用于表单的输入区域           |
| figure               | 图                           |
| filter               | 筛选                         |
| first                | 第一个                       |
| foot,footer          | 页脚                         |
| forum                | 论坛                         |
| friendlink           | 友情连接                     |
| gallery              | 画廊                         |
| guide                | 指南                         |
| group                | 组                           |
| head,header          | 页头                         |
| help                 | 帮助                         |
| hide                 | 隐藏                         |
| hightlight           | 高亮                         |
| home                 | 主页                         |
| homepage             | 首页                         |
| hot                  | 热门，热点                   |
| icon                 | 图标                         |
| info,information     | 信息                         |
| joinus               | 加入我们                     |
| keyword              | 关键词                       |
| last                 | 最后一个                     |
| layout               | 布局                         |
| left , right ,center | 居左，居中，居右             |
| list                 | 列表                         |
| link                 | 链接                         |
| login                | 登录                         |
| loginbar             | 登录条                       |
| logout               | 退出                         |
| logo                 | 标志                         |
| main                 | 主体                         |
| menu                 | 菜单                         |
| meta                 | 元语言                       |
| module               | 模块                         |
| more                 | 更多                         |
| msg,message          | 消息                         |
| nav,navigation       | 主导航                       |
| news                 | 新闻                         |
| nextpage             | 下一页                       |
| nub                  | 小块                         |
| odd                  | 奇数                         |
| leave                | 离开                         |
| output               | 输出                         |
| pagination           | 分页器                       |
| partner              | 合作伙伴                     |
| pop,popup            | 弹窗                         |
| preview              | 预览                         |
| previous             | 上一页                       |
| primary              | 主要                         |
| product              | 产品                         |
| progress             | 进度条                       |
| promotion            | 促销                         |
| publisher            | 生产商                       |
| recommend            | 推荐                         |
| reg,register         | 注册                         |
| save                 | 保存                         |
| screenshot           | 截图                         |
| scroll               | 滚动                         |
| search               | 搜索                         |
| searchinput          | 搜索输入框                   |
| secondary            | 次要                         |
| section              | 区块                         |
| selected             | 已选                         |
| service              | 服务                         |
| share                | 分享                         |
| show                 | 显示                         |
| sidebar              | 边栏，侧栏                   |
| siteinfo             | 网站信息                     |
| siteinfo-legal       | 法律声明                     |
| siteinfo-credits     | 信誉                         |
| sitemap              | 网站地图                     |
| slide                | 幻灯片，图片切换             |
| sort                 | 排序                         |
| status               | 状态                         |
| sub                  | 次级的，子级的               |
| subpage              | 二级页面，子页面             |
| submenu              | 子菜单                       |
| submit               | 提交                         |
| subnav               | 二级导航                     |
| subscribe            | 订阅                         |
| subtitle             | 副标题                       |
| success              | 成功（提示）                 |
| summary              | 摘要                         |
| tab                  | 标签页                       |
| tag                  | 标签                         |
| table                | 表格                         |
| txt,text             | 文本                         |
| thumbnail            | 缩略图                       |
| time                 | 时间                         |
| tip                  | 提示                         |
| title                | 标题                         |
| tool, toolbar        | 工具条                       |
| video                | 视频                         |
| vote                 | 投票                         |
| wrap，wrapper        | 容器，包，一般用于最外层     |

### Sass 命名

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

## 路由路径命名

1. 采用全小写字母组成;
2. 名称过长时，使用中划线（-）拼接;

如：user-management （**尽可能要与对应页面组件命名保持一致）**

## JavaScript 命名

~~参考 JavaScript 编写规范：ESLint，JSLint~~

#### 常量

使用大写字母、数字组成，下划线拼接，如：CONSULT_TYPE

```javascript
const API_KEY = "your_api_key";
const USER_ROLES = ["admin", "user"];
```

#### 变量

<br />

##### 普通变量

字母、数字组成，驼峰拼接，例：idCard

##### 数据变量

```javascript
// 对象数组 列表数据最好后面加个 List 或者 Data
const companyList = ref([]);
const checkedList = ref([]);
const selectedList = ref([]);
const addressList = ref([]);
const userList = [];
const tableData = [];
const arr = [];

// 非对象数组在字母后面加 s
const ids = [];
const selectedIds = [];
const activeKeys = [];
const nums = [3, 5, 6];
```

##### 布尔值变量

使用前缀 is、has 或 should：例如，isActive、hasPermission 或 shouldUpdate

##### 其他注意事项

- **变量名不应过短，要能准确完整地描述该变量所表述的事物**
  | **不好的变量名** | **好的变量名** |
  | --- | --- |
  | inp | input, priceInput |
  | day1, day2, param1 | today, tomorrow |
  | id | userId, orderId |
  | obj | orderData, houseInfos |
  | tId | removeMsgTimerId |
  | handler | submitHandler, searchHandler |

- 变量名不要使用计算机术语，如：texareaData，应该取和业务相关的名字，如：leaveMsg
- 变量名的对仗要明确，如：up/down、begin/end、opened/closed、visible/invisible、scource/target
- 不要使用中文拼音，要使用正确的英文单词，如：shijianchuo 应改成 timestamp
- 需要临时变量时，建议结合实际给变量命名，少用 temp 和 obj
- **布尔变量不要使用否定的名词，如 notOk、notReady，因为否定的词取反比较反思维，如 if (!notOk)**

#### 函数

<br />

##### 构造函数

大驼峰命名，如：Vue()

##### 类

大驼峰命名，如：User、Product

```javascript
class UserAccount {}
class ShoppingCart {}
```

##### 普通函数

小驼峰命名，**动词 + 名词方式组合**，例：getList()
一般都使用**动词 + 名词** 根据实际情况修改

常见函数命名

| **动词**      | **含义**                     | **用法示例**                                          |
| ------------- | ---------------------------- | ----------------------------------------------------- |
| get           | 获取某个值                   | getList                                               |
| set           | 设置某个值                   | setData                                               |
| switch/toggle | 切换某个值                   | switchTab/toggleTab                                   |
| check         | 判断是否可执行某个动作(权限) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has           | 判断是否含有某个值           | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is            | 判断是否为某个值             | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| load          | 加载某些数据                 | 无返回值或者返回是否加载完成的结果                    |
| change        | 改变数据                     | changeData                                            |

```javascript
编辑 onEdit     handleEdit     edit
新增 onAdd      handleAdd      add
删除 onDelete   handleDelete   delete
  批量删除 onMulDelete   handleMulDelete  mulDelete
重命名 onRename   handleRename
搜索 search
获取表格列表 getTableData  // 一般一般一般业务页面只有一个查询表格
返回 onBack    handleback   back
提交 onSubmit   hanldeSubmit   sumbit
确认 onConfirm    onOk   confirm    ok
取消 onCancel    cancel
关闭 onClose    close
保存 onSave    save
```
