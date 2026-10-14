<template>
  <div class="flex-1 flex items-center justify-center">
    <NuxtImg
      src="/landing/TfH0okk.webp"
      class="h-60 floating-logo"
      alt="Nuxt 3D Logo"
    />
  </div>
</template>

<style>
.floating-logo {
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.group:hover .floating-logo {
  transform: translateY(-20px);
}
</style>