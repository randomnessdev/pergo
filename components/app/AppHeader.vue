<script setup lang="ts">
const { config } = useDocus()
const { navigation } = useContent()

const hasDialog = computed(() => navigation.value?.length > 1)

</script>

<template>
  <header :class="{ 'has-dialog': hasDialog, 'has-doc-search': hasDocSearch }">
    <Container :fluid="config?.header?.fluid ">
      <div class="section left">
        <AppHeaderDialog v-if="hasDialog" />
        <AppHeaderLogo />
      </div>

      <div class="section center">
        <AppHeaderLogo />
        <!-- <AppHeaderNavigation /> -->
      </div>

      <div class="section right">
        <AppSearch v-if="hasDocSearch" />
        <!-- <ThemeSelect /> -->
        <AppHeaderNavigation />
        <div class="social-icons">
          <AppSocialIcons />
        </div>
      </div>
    </Container>
  </header>
</template>

<style scoped lang="ts">
css({
  ':deep(.icon)': {
    width: '{space.4}',
    height: '{space.4}'
  },

  '.navbar-logo': {
    '.left &': {
      '.has-dialog &': {
        display: 'none',
        '@lg': {
          display: 'block'
        }
      },
    },
    '.center &': {
      display: 'block',
      '@lg': {
        display: 'none'
      }
    }
  },

  header: {
    backdropFilter: '{elements.backdrop.filter}',
    position: 'sticky',
    top: 0,
    zIndex: 10,
    width: '100%',
    borderBottom: '1px solid {elements.border.primary.static}',
    backgroundColor: '{elements.backdrop.background}',
    height: '{docus.header.height}',

    '.container': {
      display: 'grid',
      height: '100%',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      gap: '{space.2}',
    },

    '.section': {
      display: 'flex',
      alignItems: 'center',
      flex: 'none',
      '&.left': {
        gridColumn: 'span 3 / span 3',
        '@lg': {
          marginLeft: 0
        },
      },
      '&.center': {
        gridColumn: 'span 6 / span 6',
        justifyContent: 'center',
        flex: '1'
      },
      '&.right': {
        display: 'flex',
        gridColumn: 'span 3 / span 3',
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 'none',
        marginRight: 'calc(0px - {space.4})',
        '.social-icons': {
          display: 'none',
          '@md': {
            display: 'flex',
            alignItems: 'center',
          }
        }
      }
    }
  }
})
</style>
