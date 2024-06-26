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
  <section class="!text-center block-hero">
    <div class="layout">
      <div class="content">
        <p v-if="$slots.announce" class="announce">
          <ContentSlot :use="$slots.announce" unwrap="p" />
        </p>

        <h1 v-if="$slots.title" class="title">
          <ContentSlot :use="$slots.title" unwrap="p" />
        </h1>

        <p v-if="$slots.description" class="description">
          <ContentSlot :use="$slots.description" unwrap="p" />
        </p>

        <div v-if="$slots.extra" class="extra">
          <ContentSlot :use="$slots.extra" unwrap="p" />
        </div>

        <div class="actions">
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

      <div class="support">
        <slot name="support">
          <Terminal v-if="snippet" :content="snippet" />
        </slot>
      </div>
    </div>
  </section>
</template>

<style scoped lang="ts">
css({
  '.block-hero': {
    padding: '{space.20} 0',
    '@sm': {
      padding: '{space.24} 0',
    },
    '@lg': {
      padding: '{space.32} 0',
    },
    '.layout': {
      display: 'grid',
      gap: '{space.8}',
      '@lg': {
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))'
      }
    },
    '.content': {
      '@lg': {
        gridColumn: 'span 2 / span 2'
      },
      '.announce': {
        marginBottom: '{space.2}',
        textAlign: 'center',
        '@lg': {
          textAlign: 'left'
        }
      },
      '.title': {
        color: '{elements.text.primary.color.static}',
        fontWeight: '{fontWeight.bold}',
        letterSpacing: '{letterSpacing.tight}',
        textAlign: 'center',
        fontSize: '{text.4xl.fontSize}',
        lineHeight: '{text.4xl.lineHeight}',
        '@sm': {
          fontSize: '{text.5xl.fontSize}',
          lineHeight: '{text.5xl.lineHeight}',
        },
        '@lg': {
          fontSize: '{text.6xl.fontSize}',
          lineHeight: '{text.6xl.lineHeight}',
          textAlign: 'left'
        }
      },
      '.description': {
        marginTop: '{space.4}',
        fontSize: '{text.lg.fontSize}',
        lineHeight: '{text.lg.lineHeight}',
        textAlign: 'center',
        color: '{elements.text.secondary.color.static}',
        '@lg': {
          textAlign: 'left'
        }
      },
      '.extra': {
        marginTop: '{space.6}'
      },
      '.actions': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '{space.4}',
        marginTop: '{space.6}',
        '@sm': {
          marginTop: '{space.10}',
          flexDirection: 'row',
          gap: '{space.6}'
        },
        '@lg': {
          justifyContent: 'flex-start'
        },
        '.cta': {
          marginBottom: 0
        },
        '.secondary': {
          fontWeight: '{fontWeight.medium}',
          color: '{elements.text.secondary.color.static}',
          '&:hover': {
            color: '{elements.text.secondary.color.hover}'
          }
        }
      }
    }
  }
})
</style>
