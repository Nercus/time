<template>
  <div
    class="inline-flex relative justify-center items-center gap-2 bg-linear-to-b px-6 border rounded-lg size-11 font-black uppercase tracking-wide transition-all duration-150 ease-in-out select-none"
    :class="buttonClasses" @click="active = true">
    <span class="text-lg">{{ currentSymbol }}</span>
  </div>
</template>

<script setup lang="ts">
import { cva } from 'class-variance-authority'

const props = defineProps<{
  symbol: string | number | undefined
  color: 'blue' | 'green' | 'red' | 'orange' | 'yellow' | 'teal' | 'pink' | 'purple' | 'slate' | 'amber' | 'white'
  clickAnimation?: boolean
}>()

const symbols = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  dot: '.',
  dash: '-',
  colon: ':',
  arrowLeft: '<',
  arrowRight: '>',
} as const

const currentSymbol = computed(() => {
  if (props.symbol === undefined) {
    return ''
  }
  return symbols[props.symbol as keyof typeof symbols] || String(props.symbol)
})
const active = ref(false)

watch(() => props.symbol, (newSymbol) => {
  if (newSymbol === undefined) {
    return
  }
  active.value = true
  setTimeout(() => {
    active.value = false
  }, 150)
})

const buttonStyle = cva('', {
  variants: {
    color: {
      blue: 'from-blue-400 to-blue-600 border-blue-300 text-white',
      green: 'from-green-400 to-green-600 border-green-300 text-white',
      red: 'from-red-400 to-red-600 border-red-300 text-white',
      orange: 'from-orange-400 to-orange-600 border-orange-300 text-white',
      yellow: 'from-yellow-300 to-yellow-500 border-yellow-200 text-black',
      teal: 'from-teal-400 to-teal-600 border-teal-300 text-white',
      pink: 'from-pink-400 to-pink-600 border-pink-300 text-white',
      purple: 'from-purple-400 to-purple-600 border-purple-300 text-white',
      slate: 'from-slate-400 to-slate-600 border-slate-300 text-white',
      amber: 'from-amber-400 to-amber-600 border-amber-300 text-white',
      white: 'from-white to-slate-100 border-slate-200 text-black',
    },
    active: {
      true: 'translate-y-1',
      false: 'translate-y-0',
    },
  },
  compoundVariants: [
    {
      color: 'blue',
      active: true,
      class: ['active:shadow-[0_2px_0_#1e3a8a,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'blue',
      active: false,
      class: [' shadow-[0_6px_0_#1e3a8a,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'green',
      active: true,
      class: ['active:shadow-[0_2px_0_#15803d,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'green',
      active: false,
      class: [' shadow-[0_6px_0_#15803d,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'red',
      active: true,
      class: ['active:shadow-[0_2px_0_#dc2626,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'red',
      active: false,
      class: [' shadow-[0_6px_0_#dc2626,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'orange',
      active: true,
      class: ['active:shadow-[0_2px_0_#ea580c,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'orange',
      active: false,
      class: [' shadow-[0_6px_0_#ea580c,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'yellow',
      active: true,
      class: ['active:shadow-[0_2px_0_#eab308,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'yellow',
      active: false,
      class: [' shadow-[0_6px_0_#eab308,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'teal',
      active: true,
      class: ['active:shadow-[0_2px_0_#14b8a6,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'teal',
      active: false,
      class: [' shadow-[0_6px_0_#14b8a6,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'pink',
      active: true,
      class: ['active:shadow-[0_2px_0_#db2777,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'pink',
      active: false,
      class: [' shadow-[0_6px_0_#db2777,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'purple',
      active: true,
      class: ['active:shadow-[0_2px_0_#8b5cf6,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'purple',
      active: false,
      class: [' shadow-[0_6px_0_#8b5cf6,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'slate',
      active: true,
      class: ['active:shadow-[0_2px_0_#64748b,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'slate',
      active: false,
      class: [' shadow-[0_6px_0_#64748b,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'amber',
      active: true,
      class: ['active:shadow-[0_2px_0_#f59e0b,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'amber',
      active: false,
      class: [' shadow-[0_6px_0_#f59e0b,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
    {
      color: 'white',
      active: true,
      class: ['active:shadow-[0_2px_0_#e5e7eb,0_6px_12px_rgba(0,0,0,0.2)]'],
    },
    {
      color: 'white',
      active: false,
      class: [' shadow-[0_6px_0_#e5e7eb,0_10px_20px_rgba(0,0,0,0.25)]'],
    },
  ],
})

const buttonClasses = computed(() => buttonStyle({ color: props.color, active: active.value }))
</script>
