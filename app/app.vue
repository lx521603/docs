<script setup lang="ts">
const { seo } = useAppConfig()

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'zh_CN'
  }
})

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image'
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
  <div
  class="fixed bottom-4 left-1/2 -translate-x-1/2 z-[9999] bg-gray-900 h-[48px] w-[320px] sm:w-[360px] rounded-full border border-white/30"
  >
  <div class="flex justify-around items-center h-full px-2">
    <NuxtLink to="/" class="p-2 rounded-full hover:bg-white/10 transition-colors">
      <UIcon name="i-lucide-home" class="size-6 text-white" />
    </NuxtLink>
    
    <NuxtLink to="/getting-started" class="p-2 rounded-full hover:bg-white/10 transition-colors">
      <UIcon name="i-lucide-book-open" class="size-6 text-white" />
    </NuxtLink>
    
    <NuxtLink to="/blog" class="p-2 rounded-full hover:bg-white/10 transition-colors">
      <UIcon name="i-lucide-camera" class="size-6 text-white" />
    </NuxtLink>
    
    <NuxtLink to="/tools" class="p-2 rounded-full hover:bg-white/10 transition-colors">
      <UIcon name="i-lucide-wrench" class="size-6 text-white" />
    </NuxtLink>
  </div>
</div>
</template>