<template>
  {{ metaColor }}
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
</template>

<script setup lang="ts">
const time = useTime()
const { updateFavicon } = useDynamicFavicon()

// Update favicon when time changes
watch(time.currentDate, (newDate) => {
  updateFavicon(newDate)
}, { immediate: true })

const metaColor = ref('')
function updateThemeColor() {
  metaColor.value = document.head.querySelector('meta[name="theme-color"]')?.getAttribute('content') || 'no theme color'
}

onMounted(() => {
  setInterval(() => {
    updateThemeColor()
  }, 1000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
