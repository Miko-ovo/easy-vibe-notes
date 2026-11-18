import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { execFile } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DOCS = path.join(ROOT, 'docs')
const PORT = process.env.EDITOR_PORT || 5176

function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' })
  res.end(JSON.stringify(obj))
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let data = ''
    req.on('data', c => (data += c))
    req.on('end', () => {
      try { resolve(JSON.parse(data || '{}')) } catch (e) { reject(e) }
    })
    req.on('error', reject)
  })
}

function resolveMd(p) {
  if (typeof p !== 'string' || !p.endsWith('.md') || p.includes('..')) return null
  const full = path.resolve(DOCS, p)
  if (!full.startsWith(DOCS + path.sep)) return null
  return full
}

function listMd(dir, base = '') {
  let out = []
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    if (e.name.startsWith('.')) continue
    const full = path.join(dir, e.name)
    const rel = base ? `${base}/${e.name}` : e.name
    if (e.isDirectory()) out = out.concat(listMd(full, rel))
    else if (e.name.endsWith('.md')) out.push(rel)
  }
  return out
}

function run(cmd, args) {
  return new Promise(resolve => {
    execFile(cmd, args, { cwd: ROOT, timeout: 60000 }, (err, stdout, stderr) => {
      resolve({ ok: !err, out: (stdout || '') + (stderr || '') })
    })
  })
}

const NOTE_TEMPLATE = t => `# ${t}

<div class="note-meta">
  <span>状态：写作中</span>
</div>

## 🎯 学习目标

- [ ] 

## 📚 核心概念

## 💡 我的理解与思考

## ✏️ 作业与练习

## ❓ 疑问清单
`

const server = http.createServer(async (req, res) => {
  const u = new URL(req.url, 'http://x')
  const p = u.pathname
  try {
    if (p === '/api/files') return json(res, 200, { files: listMd(DOCS) })

    if (p === '/api/index') {
      const files = listMd(DOCS).map(f => {
        let title = ''
        try {
          const c = fs.readFileSync(path.join(DOCS, f), 'utf8')
          const m = c.match(/^#\s+(.+)$/m)
          title = m ? m[1].trim() : ''
        } catch {}
        return { path: f, title }
      })
      return json(res, 200, { files })
    }

    if (p === '/api/file') {
      const full = resolveMd(u.searchParams.get('path'))
      if (!full) return json(res, 400, { error: '非法路径' })
      return json(res, 200, { content: fs.readFileSync(full, 'utf8') })
    }

    if (p === '/api/save' && req.method === 'POST') {
      const body = await readBody(req)
      const full = resolveMd(body.path)
      if (!full) return json(res, 400, { error: '非法路径' })
      fs.mkdirSync(path.dirname(full), { recursive: true })
      fs.writeFileSync(full, String(body.content ?? ''), 'utf8')
      return json(res, 200, { ok: true })
    }

    if (p === '/api/create' && req.method === 'POST') {
      const body = await readBody(req)
      const full = resolveMd(body.path)
      if (!full) return json(res, 400, { error: '非法路径（需以 .md 结尾，位于 docs/ 下）' })
      if (fs.existsSync(full)) return json(res, 400, { error: '文件已存在' })
      fs.mkdirSync(path.dirname(full), { recursive: true })
      fs.writeFileSync(full, NOTE_TEMPLATE(body.title || '新笔记'), 'utf8')
      return json(res, 200, { ok: true, path: body.path })
    }

    if (p === '/api/publish' && req.method === 'POST') {
      const body = await readBody(req)
      const msg = String(body.message || 'update notes').slice(0, 100)
      const add = await run('git', ['-C', ROOT, 'add', '-A'])
      const commit = await run('git', ['-C', ROOT, 'commit', '-m', msg])
      const nothing = /nothing to commit/.test(commit.out)
      const push = nothing ? { ok: true, out: '(没有改动需要提交)' } : await run('git', ['-C', ROOT, 'push', 'origin', 'main'])
      const ok = add.ok && (commit.ok || nothing) && push.ok
      return json(res, ok ? 200 : 500, { ok, out: [add.out, nothing ? '(无改动)' : commit.out, push.out].filter(Boolean).join('\n') })
    }

    // 静态文件：编辑器页面
    if (p === '/' || p === '/index.html') {
      const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8')
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      return res.end(html)
    }
    return json(res, 404, { error: 'not found' })
  } catch (e) {
    return json(res, 500, { error: String(e.message || e) })
  }
})

server.listen(PORT, () => {
  console.log(`✍️  笔记编辑器已启动: http://localhost:${PORT}`)
  console.log(`   （仅本地工具，不参与站点构建部署）`)
})
