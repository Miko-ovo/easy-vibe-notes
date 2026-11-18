# 📚 Easy-Vibe 学习笔记

跟着 [Easy-Vibe 教程](https://datawhalechina.github.io/easy-vibe/)学习 Vibe Coding 的个人笔记与项目展示站，基于 VitePress 构建。

## 🔗 在线阅读

**[https://miko-ovo.github.io/easy-vibe-notes/](https://miko-ovo.github.io/easy-vibe-notes/)**

> 推送到 `main` 分支后，GitHub Actions 会自动构建并部署，约 1-2 分钟生效。

## 🗺️ 站点结构

| 板块 | 内容 |
| --- | --- |
| 🚀 第一阶段 · 零基础入门 | 贪吃蛇、AI IDE、产品创意、原型、AI 能力 |
| 🛠️ 第二阶段 · 全栈开发 | 前端设计、后端（Git/Supabase/API）、大项目实战 |
| ⚡ 第三阶段 · 高级进阶 | Claude Code、跨平台、RAG 与 Agent |
| 📎 附录笔记 | 提示词工程导论等 |
| 🏆 项目展示 | 贪吃蛇（第一个作业）、提示词实验室 |

## ✍️ 如何更新内容

推荐用内置的**本地块编辑器**（飞书式所见即所得，仅本机运行，不会出现在线上站点）：

```bash
npm run dev      # 终端 1：站点预览 http://localhost:5173
npm run editor   # 终端 2：编辑器 http://localhost:5176
```

- 左侧文件树可直接**新建 / 重命名 / 删除**笔记
- 编辑区即预览：直接打字，输入 `#`、`-`、`[]`、`>`、`` ``` `` 自动变换块样式
- 块可拖动排序，块间悬停出现插入线
- 保存后站点热更新，点「发布」自动 commit + push，约 1 分钟线上生效

> 新增/删除笔记后，记得在 `docs/.vitepress/config.mts` 的 `sidebar` 同步侧边栏条目。

## 💻 本地运行

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run editor     # 块编辑器 http://localhost:5176
npm run build      # 构建产物到 docs/.vitepress/dist
```

## 📄 致谢

学习内容来自 [Datawhale Easy-Vibe](https://github.com/datawhalechina/easy-vibe) 开源教程（CC BY-NC-SA 4.0），本仓库仅为个人学习笔记。
