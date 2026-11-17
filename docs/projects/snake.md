# 项目：贪吃蛇（第一个作业）

<div class="note-meta">
  <span>🚀 第一阶段 · 零基础入门</span>
  <span>原生 Canvas · 已完成一半</span>
</div>

## 项目简介

第一个 Vibe Coding 作业：经典贪吃蛇。原版基于 **Next.js + React + Tailwind**，用 Canvas 逐帧绘制；本站展示的是它的**单文件静态移植版**（逻辑与视觉完全一致），方便直接内嵌到笔记里。

- **对应章节**：[01 · 第一个小游戏：贪吃蛇](/notes/stage1/01-first-game)
- **技术要点**：Canvas 渲染、状态机、变速主循环、localStorage 持久化

## 在线演示

<DemoEmbed src="/projects/snake/index.html" title="贪吃蛇 · 第一个作业" height="640px" />

## 实现要点

| 模块 | 做法 |
| --- | --- |
| 渲染 | Canvas 2D 逐帧绘制：渐变背景 + 网格底纹 + 蛇身头绿尾青渐变 + 会脉动的食物（发光/高光/叶子） |
| 主循环 | `setTimeout` 链驱动游戏步进，`requestAnimationFrame` 只负责食物脉动动画，两者分离 |
| 状态管理 | 游戏实时数据放 `ref`（避免定时器闭包读到旧值），UI 数据放 `state` 驱动重渲染 |
| 方向控制 | `direction`（当前）与 `nextDirection`（缓冲）分离，禁止 180° 反向，防止自杀 |
| 难度曲线 | 每吃一颗食物速度间隔 -4ms，从 140ms 递减到 70ms 下限 |
| 持久化 | 最高分写入 `localStorage('snake-high-score')` |

## 学到 / 踩过的坑

- 定时器回调和闭包里的数据要用 ref 存，否则读到的永远是旧值
- 方向输入要"缓冲一步"再应用，否则快速连按两个键会瞬间掉头自杀
- 食物生成不能随机到蛇身上：先收集所有空格子再随机取
- **发现一个计分小问题**：原版吃第一颗食物得分是 20 而不是 10（`newScore` 公式里多加了一次 `SCORE_PER_FOOD`），静态版已修正为每颗 +10

## 操作说明

方向键 / WASD 移动 · 空格暂停/继续 · Enter 开始/重玩 · 移动端有虚拟方向键
