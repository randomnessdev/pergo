<script setup lang="ts">
import type { PropType } from 'vue'

defineProps({
  cta: {
    type: Array as PropType<string[]>,
    required: false
  },
  secondary: {
    type: Array as PropType<string[]>,
    required: false
  },
  snippet: {
    type: [Array, String] as PropType<string[] | string>,
    required: false
  },
  video: {
    type: Array as PropType<string[]>,
    required: false
  }
})
</script>

<template>
  <div class="pt-12 sm:pb-32 md:pt-28">
    <img
      src="~/assets/img/hero-gradient.svg"
      class="absolute top-0 right-0 hidden overflow-hidden select-none lg:hidden blur-lg"
      alt="illustration"
      width="1269"
      height="724"
    >
    <div class="relative flex flex-col items-center mx-auto max-w-7xl sm:items-start gap-y-8">
      <span
        class="bg-sky-50 text-sky-800 text-sm font-medium px-2.5 py-0.5 rounded dark:bg-sky-900/25 dark:text-blue-300 text-left break-all line-clamp-1"
      >
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>
      </span>

      <h1
        class="relative max-w-3xl text-3xl font-semibold text-center sm:text-left md:text-6xl lg:text-6xl u-text-gray-900"
      >
        <ContentSlot :use="$slots.title" unwrap="p" /><!--]-->
      </h1>
      <p class="max-w-xl text-xl leading-8 text-center text-gray-500 sm:w-3/5 sm:text-left dark:text-gray-100">
        <ContentSlot :use="$slots.description" unwrap="p" />
      </p>
      <div class="flex items-center gap-8">
        <template v-if="!$slots.actions">
          <ButtonLink v-if="cta" class="cta" bold size="medium" :href="(cta[1] as any)">
            {{ cta[0] }}
          </ButtonLink>

          <a v-if="secondary" :href="(secondary[1] as any)" class="secondary">
            {{ secondary[0] }}
          </a>
        </template>
        <ContentSlot v-else :use="$slots.actions" unwrap="p" />
      </div>
    </div>
    <div class="absolute hidden top-24 first-letter:right-0 sm:block left-1/3 sm:left-1/3 md:left-1/2 lg:left-2/3">
      <!--[-->
      <div style="opacity: 1;" class="transition duration-1000">
        <div class="">
          <!--<img src="~/assets/img/illus.png" alt="illustration" class="">  [-->
        </div>
      </div><!--]-->
    </div>
  </div>
</template>
<style scoped>
.perspective {
  perspective: 500px;
}

.ai {
  transform: rotateX(9deg) rotateY(159deg);
  transform-style: preserve-3d;
}
</style>
