# 如何展示小项目

学习过程中做的练手项目，可以通过两种方式展示在笔记里。

## 方式一：内嵌交互式页面（推荐，和原教程一样）

1. 把做好的项目（单页 HTML / 打包后的前端项目）放到 `docs/public/projects/<项目名>/` 目录
2. 确保入口文件为 `index.html`
3. 在任何笔记页中使用 `<DemoEmbed>` 组件嵌入：

```markdown
<DemoEmbed
  src="/projects/demo/index.html"
  title="提示词实验室"
  height="560px"
/>
```

嵌入效果见 [示例：提示词实验室](/projects/demo-project)。

::: warning 注意
内嵌项目必须是静态页面（纯 HTML/CSS/JS 或已打包的产物）。如果是 Vue/React 源码项目，先执行构建（如 `npm run build`），再把 `dist` 目录内容复制到 `docs/public/projects/<项目名>/`。
:::

## 方式二：项目卡片 + 详情页

1. 在 `docs/projects/` 下新建项目详情页（如 `my-snake.md`），页面里放项目介绍 + 截图 + `<DemoEmbed>` + 源码链接
2. 在项目墙 [docs/projects/index.md](/projects/) 中添加一张卡片：

```html
<a class="project-card" href="/projects/my-snake">
  <span class="project-tag">第一阶段</span>
  <h3>贪吃蛇</h3>
  <p>用 AI 一句话生成的第一个小游戏，学会了……</p>
</a>
```

## 方式三：源码仓库外链

项目托管在 GitHub / CodeSandbox / StackBlitz 时，直接在详情页放外链即可，不必打包进本站。

## 目录结构参考

```
docs/
├── public/
│   └── projects/          # 所有可嵌入的演示项目
│       └── demo/
│           └── index.html
├── projects/              # 项目详情页（markdown）
│   ├── index.md           # 项目墙
│   └── demo-project.md
└── notes/                 # 学习笔记
```
