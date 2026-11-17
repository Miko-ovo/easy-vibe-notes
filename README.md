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

## ✍️ 如何使用

- **添加笔记**：在 `docs/notes/` 对应阶段目录新建 `.md` 文件，再到 `docs/.vitepress/config.mts` 的 `sidebar` 注册，模板见站内[《如何写学习笔记》](https://miko-ovo.github.io/easy-vibe-notes/guide/how-to-note)
- **展示小项目**：把静态页面放进 `docs/public/projects/<项目名>/`，笔记里用 `<DemoEmbed>` 组件内嵌，详见[《如何展示小项目》](https://miko-ovo.github.io/easy-vibe-notes/guide/how-to-project)

## 💻 本地运行

```bash
npm install
npm run dev        # 开发预览 http://localhost:5173
npm run build      # 构建产物到 docs/.vitepress/dist
```

## 📄 致谢

学习内容来自 [Datawhale Easy-Vibe](https://github.com/datawhalechina/easy-vibe) 开源教程（CC BY-NC-SA 4.0），本仓库仅为个人学习笔记。
