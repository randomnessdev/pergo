<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  },
  class: {
    type: String,
    default: 'hidden gap-12 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4'
  }
})
</script>

<template>
  <section class="container relative flex flex-col pt-24 pb-4 transition duration-700 translate-y-0 opacity-100 sm:pb-8 md:pb-12 lg:pb-20">
    <ContentSlot :use="$slots.root" />
    <h2 class="max-w-lg pb-6 text-3xl font-semibold md:text-4xl lg:text-5xl sm:max-w-xl md:max-w-3xl lg:max-w-4xl u-text-gray-900">
      <ContentSlot :use="$slots.title" unwrap="p" />
    </h2>
    <p class="max-w-3xl mb-12 text-xl">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>
    <div class="gap-16 columns-2">
      <slot />
    </div>
  </section>
</template>
