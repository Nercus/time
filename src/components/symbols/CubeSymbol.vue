<template>
  <div class="size-8 md:size-10 lg:size-18 perspective-normal" @mouseenter="animationOnHover" @mouseleave="animationOnHover">
    <div class="relative size-8 md:size-10 lg:size-18 transform-3d transition-all duration-500 ease-in-out select-none" :style="cubeTransform">
      <div
        class="absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl front"
        :class="getFaceColor('front')">
        {{ getFaceSymbol('front') }}
      </div>
      <div
        class="absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl back"
        :class="getFaceColor('back')">
        {{ getFaceSymbol('back') }}
      </div>
      <div
        class="right absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl"
        :class="getFaceColor('right')">
        {{ getFaceSymbol('right') }}
      </div>
      <div
        class="left absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl"
        :class="getFaceColor('left')">
        {{ getFaceSymbol('left') }}
      </div>
      <div
        class="top absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl"
        :class="getFaceColor('top')">
        {{ getFaceSymbol('top') }}
      </div>
      <div
        class="bottom absolute flex justify-center items-center bg-zinc-100 border border-zinc-400 size-full font-mono font-bold text-lg md:text-2xl lg:text-4xl"
        :class="getFaceColor('bottom')">
        {{ getFaceSymbol('bottom') }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { computed, ref, watch } from 'vue'

const props = defineProps<{
  symbol: string | number | undefined
  hoverAnimation?: boolean
}>()

const breakpoints = useBreakpoints(breakpointsTailwind)

const symbols = {
  0: { symbol: '0', color: 'text-red-400 shadow' },
  1: { symbol: '1', color: 'text-amber-400 shadow' },
  2: { symbol: '2', color: 'text-yellow-400 shadow' },
  3: { symbol: '3', color: 'text-green-400 shadow' },
  4: { symbol: '4', color: 'text-teal-400 shadow' },
  5: { symbol: '5', color: 'text-sky-400 shadow' },
  6: { symbol: '6', color: 'text-indigo-400 shadow' },
  7: { symbol: '7', color: 'text-violet-400 shadow' },
  8: { symbol: '8', color: 'text-fuchsia-400 shadow' },
  9: { symbol: '9', color: 'text-pink-400 shadow' },
  dot: { symbol: '.', color: 'text-zinc-300 shadow' },
  dash: { symbol: '-', color: 'text-zinc-300 shadow' },
  colon: { symbol: ':', color: 'text-zinc-300 shadow' },
  arrowLeft: { symbol: '<-', color: 'text-zinc-300 shadow' },
  arrowRight: { symbol: '->', color: 'text-zinc-300 shadow' },
} as const

const showSide = ref<'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'>('front')
const isTransitioning = ref(false)
const previousSide = ref<'front' | 'back' | 'left' | 'right' | 'top' | 'bottom'>('front')
const previousSymbol = ref<string | number | undefined>(undefined)

// Define adjacent sides for each face
const adjacentSides = {
  front: ['right', 'top', 'left', 'bottom'],
  back: ['left', 'top', 'right', 'bottom'],
  right: ['back', 'top', 'front', 'bottom'],
  left: ['front', 'top', 'back', 'bottom'],
  top: ['right', 'back', 'left', 'front'],
  bottom: ['right', 'front', 'left', 'back'],
} as const

// Watch for symbol changes and rotate to adjacent side
watch(() => props.symbol, (newSymbol, oldSymbol) => {
  if (newSymbol !== oldSymbol && oldSymbol !== undefined) {
    isTransitioning.value = true
    previousSide.value = showSide.value
    previousSymbol.value = oldSymbol

    // Get adjacent sides for current face and pick one randomly
    const adjacent = adjacentSides[showSide.value]
    const randomIndex = Math.floor(Math.random() * adjacent.length)
    showSide.value = adjacent[randomIndex]

    // After transition completes, update all faces
    setTimeout(() => {
      isTransitioning.value = false
    }, 500) // Match the CSS transition duration
  }
})

function animationOnHover() {
  if (props.hoverAnimation) {
    isTransitioning.value = true
    previousSide.value = showSide.value
    previousSymbol.value = props.symbol

    const adjacent = adjacentSides[showSide.value]
    const randomIndex = Math.floor(Math.random() * adjacent.length)
    showSide.value = adjacent[randomIndex]

    setTimeout(() => {
      isTransitioning.value = false
    }, 500)
  }
}

const cubeZ = computed(() => {
  if (breakpoints.lg.value) return 36
  if (breakpoints.md.value) return 20
  return 16
})

const cubeTransform = computed(() => {
  const z = cubeZ.value
  switch (showSide.value) {
    case 'front':
      return `transform: translateZ(-${z}px) rotateY(0deg);`
    case 'right':
      return `transform: translateZ(-${z}px) rotateY(-90deg);`
    case 'back':
      return `transform: translateZ(-${z}px) rotateY(-180deg);`
    case 'left':
      return `transform: translateZ(-${z}px) rotateY(90deg);`
    case 'top':
      return `transform: translateZ(-${z}px) rotateX(-90deg);`
    case 'bottom':
      return `transform: translateZ(-${z}px) rotateX(90deg);`
    default:
      return ''
  }
})

function getSymbolData(symbol: string | number | undefined) {
  const symbolKey = symbol as keyof typeof symbols
  return symbols[symbolKey]
}

function getColorForSymbol(symbol: string | number | undefined) {
  const symbolData = getSymbolData(symbol)

  if (!symbolData) return 'text-zinc-300'

  // If symbol is a number (0-9), use its specific color
  if (typeof symbol === 'number' || (typeof symbol === 'string' && /^\d$/.test(symbol))) {
    return symbolData.color
  }

  // For string symbols (dot, dash, colon, arrows), use unified color
  return 'text-zinc-300 border border-zinc-300 shadow-zinc-300 shadow'
}

function getFaceSymbol(face: string) {
  if (isTransitioning.value && face === previousSide.value) {
    return getSymbolData(previousSymbol.value)?.symbol || null
  }
  return getSymbolData(props.symbol)?.symbol || null
}

function getFaceColor(face: string) {
  if (isTransitioning.value && face === previousSide.value) {
    return getColorForSymbol(previousSymbol.value)
  }
  return getColorForSymbol(props.symbol)
}
</script>

<style lang="css" scoped>
.front,
.right,
.back,
.left,
.top,
.bottom {
  /* Default for sm */
  --cube-z: 16px;
}

@media (min-width: 768px) {
  .front,
  .right,
  .back,
  .left,
  .top,
  .bottom {
    --cube-z: 20px;
  }
}

@media (min-width: 1024px) {
  .front,
  .right,
  .back,
  .left,
  .top,
  .bottom {
    --cube-z: 36px;
  }
}

.front {
  transform: rotateY(0deg) translateZ(var(--cube-z));
}

.right {
  transform: rotateY(90deg) translateZ(var(--cube-z));
}

.back {
  transform: rotateY(180deg) translateZ(var(--cube-z));
}

.left {
  transform: rotateY(-90deg) translateZ(var(--cube-z));
}

.top {
  transform: rotateX(90deg) translateZ(var(--cube-z));
}

.bottom {
  transform: rotateX(-90deg) translateZ(var(--cube-z));
}
</style>
