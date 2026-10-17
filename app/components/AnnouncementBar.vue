<script setup lang="ts">
// 1. 配置直接写在这里，不依赖外部，绝对不报错
const CONFIG = {
  enabled: true,
  text: '✨ 测试公告',
  link: '/blog',
  linkText: '点击查看 →',
  version: 'v2'
}

const storageKey = `announcement-dismissed-${CONFIG.version}`
const dismissed = useState(`announcement-${CONFIG.version}`, () => false)

onMounted(() => {
  if (localStorage.getItem(storageKey) === 'true') {
    dismissed.value = true
  }
})

function handleDismiss() {
  dismissed.value = true
  localStorage.setItem(storageKey, 'true')
}
</script>

<template>
  <div
    v-if="CONFIG.enabled && !dismissed"
    style="
      position: relative;
      z-index: 9999;
      background-color: #111827;
      color: #f3f4f6;
      text-align: center;
      padding: 10px 16px;
      font-size: 14px;
      font-weight: 500;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    "
  >
    <span>{{ CONFIG.text }}</span>
    
    <NuxtLink 
      :to="CONFIG.link" 
      style="color: #ffffff; text-decoration: underline; text-underline-offset: 3px; font-weight: 600;"
    >
      {{ CONFIG.linkText }}
    </NuxtLink>

    <button
      type="button"
      aria-label="关闭"
      @click="handleDismiss"
      style="
        position: absolute; right: 16px; top: 50%; transform: translateY(-50%);
        background: transparent; border: none; color: #9ca3af;
        font-size: 18px; cursor: pointer; padding: 4px; line-height: 1;
      "
      onmouseover="this.style.color='#ffffff'"
      onmouseout="this.style.color='#9ca3af'"
    >✕</button>
  </div>
</template>