<script setup lang="ts">
defineProps({
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
  <div class="mb-12">
    <h3 class="flex items-center mb-4 text-lg font-medium text-gray-900 dark:text-white">
      <Icon name="heroicons-solid:question-mark-circle" class="w-5 h-5 mr-2 text-gray-500" />
      <ContentSlot :use="$slots.title" unwrap="p">
        Card title
      </ContentSlot>
    </h3>
    <p class="text-gray-600 dark:text-gray-400">
      <ContentSlot :use="$slots.description" unwrap="p">
        Card description
      </ContentSlot>
    </p>
  </div>
</template>
