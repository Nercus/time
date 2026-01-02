<template>
  <div class="relative size-10">
    <component
      :is="previousSvgComponent" v-if="previousSvgComponent" alt="Symbol"
      class="absolute inset-0 size-10 symbol fade-out" />
    <component
      :is="svgComponent" alt="Symbol" class="absolute inset-0 size-10 symbol drawn-symbol" :class="{
        'hover-draw': props.hoverAnimation,
      }" />
  </div>
</template>

<script setup lang="ts">
import type { SymbolTypes } from '../../composables/useSquares'
import Zero from '../../assets/svgs/0.svg'
import One from '../../assets/svgs/1.svg'
import Two from '../../assets/svgs/2.svg'
import Three from '../../assets/svgs/3.svg'
import Four from '../../assets/svgs/4.svg'
import Five from '../../assets/svgs/5.svg'
import Six from '../../assets/svgs/6.svg'
import Seven from '../../assets/svgs/7.svg'
import Eight from '../../assets/svgs/8.svg'
import Nine from '../../assets/svgs/9.svg'
import arrowLeft from '../../assets/svgs/arrowLeft.svg'
import arrowRight from '../../assets/svgs/arrowRight.svg'
import colon from '../../assets/svgs/colon.svg'
import dash from '../../assets/svgs/dash.svg'
import dot from '../../assets/svgs/dot.svg'

const props = defineProps<{
  symbol: string | number | undefined
  hoverAnimation?: boolean
}>()

const svgMap: Record<SymbolTypes, string> = {
  0: Zero,
  1: One,
  2: Two,
  3: Three,
  4: Four,
  5: Five,
  6: Six,
  7: Seven,
  8: Eight,
  9: Nine,
  arrowLeft,
  arrowRight,
  colon,
  dash,
  dot,
}

const svgComponent = computed(() => {
  return svgMap[props.symbol as SymbolTypes] || null
})

const previousSvgComponent = shallowRef<string | null>(null)

watch(svgComponent, (_, oldVal) => {
  if (oldVal) {
    previousSvgComponent.value = oldVal
  }
})
</script>

<style>
@keyframes draw {
  to {
    stroke-dashoffset: 0;
  }
}

.symbol {
  stroke: #000;
  stroke-width: 10;
  stroke-linecap: round;
  fill: transparent;
}

.drawn-symbol path {
  stroke-dasharray: 1500;
  stroke-dashoffset: 1500;
  animation: draw 1s ease-in-out forwards;
}

.hover-draw:hover path {
  animation: draw 1s ease-in-out infinite alternate;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>
