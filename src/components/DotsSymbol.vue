<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <div v-if="!isArrow" class="flex flex-col items-center gap-2">
    <span class="text-gray-200 text-sm italic tracking-wide"> {{ props.label }}</span>
    <div class="gap-2 md:gap-4 grid max-w-30" :class="columns">
      <Motion v-for="i in props.max" :key="i" :animate="props.num >= i ? { scale: 1 } : { scale: 0.3 }" :initial="{ scale: 0.3 }" :transition="{ type: 'spring', duration: 0.5, bounce: 0.3 }" class="flex justify-center items-center rounded-full size-2 md:size-3 font-mono text-lg select-none will-change-transform" :class="props.num >= i ? color : 'bg-gray-200'" />
    </div>
  </div>
  <div v-else class="gap-1 grid grid-cols-6" @mouseenter="isHovering = true" @mouseleave="isHovering = false">
    <motion.div
      v-for="i in 18" :key="i"
      class="flex justify-center items-center bg-rose-100 rounded-full size-2 font-mono text-lg select-none will-change-transform"
      :animate="Math.floor((i - 1) / 6) % 2 === 1 && isHovering ? { translateX: props.arrow === 'right' ? 8 : -8 } : { translateX: 0 }" />
  </div>
</template>

<script setup lang="ts">
import { Motion, motion } from 'motion-v'

const props = defineProps<{
  num: number
  max: number
  color: 'rose-100' | 'rose-200' | 'rose-300' | 'rose-400' | 'rose-500' | 'rose-600'
  arrow?: 'left' | 'right'
  label?: string
}>()

const isArrow = computed(() => props.arrow !== undefined)
const isHovering = ref(false)

const color = computed(() => {
  switch (props.color) {
    case 'rose-100':
      return 'bg-rose-100'
    case 'rose-200':
      return 'bg-rose-200'
    case 'rose-300':
      return 'bg-rose-300'
    case 'rose-400':
      return 'bg-rose-400'
    case 'rose-500':
      return 'bg-rose-500'
    case 'rose-600':
      return 'bg-rose-600'
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
