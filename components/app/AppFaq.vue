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
    <div class="gap-16 columns-2">
      <slot />
    </div>
  </section>
</template>
