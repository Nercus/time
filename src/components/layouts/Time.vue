<template>
  <main class="flex flex-row justify-center items-center gap-2 w-full">
    <slot v-if="breakpoints['2xl'].value" name="day" />
    <slot v-if="breakpoints['2xl'].value" name="date-separator" />
    <slot v-if="breakpoints['2xl'].value" name="month" />
    <slot v-if="breakpoints['2xl'].value" name="date-separator" />
    <slot v-if="breakpoints['2xl'].value" name="year" />
    <slot v-if="breakpoints['2xl'].value" name="date-time-separator" />
    <slot name="hour" />
    <slot name="time-separator" />
    <slot name="minute" />
    <slot name="time-separator" />
    <slot name="second" />
  </main>
</template>

<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>
