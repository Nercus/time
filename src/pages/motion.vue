<!-- eslint-disable vue/component-name-in-template-casing -->
<template>
  <div class="relative flex flex-1 justify-center items-center bg-white size-full overflow-hidden will-change-transform">
    <div class="flex-1 size-full">
      <Time class="fixed inset-0 size-screen noise-bg">
        <template #day>
          <MotionSymbol :symbol="time.day.value?.[0]" />
          <MotionSymbol :symbol="time.day.value?.[1]" />
        </template>
        <template #date-separator>
          <MotionSymbol symbol="." />
        </template>
        <template #date-time-separator>
          <MotionSymbol symbol="-" />
        </template>
        <template #month>
          <MotionSymbol :symbol="time.month.value?.[0]" />
          <MotionSymbol :symbol="time.month.value?.[1]" />
        </template>
        <template #year>
          <MotionSymbol :symbol="time.year.value?.[0]" />
          <MotionSymbol :symbol="time.year.value?.[1]" />
          <MotionSymbol :symbol="time.year.value?.[2]" />
          <MotionSymbol :symbol="time.year.value?.[3]" />
        </template>
        <template #hour>
          <MotionSymbol :symbol="time.hour.value?.[0]" />
          <MotionSymbol :symbol="time.hour.value?.[1]" />
        </template>
        <template #time-separator>
          <MotionSymbol symbol=":" />
        </template>
        <template #minute>
          <MotionSymbol :symbol="time.minute.value?.[0]" />
          <MotionSymbol :symbol="time.minute.value?.[1]" />
        </template>
        <template #second>
          <MotionSymbol :symbol="time.second.value?.[0]" />
          <MotionSymbol :symbol="time.second.value?.[1]" />
        </template>
      </Time>

      <Navigation>
        <template #back>
          <motion.div :hover="{ scale: 1.23 }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
            <Icon class="size-6 md:size-8 lg:size-14 text-rose-800 fluent--caret-left-20-filled" />
          </motion.div>
        </template>
        <template #next>
          <motion.div :hover="{ scale: 1.3 }" :transition="{ type: 'spring', duration: 0.75, bounce: 0.5 }">
            <Icon class="size-6 md:size-8 lg:size-14 text-rose-800 fluent--caret-right-20-filled" />
          </motion.div>
        </template>
      </Navigation>
    </div>
  </div>
</template>

<script setup lang="ts">
import { motion } from 'motion-v'

definePage({
  meta: {
    order: 2,
  },
})

useSeoMeta({
  title: 'Motion Clock',
  description: 'An animated clock and date display built with Vue 3, Tailwind CSS and Motion.',
  ogUrl: 'https://time.wintersperger.dev/motion',
  ogSiteName: 'Nerc\'s clock',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const time = useTime()
</script>

<style lang="css" scoped>
.noise-bg {
  background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuZGV2L3N2Z2pzIiB2aWV3Qm94PSIwIDAgNzAwIDcwMCIgd2lkdGg9IjcwMCIgaGVpZ2h0PSI3MDAiPjxkZWZzPjxmaWx0ZXIgaWQ9Im5ubm9pc2UtZmlsdGVyIiB4PSItMjAlIiB5PSItMjAlIiB3aWR0aD0iMTQwJSIgaGVpZ2h0PSIxNDAlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIHByaW1pdGl2ZVVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgY29sb3ItaW50ZXJwb2xhdGlvbi1maWx0ZXJzPSJsaW5lYXJSR0IiPgoJPGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuMDkyIiBudW1PY3RhdmVzPSI0IiBzZWVkPSIxNSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiByZXN1bHQ9InR1cmJ1bGVuY2UiPjwvZmVUdXJidWxlbmNlPgoJPGZlU3BlY3VsYXJMaWdodGluZyBzdXJmYWNlU2NhbGU9IjE1IiBzcGVjdWxhckNvbnN0YW50PSIwLjgiIHNwZWN1bGFyRXhwb25lbnQ9IjIwIiBsaWdodGluZy1jb2xvcj0iIzc5NTdBOCIgeD0iMCUiIHk9IjAlIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBpbj0idHVyYnVsZW5jZSIgcmVzdWx0PSJzcGVjdWxhckxpZ2h0aW5nIj4KICAgIAkJPGZlRGlzdGFudExpZ2h0IGF6aW11dGg9IjMiIGVsZXZhdGlvbj0iMTAwIj48L2ZlRGlzdGFudExpZ2h0PgogIAk8L2ZlU3BlY3VsYXJMaWdodGluZz4KICAKPC9maWx0ZXI+PC9kZWZzPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSJ0cmFuc3BhcmVudCI+PC9yZWN0PjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNzAwIiBmaWxsPSIjNzk1N2E4IiBmaWx0ZXI9InVybCgjbm5ub2lzZS1maWx0ZXIpIj48L3JlY3Q+PC9zdmc+');
  mask: radial-gradient(circle at center, black 0%, black 20%, transparent 100%);
  -webkit-mask: radial-gradient(circle at center, black 0%, black 20%, transparent 100%);
}
</style>
