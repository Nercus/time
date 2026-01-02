<template>
  <canvas
    ref="canvasRef"
    class="size-8 md:size-10 lg:size-18 aspect-square" @mouseenter="handleHoverStart" />
</template>

<script setup lang="ts">
import type { SymbolTypes } from '../../composables/useSquares'
import { computed, onMounted, ref, watch } from 'vue'
import { useSquares } from '../../composables/useSquares'

const props = defineProps<{
  symbol: SymbolTypes | undefined
  hoverAnimation?: boolean
}>()

const { getGridSize, getPattern } = useSquares()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const gridSize = getGridSize()
const totalSquares = gridSize * gridSize
const canvasSize = ref(80)
const squareGap = 1
const squareSize = computed(() => (canvasSize.value - squareGap * (gridSize + 1)) / gridSize)

const drawStep = ref(totalSquares)
let animationFrame: number | null = null

function drawCanvas(step = totalSquares) {
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

  let squareCount = 0
  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      const x = squareGap + col * (squareSize.value + squareGap)
      const y = squareGap + row * (squareSize.value + squareGap)
      const isActive = pattern[row]?.[col] === 1 && squareCount < step
      ctx.beginPath()
      ctx.fillStyle = isActive ? 'black' : 'transparent'
      if (isActive) {
        ctx.rect(
          x,
          y,
          squareSize.value,
          squareSize.value,
        )
      }
      if (isActive) ctx.fill()
      ctx.closePath()
      squareCount += pattern[row]?.[col] === 1 ? 1 : 0
    }
  }
}

const animatedSpeed = computed(() => props.hoverAnimation ? 0.5 : 1.5)

function animateDrawStep() {
  if (drawStep.value < totalSquares) {
    drawStep.value += animatedSpeed.value
    drawCanvas(drawStep.value)
    animationFrame = requestAnimationFrame(animateDrawStep)
  }
  else {
    drawCanvas(totalSquares)
    animationFrame = null
  }
}

const initialDraw = ref(true)
function startDrawing() {
  if (animationFrame) cancelAnimationFrame(animationFrame)
  drawStep.value = 0
  if (initialDraw.value) {
    drawStep.value = totalSquares
    drawCanvas(totalSquares)
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
