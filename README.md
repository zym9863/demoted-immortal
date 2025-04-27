# 谪仙诗词鉴赏 (Demoted Immortal Poetry Appreciation)

[中文](README.md) | [English](README_EN.md)

一个用于展示和鉴赏古典诗词的 Vue 应用，专注于"谪仙"主题的诗词。

## 项目介绍

"谪仙"原指被贬谪到人间的仙人，后多用来称赞才华横溢、风格超凡的诗人，如李白被称为"诗仙"，苏轼被称为"词仙"。这些诗人的作品意境高远，想象丰富，语言优美，充分体现了他们旷达豁达的胸怀和对生命的热爱。

本项目收录了与"谪仙"意境相关的古典诗词作品，为用户提供高质量的排版，并附带注释、背景介绍、名家解读等，营造沉浸式的鉴赏体验。

## 功能特点

- 精选古典诗词展示，包括李白、苏轼等著名诗人的作品
- 诗词详情页面，提供创作背景、注释和鉴赏内容
- 按作者、朝代和内容搜索和筛选诗词
- 古典中国风视觉设计，营造沉浸式体验
- 响应式布局，适配各种设备

## 视觉设计

项目采用了中国古典风格的设计元素：

- **色彩方案**：以红褐色系为主色调，代表古典文化的厚重感；青绿色系为辅助色调，代表文人墨客的清雅；金色系为点缀色调，代表诗词的华彩
- **字体**：使用 Noto Serif SC 等衬线字体，增强古典韵味
- **装饰元素**：采用古典边框、水墨效果背景等装饰元素
- **图标**：使用莲花、卷轴等中国传统元素的图标

## 项目结构

```
src/
├── assets/         # 静态资源
│   ├── icons/      # 自定义图标
│   └── styles/     # 样式文件
├── components/     # 组件
│   ├── icons/      # 图标组件
│   └── ...         # 其他组件
├── data/           # 数据文件
│   └── poems.js    # 诗词数据
├── router/         # 路由配置
└── views/          # 页面视图
    ├── HomeView.vue       # 首页
    ├── PoemListView.vue   # 诗词列表页
    └── PoemDetailView.vue # 诗词详情页
```

## 技术栈

- Vue 3 - 前端框架
- Vue Router - 路由管理
- Vite - 构建工具
- CSS Variables - 主题样式管理

## 开发环境设置

### 推荐的 IDE 配置

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (并禁用 Vetur)

### 自定义配置

查看 [Vite 配置参考](https://vite.dev/config/)

### 项目设置

```sh
npm install
```

### 开发环境编译和热重载

```sh
npm run dev
```

### 生产环境编译和压缩

```sh
npm run build
```

### 预览生产构建

```sh
npm run preview
```
