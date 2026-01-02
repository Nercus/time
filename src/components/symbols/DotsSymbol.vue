<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <div v-if="!isArrow" class="flex flex-col items-center gap-2 pt-4">
    <span class="font-mono text-gray-900 text-sm tracking-wide"> {{ props.label }}</span>
    <div class="gap-2 md:gap-4 grid max-w-30" :class="columns">
      <Motion v-for="i in props.max" :key="i" :animate="props.num >= i ? { scale: 1 } : { scale: 0.3 }" :initial="{ scale: 0.3 }" :transition="{ type: 'spring', duration: 0.5, bounce: 0.3 }" class="flex justify-center items-center rounded-full size-2 md:size-3 font-mono text-lg select-none will-change-transform" :class="props.num >= i ? color : 'bg-gray-400'" />
    </div>
  </div>
  <div v-else class="gap-1 grid grid-cols-5" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <motion.div
      v-for="i in 15" :key="i"
      class="flex justify-center items-center bg-blue-900 rounded-full size-2 font-mono text-lg select-none will-change-transform"
      :animate="Math.floor((i - 1) / 5) % 2 === 1 && isHovering ? { translateX: props.arrow === 'right' ? 8 : -8 } : { translateX: 0 }" />
  </div>
</template>

<script setup lang="ts">
import { Motion, motion } from 'motion-v'

const props = defineProps<{
  num: number
  max: number
  color: 'blue-400' | 'blue-500' | 'blue-600' | 'blue-700' | 'blue-800' | 'blue-900'
  arrow?: 'left' | 'right'
  label?: string
}>()

const isArrow = computed(() => props.arrow !== undefined)
const isHovering = ref(false)

const color = computed(() => {
  switch (props.color) {
    case 'blue-400':
      return 'bg-blue-400'
    case 'blue-500':
      return 'bg-blue-500'
    case 'blue-600':
      return 'bg-blue-600'
    case 'blue-700':
      return 'bg-blue-700'
    case 'blue-800':
      return 'bg-blue-800'
    case 'blue-900':
      return 'bg-blue-900'
    default:
      return 'bg-gray-200'
  }
})

const columns = computed(() => {
  if (props.max <= 10) return 'grid-cols-1'
  if (props.max <= 20) return 'grid-cols-2'
  if (props.max <= 30) return 'grid-cols-3'
  if (props.max <= 40) return 'grid-cols-4'
  return 'grid-cols-5'
})
</script>
