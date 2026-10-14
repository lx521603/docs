<script setup lang="ts">
import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [{
  label: 'Zaeth',
  to: 'https://zaeth.com/'
}, {
  label: 'Mirai Studio',
  to: 'https://mirai.st/'
}, {
  label: 'Asura',
  to: 'https://asura.im/',
  color: 'primary',
  checked: true,
  type: 'checkbox'
}, {
  label: 'Velvify',
  to: 'https://velvify.com/'
}, {
  label: 'Sai',
  to: 'https://sai.st/'
}, {
  label: '91',
  to: 'https://91.pt/'
}]
</script>

<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="items"
    :content="{ align: 'start' }"
    :ui="{ content: 'min-w-fit' }"
    size="xs"
  >
    <UButton
      label="Asura"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-primary/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' ')
      }"
    />
  </UDropdownMenu>
</template>
