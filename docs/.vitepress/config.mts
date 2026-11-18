import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'Easy-Vibe 学习笔记',
  description: '跟着 Easy-Vibe 教程学习 Vibe Coding 的个人笔记与项目展示',
  // GitHub Pages 项目站点需要子路径；本地开发用 /
  base: process.env.CI ? '/easy-vibe-notes/' : '/',
  ignoreDeadLinks: true,
  themeConfig: {
    siteTitle: '📚 Easy-Vibe 学习笔记',
    nav: [
      { text: '首页', link: '/' },
      { text: '学习笔记', link: '/notes/stage1/01-first-game' },
      { text: '项目展示', link: '/projects/' },
      {
        text: '原教程',
        items: [
          { text: 'Easy-Vibe 在线阅读', link: 'https://datawhalechina.github.io/easy-vibe/' },
          { text: 'GitHub 仓库', link: 'https://github.com/datawhalechina/easy-vibe' }
        ]
      }
    ],
    sidebar: {
      '/notes/': [
        {
          text: '🚀 第一阶段 · 零基础入门',
          collapsed: false,
          items: [
            { text: '01 · 第一个小游戏：贪吃蛇', link: '/notes/stage1/01-first-game' },
            { text: '02 · AI IDE 工具', link: '/notes/stage1/02-ai-ide' },
            { text: '03 · 寻找与验证产品创意', link: '/notes/stage1/03-idea' },
            { text: '04 · 构建产品原型', link: '/notes/stage1/04-prototype' },
            { text: '05 · 集成 AI 能力', link: '/notes/stage1/05-ai-capability' }
          ]
        },
        {
          text: '🛠️ 第二阶段 · 全栈开发',
          collapsed: true,
          items: [
            { text: '01 · 前端：设计与组件', link: '/notes/stage2/01-frontend' },
            { text: '02 · 后端：Git / Supabase / API', link: '/notes/stage2/02-backend' },
            { text: '03 · 大项目实战', link: '/notes/stage2/03-project' }
          ]
        },
        {
          text: '⚡ 第三阶段 · 高级进阶',
          collapsed: true,
          items: [
            { text: '01 · Claude Code 核心技能', link: '/notes/stage3/01-claude-code' },
            { text: '02 · 跨平台开发', link: '/notes/stage3/02-cross-platform' },
            { text: '03 · AI 进阶：RAG 与 Agent', link: '/notes/stage3/03-ai-advanced' }
          ]
        },
        {
          text: '📎 附录笔记',
          collapsed: false,
          items: [
            { text: '提示词工程导论', link: '/notes/appendix/prompt-engineering' }
          ]
        }
      ],
      '/projects/': [
        {
          text: '🏆 项目展示',
          items: [
            { text: '项目墙', link: '/projects/' },
            { text: '贪吃蛇（第一个作业）', link: '/projects/snake' },
            { text: '示例：提示词实验室', link: '/projects/demo-project' }
          ]
        }
      ]
    },
    outline: { level: [2, 3], label: '本页目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    lastUpdated: { text: '最后更新于' },
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '目录',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: '搜索笔记', buttonAriaLabel: '搜索笔记' },
          modal: { noResultsText: '没有找到结果', placeholder: '搜索笔记内容' }
        }
      }
    }
  }
})
