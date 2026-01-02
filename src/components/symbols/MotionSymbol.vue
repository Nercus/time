<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <motion.div
    class="flex flex-col content-start max-h-screen will-change-transform" :animate="{ y }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
    <span v-for="el in range" :key="el" :class="[el === props.symbol ? 'opacity-100' : 'opacity-10 sm:opacity-30']" class="flex justify-center items-center rounded font-semibold text-rose-800 text-5xl tracking-widest transition-opacity duration-250 select-none">
      {{ Number(el) ? Number(el) : el }}
    </span>
  </motion.div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

const props = defineProps<{
  symbol: string | number | undefined
}>()

const height = 48
const y = ref(0)

watch(() => props.symbol, (newValue) => {
  if (typeof newValue !== 'number' || newValue < 0 || newValue > 9) {
    y.value = height * 0.5 - 3
    return
  }
  y.value = -((newValue - 5) * height)
}, { immediate: true })

const range = computed(() => {
  if (typeof props.symbol !== 'number' || props.symbol < 0 || props.symbol > 9) {
    return props.symbol
  }
  return Array.from({ length: 10 }, (_, i) => i)
})
</script>
