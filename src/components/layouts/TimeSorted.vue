<template>
  <main class="flex flex-row justify-center items-center size-full">
    <div class="flex flex-row justify-center items-start gap-4 md:gap-10 w-full">
      <slot v-if="breakpoints['2xl'].value" name="year" />
      <slot v-if="breakpoints['2xl'].value" name="separator" />
      <slot v-if="breakpoints['2xl'].value" name="month" />
      <slot v-if="breakpoints['2xl'].value" name="separator" />
      <slot v-if="breakpoints['2xl'].value" name="day" />
      <slot v-if="breakpoints['2xl'].value" name="separator" />
      <slot name="hour" />
      <slot name="separator" />
      <slot name="minute" />
      <slot name="separator" />
      <slot name="second" />
    </div>
  </main>
</template>

<script lang="ts" setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)
</script>
