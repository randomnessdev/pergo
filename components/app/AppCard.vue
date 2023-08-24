<script setup lang="ts">
defineProps({
  slug: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  iconClass: {
    type: String,
    default: ''
  },
  blurry: {
    type: Boolean,
    default: true,
    required: false
  }
})
</script>

<template>
  <div :class="{ blurry }" class="relative flex flex-col w-full p-8 transition duration-300 bg-white border shadow-md hover:scale-105 rounded-xl border-slate-50 dark:border-slate-800 hover:shadow-2xl dark:bg-slate-800 dark:hover:bg-slate-900">
    <NuxtLink :to="'/nos-prestations/' + slug">
      <Icon v-if="icon" :name="icon" class="dark:text-green-50" />
      <slot />
      <div>
        <h2 class="title">
          <ContentSlot :use="$slots.title" unwrap="p">
            Card title
          </ContentSlot>
        </h2>
        <p class="description">
          <ContentSlot :use="$slots.description" unwrap="p">
            Card description
          </ContentSlot>
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped lang="ts">
css({

  '.icon': {
    display: 'inline-block',
    marginBottom: '{space.2}',
    width: '{space.6}',
    height: '{space.6}'
  },
  '.title': {
    marginBottom: '{space.2}',
    fontSize: '{text.lg.fontSize}',
    lineHeight: '{text.lg.lineHeight}',
    fontWeight: '{fontWeight.semibold}',
    color: '{elements.text.primary.color.static}'
  },
  '.description': {
    fontSize: '{text.sm.fontSize}',
    lineHeight: '{text.sm.lineHeight}',
    fontWeight: '{fontWeight.medium}',
    color: '{elements.text.secondary.color.static}'
  }

})
</style>
