<script setup>
import { withBase } from 'vitepress'

const props = defineProps({
  src: { type: String, required: true },
  title: { type: String, default: '交互式演示' },
  height: { type: String, default: '520px' }
})

const fullSrc = withBase(props.src)
</script>

<template>
  <div class="demo-embed">
    <div class="demo-embed-bar">
      <span class="demo-embed-dots"><i></i><i></i><i></i></span>
      <span class="demo-embed-title">{{ title }}</span>
      <a class="demo-embed-link" :href="fullSrc" target="_blank" rel="noopener">在新窗口打开 ↗</a>
    </div>
    <iframe :src="fullSrc" :style="{ height }" loading="lazy" allowfullscreen></iframe>
  </div>
</template>

<style scoped>
.demo-embed {
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  overflow: hidden;
  margin: 16px 0 24px;
  background: var(--vp-c-bg);
}
.demo-embed-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 14px;
  background: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}
.demo-embed-dots {
  display: flex;
  gap: 5px;
}
.demo-embed-dots i {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}
.demo-embed-dots i:nth-child(1) { background: #ff5f57; }
.demo-embed-dots i:nth-child(2) { background: #febc2e; }
.demo-embed-dots i:nth-child(3) { background: #28c840; }
.demo-embed-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--vp-c-text-2);
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.demo-embed-link {
  font-size: 12px;
  color: var(--vp-c-brand-1);
  text-decoration: none;
  white-space: nowrap;
}
.demo-embed-link:hover { text-decoration: underline; }
.demo-embed iframe {
  width: 100%;
  border: none;
  display: block;
}
</style>
