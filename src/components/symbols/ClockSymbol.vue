<template>
  <div class="gap-px md:gap-0.5 grid grid-cols-4" @mouseenter="startHoverAnimation" @mouseleave="stopHoverAnimation">
    <div v-for="(clock, index) in displayedRotations" :key="index" class="relative shadow-inner-xl rounded-full size-2 sm:size-3 md:size-4 lg:size-5">
      <div
        class="top-1/2 left-1/2 absolute bg-blue-900 rounded-full w-px md:w-0.5 h-1 sm:h-1.5 md:h-2 lg:h-2.5 origin-bottom transition-transform duration-500 ease-in-out transform" :style="`transform: translate(-50%, -100%) rotate(${clock.hour}deg)`" />
      <div
        class="top-1/2 left-1/2 absolute bg-blue-900 rounded-full w-px md:w-0.5 h-1 sm:h-1.5 md:h-2 lg:h-2.5 origin-bottom transition-transform duration-500 ease-in-out transform" :style="`transform: translate(-50%, -100%) rotate(${(clock.minute)}deg)`" />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SymbolTypes } from '../../composables/useSquares'

const props = defineProps<{
  symbol: string | number | undefined
  hoverAnimation?: boolean
}>()

const rotations = {
  'vertical': { hour: 0, minute: 180 },
  'horizontal': { hour: 270, minute: 90 },
  'top-left': { hour: 0, minute: 270 },
  'top-right': { hour: 0, minute: 90 },
  'bottom-left': { hour: 180, minute: 270 },
  'bottom-right': { hour: 180, minute: 90 },
  'default': { hour: 45, minute: 45 },
  'diagonal-left': { hour: 315, minute: 135 },
  'diagonal-right': { hour: 45, minute: 225 },
  'caret-left': { hour: 135, minute: 45 },
  'caret-right': { hour: 315, minute: 225 },
} as const

const symbols: Record<SymbolTypes, (keyof typeof rotations)[]> = {
  0: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  1: [
    'bottom-right',
    'horizontal',
    'bottom-left',
    'default',
    'top-right',
    'bottom-left',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'bottom-right',
    'top-left',
    'top-right',
    'bottom-left',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  2: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  3: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'default',
    'bottom-right',
    'top-left',
    'vertical',
    'default',
    'top-right',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  4: [
    'bottom-right',
    'bottom-left',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'default',
    'top-right',
    'top-left',
  ],
  5: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  6: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  7: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'default',
    'vertical',
    'vertical',
    'default',
    'default',
    'top-right',
    'top-left',
  ],
  8: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'vertical',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  9: [
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'bottom-left',
    'vertical',
    'vertical',
    'top-right',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'bottom-left',
    'vertical',
    'bottom-right',
    'horizontal',
    'top-left',
    'vertical',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
  ],
  arrowLeft: ['caret-left', 'horizontal', 'horizontal', 'horizontal'],
  arrowRight: ['horizontal', 'horizontal', 'horizontal', 'caret-right'],
  colon: [
    'default',
    'default',
    'default',
    'default',
    'default',
    'bottom-right',
    'bottom-left',
    'default',
    'default',
    'top-right',
    'top-left',
    'default',
    'default',
    'bottom-right',
    'bottom-left',
    'default',
    'default',
    'top-right',
    'top-left',
    'default',
    'default',
    'default',
    'default',
    'default',
  ],
  dash: [
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'bottom-right',
    'horizontal',
    'horizontal',
    'bottom-left',
    'top-right',
    'horizontal',
    'horizontal',
    'top-left',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
  ],
  dot: [
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'default',
    'bottom-right',
    'bottom-left',
    'default',
    'default',
    'top-right',
    'top-left',
    'default',
  ],
}

const clockRotations = computed(() => {
  const symbol = (props.symbol ?? 'default') as SymbolTypes
  if (!symbols[symbol]) {
    return []
  }
  return symbols[symbol].map(key => ({
    hour: rotations[key].hour,
    minute: rotations[key].minute,
  }))
})

const isHovering = ref(false)
const hoveredRotation = ref<{ hour: number, minute: number }[]>([])
let hoverTimeout: number | null = null

const displayedRotations = computed(() => {
  if (props.hoverAnimation && isHovering.value && hoveredRotation.value.length > 0) {
    return hoveredRotation.value
  }
  return clockRotations.value
})

function swapRotations() {
  return clockRotations.value.map(clock => ({
    hour: clock.minute,
    minute: clock.hour,
  }))
}

const animationDuration = 500

function startHoverAnimation() {
  if (!props.hoverAnimation) return

  isHovering.value = true
  hoveredRotation.value = swapRotations()

  hoverTimeout = window.setTimeout(() => {
    hoveredRotation.value = []
  }, animationDuration)
}

function stopHoverAnimation() {
  if (!props.hoverAnimation) return

  isHovering.value = false
  hoveredRotation.value = []

  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
    hoverTimeout = null
  }
}

onUnmounted(() => {
  if (hoverTimeout) {
    clearTimeout(hoverTimeout)
  }
})
</script>
