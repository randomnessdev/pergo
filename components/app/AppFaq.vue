<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  },
})
</script>

<template>
  <section class="container relative flex flex-col pt-24 pb-4 transition duration-700 translate-y-0 opacity-100 sm:pb-8 md:pb-12 lg:pb-20">
    <div class="gap-16 columns-2">
      <slot />
    </div>
  </section>
</template>
