# 示例项目：提示词实验室

<div class="note-meta">
  <span>🎯 项目类型</span>
  <span>纯前端 · 单页 HTML</span>
</div>

## 项目简介

一个帮助练习「三大核心要素」的交互式小工具：填入任务、输入材料、要求、输出格式，自动生成结构化 Prompt，可一键复制。

- **对应章节**：[提示词工程导论](/notes/appendix/prompt-engineering)
- **技术栈**：原生 HTML + CSS + JS（单文件，无需构建）

## 在线演示

<DemoEmbed src="/projects/demo/index.html" title="提示词实验室" height="560px" />

## 关键实现思路

核心是根据四个输入字段拼接最小模板：

```js
const prompt = [
  `任务：${task}`,
  input ? `输入：${input}` : null,
  `要求：${requirements}`,
  `输出：${output}`
].filter(Boolean).join('\n')
```

## 源码

完整源码位于 `docs/public/projects/demo/index.html`（单文件约 200 行）。
