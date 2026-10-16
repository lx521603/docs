<script setup lang="ts">
definePageMeta({ layout: 'default' })

const { data: posts } = await useAsyncData('blog-online', () =>
  queryCollection('docs')
    .where('path', 'LIKE', '/shot/%')
    .all()
)
useSeoMeta({
  title: '光影手记',
  ogTitle: '光影手记',
  description: '用镜头代替眼睛，记录那些被光线温柔抚摸的角落与日常。',
  ogDescription: '用镜头代替眼睛，记录那些被光线温柔抚摸的角落与日常。'
})
</script>

<template>
  <UContainer>
    

    <UPageBody>
      <UBlogPosts>
        <!-- 注意：注释必须放在标签外面，不能放在属性中间 -->
        <UBlogPost
          v-for="(post, index) in posts"
          :key="post.path"
          :to="post.path"
          :title="post.title"
          :description="post.description"
          :image="post.cover || (post.image?.src || post.image)"
          :date="post.date ? new Date(post.date).toLocaleDateString('en', { year: 'numeric', month: 'short', day: 'numeric' }) : undefined"
          :badge="post.meta?.badge || post.badge"
          :authors="post.meta?.authors || post.authors"
          :orientation="index === 0 ? 'horizontal' : 'vertical'"
          :class="[index === 0 && 'col-span-full']"
          variant="naked"
          :ui="{
            description: 'line-clamp-2'
          }"
        />
      </UBlogPosts>
    </UPageBody>
  </UContainer>
</template>