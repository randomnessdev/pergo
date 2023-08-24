<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Features'
  },
  cols: {
    type: Number,
    default: 3
  },
  gap: {
    type: Number,
    default: 4
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
    <div :class="'grid md:grid-cols-' + cols + ' gap-' + gap">
      <slot />
    </div>
  </section>
  <div class="hidden gap-12 md:grid-cols-2 md:grid-cols-3 md:grid-cols-4" />
</template>

<style scoped lang="ts">
css({
  '.card-grid': {
    position: 'relative',
    paddingBottom: '{space.20}',
    '@sm': {
      paddingBottom: '{space.24}',
    },
    '@lg': {
      paddingBottom: '{space.32}',
    },
    '.title': {
      marginBottom: '{space.4}',
      fontSize: '{text.3xl.fontSize}',
      lineHeight: '{text.3xl.lineHeight}',
      fontWeight: '{fontWeight.bold}',
      letterSpacing: '{letterSpacing.tight}',
      color: '{elements.text.primary.color.static}',
      '@sm': {
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
      }
    },
    '.layout': {
      display: 'grid',
      gap: '{space.4}',
      textAlign: 'left',
      '@sm': {
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))'
      },
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      },
      '@2xl': {
        gap: '{space.8}'
      }
    }
  }
})
</style>
