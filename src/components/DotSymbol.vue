<template>
  <canvas
    ref="canvasRef"
    class="size-8 md:size-10 lg:size-18 aspect-square" @mouseenter="handleHoverStart" />
</template>

<script setup lang="ts">
import type { SymbolTypes } from '../composables/useDots'
import { computed, onMounted, ref, watch } from 'vue'
import { useDots } from '../composables/useDots'

const props = defineProps<{
  symbol: SymbolTypes | undefined
  hoverAnimation?: boolean
}>()

const { getGridSize, getPattern } = useDots()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const gridSize = getGridSize()
const totalDots = gridSize * gridSize
const canvasSize = ref(80)
const dotGap = 1
const dotSize = computed(() => (canvasSize.value - dotGap * (gridSize + 1)) / gridSize)

const drawStep = ref(totalDots)
let animationFrame: number | null = null

function drawCanvas(step = totalDots) {
  const canvas = canvasRef.value
  if (!canvas) return
  canvas.width = canvasSize.value
  canvas.height = canvasSize.value
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  if (props.symbol === undefined || props.symbol === null) return // Explicitly check for undefined or null
  ctx.clearRect(0, 0, canvasSize.value, canvasSize.value)
  const pattern = getPattern(props.symbol)
  if (!pattern) return

  let dotCount = 0
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = dotGap + col * (dotSize.value + dotGap)
      const y = dotGap + row * (dotSize.value + dotGap)
      const isActive = pattern[row]?.[col] === 1 && dotCount < step
      ctx.beginPath()
      ctx.fillStyle = isActive ? 'black' : 'transparent'
      if (isActive) {
        ctx.rect(
          x,
          y,
          dotSize.value,
          dotSize.value,
        )
      }
      if (isActive) ctx.fill()
      ctx.closePath()
      dotCount += pattern[row]?.[col] === 1 ? 1 : 0
    }
  }
}

const animatedSpeed = computed(() => props.hoverAnimation ? 0.5 : 1.5)

function animateDrawStep() {
  if (drawStep.value < totalDots) {
    drawStep.value += animatedSpeed.value
    drawCanvas(drawStep.value)
    animationFrame = requestAnimationFrame(animateDrawStep)
  }
  else {
    drawCanvas(totalDots)
    animationFrame = null
  }
}

const initialDraw = ref(true)
function startDrawing() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  drawStep.value = 0
  if (initialDraw.value) {
    drawStep.value = totalDots
    drawCanvas(totalDots)
    initialDraw.value = false
    return
  }
  animateDrawStep()
}

function handleHoverStart() {
  if (props.hoverAnimation) {
    startDrawing()
  }
}

// Ensure the initial draw happens when the component is mounted
onMounted(() => {
  if (props.symbol !== undefined && props.symbol !== null) {
    startDrawing()
  }
})

watch(() => props.symbol, (newVal, oldVal) => {
  if (newVal !== undefined && newVal !== oldVal) startDrawing()
}, { immediate: true })
</script>

<style lang="css">
.pseudo-border:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 14px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}
</style>
